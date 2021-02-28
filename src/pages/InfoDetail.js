import React from 'react';

import InfoDetailContainer from '../containers/main/InfoDetailContainer';

const InfoDetail = ({ match }) => {
    const id = parseInt(match.params.id);
    return <InfoDetailContainer id={id} />;
};

export default InfoDetail;
