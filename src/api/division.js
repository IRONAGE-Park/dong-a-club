import React from 'react';
import { MenuBook, SportsHandball, SupervisorAccount, School, AccountBalance } from '@material-ui/icons';

const division = [
    { id: 1, name: { ko: '학술1', en: '' }, icon: <MenuBook /> },
    { id: 2, name: { ko: '학술2', en: '' }, icon: <MenuBook /> },
    { id: 3, name: { ko: '체육', en: '' }, icon: <SportsHandball /> },
    { id: 4, name: { ko: '봉사', en: '' }, icon: <SupervisorAccount /> },
    { id: 5, name: { ko: '문예1', en: '' }, icon: <AccountBalance /> },
    { id: 6, name: { ko: '문예2', en: '' }, icon: <AccountBalance /> },
    { id: 7, name: { ko: '동문', en: '' }, icon: <School /> },
];


export const requestDivisionList = async () => {
    return division;
};