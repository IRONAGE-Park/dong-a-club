import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { Info, Main, Mbti, InfoDetail } from './pages';
import DialogContainer from './containers/assets/DialogContainer';

import Header from './components/assets/Header';

import { Paths } from './paths';
import './App.scss';
import Sidebar from 'react-sidebar';
import SideMenu from './components/assets/SideMenu';

const App = () => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onClickSidebar = state => setSidebarOpen(state);

    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname]);

    return (
        <div className="App">
            <Sidebar
                sidebar={<SideMenu />}
                open={sidebarOpen}
                onSetOpen={onClickSidebar}
                touch={true}
                touchHandleWidth={50}
                dragToggleDistance={50}
            >
                <Header sidebarOpen={sidebarOpen} handleClickSidebarOpen={onClickSidebar} />
                <Switch>
                    <Route path={Paths.index} component={Main} exact />
                    <Route path={Paths.mbti} component={Mbti} exact />
                    <Route path={Paths.info} component={Info} exact />
                    <Route path={Paths.info + '/:id'} component={InfoDetail} exact />
                </Switch>
            </Sidebar>
            <DialogContainer />
        </div>
    );
};

export default App;
