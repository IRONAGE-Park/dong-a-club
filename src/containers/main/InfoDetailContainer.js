import React, { useCallback, useEffect, useState } from 'react';
import { requestClubList } from '../../api/club';
import { requestDivisionList } from '../../api/division';

import styles from './InfoDetailContainer.module.scss';

const InfoDetailContainer = ({ id }) => {
    const [division, setDivision] = useState(null);
    const [clubs, setClubs] = useState([]);

    const callGetDivisionList = useCallback(async () => {
        try {
            const res = await requestDivisionList();
            setDivision(res.find(division => division.id === id));
        } catch(e) {
            console.log(e);
        }
    }, []);
    const callGetClubList = useCallback(async () => {
        try {
            const res = await requestClubList();
            setClubs(res);
        } catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        callGetClubList();
        callGetDivisionList();
    // eslint-disable-next-line
    }, []);

    return (
        <div className={styles['container']}>
            {division &&
            <h3 className={styles['title-area']}>
                <span className={styles['title']}>{division.name.ko}</span>
            </h3>}
            <div className={styles['content']}>
                이 분과는 {division && division.name.ko} 분과입니다.
            </div>
        </div>
    );
};

export default InfoDetailContainer;