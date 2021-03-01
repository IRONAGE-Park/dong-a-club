import React, { useCallback, useEffect, useState } from 'react';

import { ButtonBase } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { requestDivisionList } from '../../api/division';
import { Paths } from '../../paths';

import styles from './DivisionContainer.module.scss';


const DivisionContainer = () => {
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
            <ul className={styles['list']}>
                {divisions.map((division, index) => (
                    <ButtonBase key={division.id} component="li" className={styles['item']}>
                        <Link to={Paths.division + '/' + division.id} className={styles['link']}>
                            {division.icon}
                            <span className={styles['name']}>{division.name}</span>
                            <span className={styles['detail']}>
                                {'자세히 보기 >'}
                            </span>
                        </Link>
                    </ButtonBase>
                ))}
            </ul>
        </div>
    );
};

export default DivisionContainer;