import React, { useCallback, useEffect, useState } from 'react';

import { ButtonBase } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SchoolIcon from '@material-ui/icons/School';


import { Link } from 'react-router-dom';
import { requestDivisionList } from '../../api/division';
import { Paths } from '../../paths';

import styles from './InfoContainer.module.scss';


const InfoContainer = () => {
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
                        <Link to={Paths.info + '/' + division.id} className={styles['link']}>
                            {division.icon}
                            <span className={styles['name']}>{division.name.ko}</span>
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

export default InfoContainer;