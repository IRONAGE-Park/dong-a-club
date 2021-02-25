import React from 'react';
import { ButtonBase } from '@material-ui/core';

import styles from './SideMenu.module.scss';

const SideMenu = () => {

    return (
        <nav className={styles['sidebar']}>
            <ul className={styles['list']}>
                <ButtonBase component="li" className={styles['item']}>동아리 MBTI</ButtonBase>
                <ButtonBase component="li" className={styles['item']}>분과 정보</ButtonBase>
            </ul>
        </nav>
    );
};

export default SideMenu;