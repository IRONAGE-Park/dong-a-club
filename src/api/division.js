import React from 'react';
import { MenuBook, SportsHandball, SupervisorAccount, School, AccountBalance, NaturePeople } from '@material-ui/icons';

const division = [
    { id: 1, name: '학술1', leader: { name: '김윤영', phone: '010-9185-1522' }, icon: <MenuBook />, intro: '여행, 문화 활동과 더불어 다양한 학술적 연구를 진행하는 분과' },
    { id: 2, name: '학술2', leader: { name: '김도완', phone: '010-2412-7589' }, icon: <MenuBook />, intro: '대외 교류와 스터디, 다양한 장르의 토론 및 강연을 목적으로 하는 분과' },
    { id: 3, name: '문예1', leader: { name: '김묘진', phone: '010-5543-4367' }, icon: <AccountBalance />, intro: '미술, 영화, 문학 등 문화를 즐기며 더 나아가 창작활동을 하는 분과' },
    { id: 4, name: '문예2', leader: { name: '최권능', phone: '010-7614-5546' }, icon: <AccountBalance />, intro: '음악, 댄스, 연극 등 공연 및 다양한 퍼포먼스를 목적으로 하는 분과' },
    { id: 5, name: '봉사', leader: { name: '박강덕', phone: '010-3331-7305' }, icon: <SupervisorAccount />, intro: '다양한 사람들과 만남을 통한 많은 인연과 다양한 봉사활동을 통해 자신의 능력을 키워 스스로 성장할 수 있는 분과' },
    { id: 6, name: '종교', leader: { name: '강은혁', phone: '010-5044-1712' }, icon: <NaturePeople />, intro: '나와 같은 종교인을 만나 신학 공부, 종교 활동을 하며 다양한 활동을 하는 분과' },
    { id: 7, name: '체육', leader: { name: '문승진', phone: '010-4034-8484' }, icon: <SportsHandball />, intro: '구기종목 이외에도 레저스포츠 등 폭 넓고 다양한 체육활동을 통해 몸과 마음을 단련할 수 있는 분과' },
    { id: 8, name: '동문', leader: { name: '배지민', phone: '010-8224-1567' }, icon: <School />, intro: '고등학교부터 대학교까지 인연을 계속 이어나갈 수 있는 분과(동아삼성, 대동남성)' },
];


export const requestDivisionList = async () => {
    return division;
};