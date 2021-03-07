import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './Header.module.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Paths } from '../../paths';

const Header = ({ sidebarOpen, handleClickSidebarOpen }) => {
    const location = useLocation();
    const history = useHistory();

    const back = !(location.pathname === Paths.index);

    return (
        <AppBar className={styles['header']}>
            <Toolbar>
                {back && <IconButton onClick={() => history.goBack()} edge="start" className={styles['header-icon']}>
                    <ArrowBackIcon />
                </IconButton>}
                <Typography variant="h6" className={styles['title']}>
                    <Link className={styles['link']} to={Paths.index}>
                        동아리 MBTI
                    </Link>
                </Typography>
                <IconButton onClick={() => handleClickSidebarOpen(!sidebarOpen)} edge="end" className={styles['header-icon']}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;