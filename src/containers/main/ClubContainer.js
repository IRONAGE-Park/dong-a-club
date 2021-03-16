import React, { useCallback, useEffect, useState } from 'react';

import { ButtonBase } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { requestClubList } from '../../api/club';
import { Paths } from '../../paths';

import styles from './ClubContainer.module.scss';


const ClubContainer = () => {
    const [clubs, setClubs] = useState([]);
    const callGetClubList = useCallback(async () => {
        try {
            const res = await requestClubList();
            setClubs(res);
        } catch(e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        callGetClubList();
    // eslint-disable-next-line
    }, []);

    return (
        <div className={styles['container']}>
            <ul className={styles['list']}>
                {clubs.map((club, index) => {
                    const image_path = process.env.PUBLIC_URL + '/images/' + (club.image ? club.image : 'default.png');
                    return (
                        <ButtonBase key={club.id} component="li" className={styles['item']}>
                            <Link to={Paths.club + '/' + club.id} className={styles['link']}>
                                <div className={styles['thumbnail']} style={{ backgroundImage: 'url(' + image_path + ')'}} />
                                <div className={styles['text']}>
                                    <p className={styles['name']}>{club.name}</p>
                                    <p className={styles['intro']} dangerouslySetInnerHTML={{__html: club.intro}} />
                                    <span className={styles['detail']}>
                                        {'자세히 보기 >'}
                                    </span>
                                </div>
                            </Link>
                        </ButtonBase>
                    )
                })}
            </ul>
        </div>
    );
};

export default ClubContainer;