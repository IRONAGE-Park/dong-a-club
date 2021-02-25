import React from 'react';
import { ButtonBase } from '@material-ui/core';
import Logo from '../../components/svg/Logo';
import styles from './MainContainer.module.scss';


const MainContainer = () => {

    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['title']}>
                    <Logo className={styles['logo']} />
                    <h3 className={styles['association']}>동아대학교 동아리 연합회</h3>
                    <h1 className={styles['name']}>동아리 MBTI</h1>
                </div>
                <div className={styles['action']}>
                    <ButtonBase className={styles['button']}>
                        MBTI 시작하기
                    </ButtonBase>
                    <ButtonBase className={styles['button']}>
                        분과 정보 보기
                    </ButtonBase>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
