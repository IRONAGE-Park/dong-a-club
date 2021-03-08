import React, { useCallback, useEffect, useState } from 'react';
import { requestClubDetail } from '../../api/club';

import styles from './ClubDetailContainer.module.scss';

const InfoDetailContainer = ({ id }) => {
    const [club, setClub] = useState(null);

    const callGetClubDetail = useCallback(async () => {
        try {
            const res = await requestClubDetail(id);
            setClub(res);
        } catch (e) {
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        callGetClubDetail();
    // eslint-disable-next-line
    }, []);

    return (
        <div className={styles['container']}>
            {club && <img className={styles['banner']} src={process.env.PUBLIC_URL + '/images/' + (club.image ? club.image : 'default.png')} alt="club_logo" />}
            <div className={styles['content']}>
                <h2 className={styles['title']}>{club && club.name}</h2>
                {club && (club.intro ? <p className={styles['intro']} dangerouslySetInnerHTML={{ __html: club.intro }} /> : <p className={styles['none']}>동아리 소개가 없습니다.</p>)}
                <div className={styles['contact']}>동아리 회장 성함: {club && club.leader.name} | 연락처: {club && club.leader.phone}</div>
                <div className={styles['address']}>학생회관(S02) {club && club.address}호</div>
            </div>
            <p className={styles['description']}>※ 다른 동아리가 궁금하시다면 우측상단의 메뉴에 분과정보에서 더 둘러 보다가 가세요!</p>
        </div>
    );
};

export default InfoDetailContainer;