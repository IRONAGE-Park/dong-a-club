import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import PreloadContext from './contexts/PreloadContext';
import rootReducer, { rootSaga } from './store';
/* Front-End */

import express from 'express';
import path from 'path';
import fs from 'fs';
/* Back-End */


const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);

const chunks = Object.keys(manifest.files)
    .filter(key => /chunk\.js$/.exec(key))
    .map(key => `<script src="${manifest.files[key]}"></script>`)
    .join('');

function createPage(root, stateScript) {
    return `
    <!DOCTYPE html>
    <html lang="kr">
        <head>
            <meta charset="UTF-8" />
            <meta name="theme-color" content="#bc9e3c" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="동아대학교, 동연회, 동아리 연합회" />
            <meta name="Author" content="동아대학교, 동연회, 동아리 연합회" />
            <meta name="Keywords" content="동아대학교, 동연회, 동아리 연합회" />
            <meta name="Subject" content="동아대학교, 동연회, 동아리 연합회" />
            <meta property="og:type" content="동아리 MBTI" />
            <meta property="og:title" content="동아리 MBTI" />
            <meta property="og:description" content="동아대학교, 동연회, 동아리 연합회" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <link rel="apple-touch-icon" sizes="57x57" href="%PUBLIC_URL%/apple-icon-57x57.png">
            <link rel="apple-touch-icon" sizes="60x60" href="%PUBLIC_URL%/apple-icon-60x60.png">
            <link rel="apple-touch-icon" sizes="72x72" href="%PUBLIC_URL%/apple-icon-72x72.png">
            <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/apple-icon-76x76.png">
            <link rel="apple-touch-icon" sizes="114x114" href="%PUBLIC_URL%/apple-icon-114x114.png">
            <link rel="apple-touch-icon" sizes="120x120" href="%PUBLIC_URL%/apple-icon-120x120.png">
            <link rel="apple-touch-icon" sizes="144x144" href="%PUBLIC_URL%/apple-icon-144x144.png">
            <link rel="apple-touch-icon" sizes="152x152" href="%PUBLIC_URL%/apple-icon-152x152.png">
            <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-icon-180x180.png">
            <link rel="icon" type="image/png" sizes="192x192"  href="%PUBLIC_URL%/android-icon-192x192.png">
            <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="96x96" href="%PUBLIC_URL%/favicon-96x96.png">
            <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png">
            <meta name="msapplication-TileColor" content="#bc9e3c">
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
            
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

            <title>동아리 MBTI :: 동아대학교 동아리 연합회</title>
            <link href="${manifest.files['main.css']}" rel="stylesheet" />
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
            ${root}
            </div>
            ${stateScript}
            <script src="${manifest.files['runtime-main.js']}"></script>
            ${chunks}
            <script src="${manifest.files['main.js']}"></script>
        </body>
    </html>
    `;
}

const app = express();
const createError = require('http-errors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.all('*', (req, res, next) => {
    // const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    // if (protocol === 'https') {
    //     next();
    // } else {
    //     const from = `${protocol}://${req.hostname}${req.url}`;
    //     const to = `https://${req.hostname}${req.url}`;
    //     console.log(`[${req.method}]: ${from} -> ${to}`);
    //     res.redirect(to);
    // }
// });

const serverRender = async (req, res, next) => {
    const context = {};

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );

    const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

    const preloadContext = {
        done: false,
        promises: []
    };

    const jsx = (
        <PreloadContext.Provider value={preloadContext}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        </PreloadContext.Provider>
    );


    ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한 번 렌더링합니다.
    store.dispatch(END); // redux-saga의 END 액션을 발생시키면 액션을 모니터링하는 사가들이 모두 종료됨.
    try {
        await sagaPromise; // 기존에 진행 중이던 사가들이 모두 끝날 때까지 기다립니다.
        await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
    } catch (e) {
        return res.status(500);
    }
    preloadContext.done = true;
    const root = ReactDOMServer.renderToString(jsx); // 렌더링을 함.
    // JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리
    // https://redux.js.org/recipes/server-rendering#security-considerations
    const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
    const stateScript = `<script>__PRELOAD_STATE__ = ${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입.
    res.send(createPage(root, stateScript)); // 결과물 응답.
};

const serve = express.static(path.resolve('./build'), {
    index: false
});

app.use(serve);
app.use(serverRender);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const http = require('http');
const port = normalizePort(process.env.PORT || '80');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('listening', function (e) {
    console.log(port + ' port open');
})
server.on('error', onError);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}