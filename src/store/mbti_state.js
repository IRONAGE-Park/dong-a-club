import { createAction, handleActions } from 'redux-actions';

const SET = 'mbti_state/SET_MBTI_STATE';

export const mbtiStateSet = createAction(SET, (state, index) => ({ state, index }));

const initialState = [];

const mbti_state = handleActions(
    {
        [SET]: (state, action) => {
            const { state: mbtiState, index } = action.payload;
            const newState = state.concat();
            newState[index] = mbtiState;
            return newState;
        }
    },
    initialState
);

export default mbti_state;