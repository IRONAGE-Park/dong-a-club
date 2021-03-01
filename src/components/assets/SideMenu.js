import React from 'react';
import { ButtonBase } from '@material-ui/core';

import styles from './SideMenu.module.scss';
import { useHistory } from 'react-router-dom';
import { Paths } from '../../paths';

const SideMenu = () => {
    const history = useHistory();
    return (
        <nav className={styles['sidebar']}>
            <ul className={styles['list']}>
                <ButtonBase onClick={() => history.push(Paths.mbti)} component="li" className={styles['item']}>동아리 MBTI</ButtonBase>
                <ButtonBase onClick={() => history.push(Paths.division)} component="li" className={styles['item']}>분과 정보</ButtonBase>
            </ul>
        </nav>
    );
};

export default SideMenu;