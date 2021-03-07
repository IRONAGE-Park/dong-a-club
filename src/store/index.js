import { combineReducers } from 'redux';
import dialog from './dialog';
import mbti_state from './mbti_state';

const rootReducer = combineReducers({
    dialog,
    mbti_state,
});

export function* rootSaga() {}

export default rootReducer;
