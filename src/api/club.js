const clubs = [
    { id: 1, division_id: 1, name: '따듯한 사람들', attribute: ['travel', 'many'] },
    { id: 2, division_id: 1, name: '유스 호스텔', attribute: ['travel', 'few', 'regularly'] },
    { id: 3, division_id: 1, name: '신서유기', attribute: ['travel', 'few', 'regularly']},
    { id: 4, division_id: 1, name: '사람과 사랑', attribute: ['travel', 'few', 'irregular'] },
    { id: 5, division_id: 1, name: '하늘별', attribute: ['star'] },
    { id: 6, division_id: 1, name: '콜로니', attribute: ['hacking'] },
    { id: 7, division_id: 1, name: '커피헤븐', attribute: ['drink'] },
    { id: 8, division_id: 1, name: '자동차 연구회', attribute: ['car'] },
    { id: 9, division_id: 1, name: '마코', attribute: ['cf'] },
];

export const requestClubList = async () => {
    return clubs;
};