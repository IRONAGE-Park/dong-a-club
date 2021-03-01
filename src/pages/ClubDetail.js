import React from 'react';

import ClubDetailContainer from '../containers/main/ClubDetailContainer';

const ClubDetail = ({ match }) => {
    const id = parseInt(match.params.id);
    return <ClubDetailContainer id={id} />;
};

export default ClubDetail;
