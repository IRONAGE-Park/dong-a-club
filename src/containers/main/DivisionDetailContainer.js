import React, { useCallback, useEffect, useState } from 'react';
import { ButtonBase } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { requestClubList } from '../../api/club';
import { requestDivisionList } from '../../api/division';
import { Paths } from '../../paths';

import styles from './DivisionDetailContainer.module.scss';

const DivisionDetailContainer = ({ id }) => {
    const history = useHistory();
    const [division, setDivision] = useState(null);
    const [clubs, setClubs] = useState([]);

    const callGetDivisionList = useCallback(async () => {
        try {
            const res = await requestDivisionList();
            setDivision(res.find(division => division.id === id));
        } catch(e) {
            console.log(e);
        }
    }, [id]);
    const callGetClubList = useCallback(async () => {
        try {
            const res = await requestClubList(id);
            setClubs(res);
        } catch (e) {
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        callGetClubList();
        callGetDivisionList();
    // eslint-disable-next-line
    }, []);

    return (
        <div className={styles['container']}>
            {division &&
            <h3 className={styles['title-area']}>
                <span className={styles['title']}>{division.name}</span>
            </h3>}
            <div className={styles['content']}>
                <h4 className={styles['summary']}>이 분과는 {division && division.name} 분과입니다.</h4>
                <p className={styles['detail']}>{division && division.intro}</p>
                <p className={styles['contact']}>분과장 성함: {division && division.leader.name} | 연락처: {division && division.leader.phone}</p>
            </div>
            <div className={styles['belong']}>
                <h4 className={styles['title']}>소속 동아리</h4>
                <ul className={styles['list']}>
                    {clubs.map(club => {
                        const image_path = process.env.PUBLIC_URL + '/images/' + (club.image ? club.image : 'default.png');
                        return (
                            <ButtonBase key={club.id} component="li" className={styles['item']} onClick={() => history.push(Paths.club + '/' + club.id)}>
                                <div className={styles['thumbnail']} style={{ backgroundImage: 'url(' + image_path + ')'}} />
                                <div className={styles['text']}>
                                    <h5 className={styles['club-name']}>{club.name}</h5>
                                    <p className={styles['view']}>{'자세히 보기 >'}</p>
                                </div>
                            </ButtonBase>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DivisionDetailContainer;