import React, { useCallback, useEffect, useState } from 'react';
import { ButtonBase } from '@material-ui/core';

import styles from './MbtiGameContainer.module.scss';
import { useHistory } from 'react-router-dom';
import { requestCurrentMbti } from '../../api/algorithm';
import { Paths } from '../../paths';

const MbtiGameContainer = ({ division_id, level }) => {
    const history = useHistory();
    const [state, setState] = useState([]);
    const [question, setQuestion] = useState(null);


    const onClickPushState = useCallback(type => {
        setState(prevState => prevState.concat(type));
        history.push(Paths.mbti + `/${division_id}/${level + 1}`);
    }, [history, division_id, level]);
    const onClickPushHistory = useCallback(id => history.push(Paths.club + '/' + id), [history]);

    const callGetCurrentMbti = useCallback(async () => {
        try {
            const res = await requestCurrentMbti(division_id, level, state.slice(0, level));
            setQuestion(res);
        } catch (e) {
            console.log(e);
        }
    }, [division_id, level, state]);

    useEffect(() => {
        if (state.length < level) {
            history.replace(Paths.mbti);
        } else {
            callGetCurrentMbti();
        }
        // eslint-disable-next-line
    }, [division_id, level]);

    return (
        <div className={styles['container']}>
            <h3 className={styles['question']}>{question && question.question}</h3>
            <div className={styles['action-area']}>
                {question && question.actions.map(action => (
                    <ButtonBase
                        key={action.name}
                        className={styles['action-button']}
                        onClick={() => {action.action === 'next' ? onClickPushState(action.type) : onClickPushHistory(action.action)}}    
                    >
                        {action.name}
                    </ButtonBase>
                ))}
            </div>
        </div>
    );
};

export default MbtiGameContainer;