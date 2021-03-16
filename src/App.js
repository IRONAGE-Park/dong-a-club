import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import {
    Main,
    Mbti,
    MbtiGame,
    DivisionDetail,
    Division,
    ClubDetail,
    Club,
} from './pages';
import DialogContainer from './containers/assets/DialogContainer';

import Header from './components/assets/Header';

import { Paths } from './paths';
import Sidebar from 'react-sidebar';
import SideMenu from './components/assets/SideMenu';
import './App.scss';

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
                pullRight={true}
            >
                <Header sidebarOpen={sidebarOpen} handleClickSidebarOpen={onClickSidebar} />
                <TransitionGroup
                    className='transition-group'
                    appear={true}    
                >
                    <CSSTransition key={location.pathname} 
                        classNames="home-transition"
                        timeout={250}
                    >
                        {/* <HashRouter>
                            <CacheSwitch location={location}>
                                <CacheRoute path={Paths.index} component={Main} exact />
                                <CacheRoute path={Paths.mbti} component={Mbti} exact />
                                <CacheRoute path={Paths.mbti + '/:division_id/:level?'} component={MbtiGame} exact />
                                <CacheRoute path={Paths.division} component={Division} exact />
                                <CacheRoute path={Paths.division + '/:id'} component={DivisionDetail} exact />
                                <CacheRoute path={Paths.club + '/:id'} component={ClubDetail} exact />
                            </CacheSwitch>
                        </HashRouter> */}
                        <Switch location={location}>
                            <Route path={Paths.index} component={Main} exact />
                            <Route path={Paths.mbti} component={Mbti} exact />
                            <Route path={Paths.mbti + '/:division_id/:level?'} component={MbtiGame} exact />
                            <Route path={Paths.division} component={Division} exact />
                            <Route path={Paths.division + '/:id'} component={DivisionDetail} exact />
                            <Route path={Paths.club} component={Club} exact />
                            <Route path={Paths.club + '/:id'} component={ClubDetail} exact />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Sidebar>
            <DialogContainer />
        </div>
    );
};

export default App;
