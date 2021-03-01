import { ButtonBase } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestDivisionList } from '../../api/division';
import { Paths } from '../../paths';

import styles from './MbtiContainer.module.scss';

const MbtiContainer = () => {
    const history = useHistory();
    const [divisions, setDivisions] = useState([]);
    const callGetDivisionList = useCallback(async () => {
        try {
            const res = await requestDivisionList();
            setDivisions(res);
        } catch(e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        callGetDivisionList();
    // eslint-disable-next-line
    }, []);

    return (
        <div className={styles['container']}>
            <div className={styles['title-area']}>
                <h2 className={styles['title']}>MBTI 분과를 선택하세요.</h2>
            </div>
            <div className={styles['content']}>
                {divisions.map(division =>
                <div key={division.id} className={styles['button-area']}>
                    <ButtonBase className={styles['button']} onClick={() => history.push(Paths.mbti + '/' + division.id)}>
                        <div className={styles['body']}>
                            {division.icon}
                            <p className={styles['name']}>{division.name}</p>
                        </div>
                    </ButtonBase>
                </div>)}
            </div>
        </div>
    );
};

export default MbtiContainer;