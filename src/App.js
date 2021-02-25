import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from './pages';
import DialogContainer from './containers/assets/DialogContainer';

import Header from './components/assets/Header';

import { Paths } from './paths';
import './App.scss';
import Sidebar from 'react-sidebar';
import SideMenu from './components/assets/SideMenu';

const App = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onClickSidebar = state => setSidebarOpen(state);
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
                </Switch>
            </Sidebar>
            <DialogContainer />
        </div>
    );
};

export default App;
