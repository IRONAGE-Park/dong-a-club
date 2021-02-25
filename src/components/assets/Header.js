import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './Header.module.scss';

const Header = ({ sidebarOpen, handleClickSidebarOpen }) => {


    return (
        <AppBar className={styles['header']}>
            <Toolbar>
                <IconButton onClick={() => handleClickSidebarOpen(!sidebarOpen)} edge="start" className={styles['header-icon']}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={styles['title']}>
                    동아리 MBTI
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;