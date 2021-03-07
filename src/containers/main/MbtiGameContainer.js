import React, { useCallback, useEffect, useState } from 'react';
import { ButtonBase } from '@material-ui/core';

import styles from './MbtiGameContainer.module.scss';
import { useHistory } from 'react-router-dom';
import { requestCurrentMbti } from '../../api/algorithm';
import { Paths } from '../../paths';
import { useDispatch, useSelector } from 'react-redux';
import { mbtiStateSet } from '../../store/mbti_state';

const getKoreanNumbering = number => {
    switch (number) {
        case 1: return '한';
        case 2: return '두';
        case 3: return '세';
        case 4: return '네';
        case 5: return '다섯';
        case 6: return '여섯';
        case 7: return '일곱';
        case 8: return '여덟';
        case 9: return '아홉';
        default: return 'N';
    }
}

const MbtiGameContainer = ({ division_id, level }) => {
    const history = useHistory();
    const stateDispatch = useDispatch();
    const state = useSelector(state => state.mbti_state);
    // const [state, setState] = useState([]);
    const [question, setQuestion] = useState(null);


    const onClickPushState = useCallback(type => {
        // setState(prevState => prevState.concat(type));
        stateDispatch(mbtiStateSet(type, level));
        history.push(Paths.mbti + `/${division_id}/${level + 1}`);
        // eslint-disable-next-line
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
    }, [division_id, state.length, level]);

    return (
        <div className={styles['container']}>
            <h3 className={styles['question']}>
                {question && (question.question === 'result' ?
                `분석결과 ${getKoreanNumbering(question.actions.length)} 가지 결과가 발견되었습니다.`
                : question.question)}
            </h3>
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