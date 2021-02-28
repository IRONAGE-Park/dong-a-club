import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

const Header = ({ sidebarOpen, handleClickSidebarOpen }) => {


    return (
        <AppBar className={styles['header']}>
            <Toolbar>
                <IconButton onClick={() => handleClickSidebarOpen(!sidebarOpen)} edge="start" className={styles['header-icon']}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={styles['title']}>
                    <Link className={styles['link']} to={Paths.index}>
                        동아리 MBTI
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;