import React from 'react';

import MbtiGameContainer from '../containers/main/MbtiGameContainer';

const MbtiGame = ({ match }) => {
    const division_id = parseInt(match.params.division_id);
    const level = parseInt(match.params.level);
    return <MbtiGameContainer division_id={division_id} level={(isNaN(level) ? 0 : level)}  />;
};

export default MbtiGame;
