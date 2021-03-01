import React from 'react';

import DivisionDetailContainer from '../containers/main/DivisionDetailContainer';

const DivisionDetail = ({ match }) => {
    const id = parseInt(match.params.id);
    return <DivisionDetailContainer id={id} />;
};

export default DivisionDetail;
