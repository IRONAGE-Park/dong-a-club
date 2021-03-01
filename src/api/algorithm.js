const algorithm = [
    [
        // ------------- 학술 1
        () => {
            // LEVEL 0
            return {
                question: '다음 중 선호하는 활동을 선택해 주세요.',
                actions: [
                    { type: 'travel', name: '여행', action: 'next' },
                    { type: 'star', name: '별 관측', action: 9 },
                    { type: 'hacking', name: '컴퓨터 해킹', action: 4 },
                    { type: 'drink', name: '음료 시음 및 제작', action: 3 },
                    { type: 'car', name: '자동차', action: 6 },
                    { type: 'cf', name: '광고', action: 8 },
                ]
            }
        },
        state => {
            switch (state) {
                // LEVEL 1
                case 'travel': return {
                    question: '소수 정예로 여행가는 걸 선호하시나요?',
                    actions: [
                        { type: 'many', name: '네', action: 'next'},
                        { type: 'few', name: '아니요', action: 1 },
                    ]
                };
                default: return null;
            }
        },
        state => {
            // LEVEL 2
            switch (state) {
                case 'travel-many': return {
                    question: '정기활동이 있는걸 좋아하시나요?',
                    actions: [
                        { type: 'regulary', name: '네', action: 'next'},
                        { type: 'irregular', name: '아니요', action: 2 },
                    ]
                }
                default: return null;
            }
        },
        state => {
            // LEVEL 3
            switch (state) {
                case 'travel-many-regulary': return {
                    question: '분석 결과 두 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: '유스호스텔', action: 10 },
                        { type: 'end', name: '신서유기', action: 7 },
                    ]
                }
                default: return null;
            }
        }
    ],
    [
        // ------------- 학술 2
        () => {
            // LEVEL 0
            return {
                question: '외국어에 관심 있으신가요?',
                actions: [
                    { type: 'outlanguage', name: '네', action: 'next' },
                    { type: 'inlanguage', name: '아니요', action: 'next' },
                ]
            };
        },
        state => {
            // LEVEL 1
            switch (state) {
                case 'outlanguage': return {
                    question: '어느 분야에 더 관심이 있으신가요?',
                    actions: [
                        { type: 'talking', name: '영어스피치, 연극, 대외활동', action: 17 },
                        { type: 'reading', name: '영어 독해', action: 11 },
                    ]
                };
                case 'inlanguage': return {
                    question: '어느 분야에 더 관심이 있으신가요?',
                    actions: [
                        { type: 'talking', name: '토론 및 스피치', action: 12 },
                        { type: 'lecture', name: '강사초청공연, 강연 주최', action: 14 },
                    ]
                };
                default: return null;
            }
        }
    ],
    [
        // ------------- 문예 1
        () => {
            // LEVEL 0
            return {
                question: '관심가는 분야를 선택해 주세요.',
                actions: [
                    { type: 'picture', name: '사진', action: 21 },
                    { type: 'art', name: '미술', action: 'next' },
                    { type: 'movie', name: '영화', action: 'next' },
                    { type: 'game', name: '게임', action: 22 },
                ]
            };
        },
        state => {
            // LEVEL 1
            switch (state) {
                case 'art': return {
                    question: '만화를 좋아하시나요?',
                    actions: [
                        { type: 'cartoon', name: '네', action: 19 },
                        { type: 'paint', name: '아니요', action: 'next' },
                    ]
                };
                case 'movie': return {
                    question: '분석 결과 두 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: '팝콘', action: 23 },
                        { type: 'end', name: '영화예술연구회(DACA)', action: 24 },
                    ]
                };
                default: return null;
            }
        },
        state => {
            // LEVEL 2
            switch (state) {
                case 'art-paint': return {
                    question: '분석 결과 두 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: 'BOA', action: 20 },
                        { type: 'end', name: '열린 그림 마당', action: 18 },
                    ]
                };
                default: return null;
            }
        }
    ],
    [
        // ------------- 문예 2
        () => {
            // LEVEL 0
            return {
                question: '악기연주 or 보컬에 관심 있으신가요?',
                actions: [
                    { type: 'music', name: '네', action: 'next' },
                    { type: 'active', name: '아니요', action: 'next' },
                ]
            };
        },
        state => {
            // LEVEL 1
            switch (state) {
                case 'active': return {
                    question: '관심가는 분야를 선택해 주세요.',
                    actions: [
                        { type: 'dance', name: '댄스', action: 'next' },
                        { type: 'magic', name: '마술', action: 32 },
                        { type: 'theater', name: '연극', action: 29 },
                    ]
                };
                case 'music': return {
                    question: '통기타를 주로 연주하는걸 선호하시나요?',
                    actions: [
                        { type: 'guitar', name: '네', action: 'next' },
                        { type: 'no_guitar', name: '아니요', action: 'next' },
                    ]
                };
                default: return null;
            }
        },
        state => {
            // LEVEL 2
            switch (state) {
                case 'active-dance': return {
                    question: '분석 결과 두 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: '가리온', action: 33 },
                        { type: 'end', name: '프릭스', action: 28 },
                    ]
                };
                case 'music-guitar': return {
                    question: '분석 결과 네 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: 'FGC', action: 31 },
                        { type: 'end', name: '노래의 메아리', action: 36 },
                        { type: 'end', name: '크레파스', action: 38 },
                        { type: 'end', name: 'FLAT', action: 34 },
                    ]
                };
                case 'music-no_guitar': return {
                    question: '분석 결과 세 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: '코마', action: 26 },
                        { type: 'end', name: '스트리츠', action: 25 },
                        { type: 'end', name: '리드머', action: 35 },
                    ]
                }
                default: return null;
            }
        }
    ],
    [
        // ------------- 봉사
        () => {
            // LEVEL 0
            return {
                question: '정기적인 활동을 선호하시나요?',
                actions: [
                    { type: 'regulary', name: '네', action: 'next' },
                    { type: 'irregular', name: '아니요', action: 'next' },
                ]
            };
        },
        state => {
            // LEVEL 1
            switch (state) {
                case 'regulary': return {
                    question: '기관과 연계되는 봉사를 하고 싶으신가요?',
                    actions: [
                        { type: 'institution', name: '네', action: 'next' },
                        { type: 'personal', name: '아니요', action: 'next' },
                    ]
                };
                case 'irregular': return {
                    question: '분석 결과 네 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: 'MBA', action: 46 },
                        { type: 'end', name: 'PTP', action: 48 },
                        { type: 'end', name: '한울', action: 43 },
                        { type: 'end', name: '내쇼날', action: 40 },
                    ]
                };
                default: return null;
            }
        },
        state => {
            // LEVEL 2
            switch (state) {
                case 'regulary-institution': return {
                    question: '분석 결과 두 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: '호우회', action: 44 },
                        { type: 'end', name: 'Make A Wish', action: 47 },
                        { type: 'end', name: '가온 로타랙트', action: 31 },
                        { type: 'end', name: 'RCY', action: 49 },
                    ]
                };
                case 'regulary-personal': return {
                    question: '분석 결과 네 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: '흙사랑', action: 45 },
                        { type: 'end', name: '상앗대', action: 42 },
                        { type: 'end', name: '나눔', action: 39 },
                    ]
                };
                default: return null;
            }
        }
    ],
    [
        // ------------- 종교
        () => {
            // LEVEL 0
            return {
                question: '다음 중 선호하는 종교를 선택해 주세요.',
                actions: [
                    { type: 'protestantism', name: '개신교', action: 'next' },
                    { type: 'buddhism', name: '불교', action: 54 },
                    { type: 'catholic', name: '천주교', action: 50 },
                ]
            };
        },
        state => {
            // LEVEL 1
            switch (state) {
                case 'protestantism': return {
                    question: '분석 결과 여섯 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: 'YWAM', action: 51 },
                        { type: 'end', name: 'IVF', action: 52 },
                        { type: 'end', name: '인터콥', action: 53 },
                        { type: 'end', name: 'CCC', action: 55 },
                        { type: 'end', name: 'SFC', action: 56 },
                        { type: 'end', name: 'ESF', action: 57 },
                    ]
                };
                default: return null;
            }
        },
    ],
    [
        // ------------- 체육
        () => {
            // LEVEL 0
            return {
                question: '구기 종목을 좋아하시나요?',
                actions: [
                    { type: 'ball', name: '네', action: 'next' },
                    { type: 'no_ball', name: '아니요', action: 'next' },
                ]
            };
        },
        state => {
            // LEVEL 1
            switch (state) {
                case 'ball': return {
                    question: '라켓으로 하는 스포츠를 선호하시나요?',
                    actions: [
                        { type: 'racket', name: '네', action: 'next' },
                        { type: 'no_racket', name: '아니요', action: 'next' },
                    ]
                };
                case 'no_ball': return {
                    question: '물에서 하는 스포츠를 선호하시나요?',
                    actions: [
                        { type: 'water', name: '네', action: 'next' },
                        { type: 'no_water', name: '아니요', action: 'next' },
                    ]
                };
                default: return null;
            }
        },
        state => {
            // LEVEL 2
            switch (state) {
                case 'ball-racket': return {
                    question: '관심가는 분야를 선택해 주세요.',
                    actions: [
                        { type: 'badminton', name: '배드민턴', action: 61 },
                        { type: 'tenis', name: '테니스', action: 69 },
                        { type: 'pingpong', name: '탁구', action: 64 },
                    ]
                };
                case 'ball-no_racket': return {
                    question: '관심가는 분야를 선택해 주세요.',
                    actions: [
                        { type: 'soccer', name: '축구', action: 'next' },
                        { type: 'basketball', name: '농구', action: 'next' },
                        { type: 'bowling', name: '볼링', action: 60 },
                        { type: 'baseball', name: '야구', action: 59 },
                    ]
                };
                case 'no_ball-water': return {
                    question: '관심가는 분야를 선택해 주세요.',
                    actions: [
                        { type: 'wind-surfing', name: '윈드서핑', action: 65 },
                        { type: 'skin-scuba', name: '스킨스쿠버', action: 73 },
                        { type: 'swim', name: '수영', action: 66 },
                        { type: 'yacht', name: '요트', action: 71 },
                    ]
                };
                case 'no_ball-no_water': return {
                    question: '야외 운동을 좋아하시나요?',
                    actions: [
                        { type: 'outside', name: '네', action: 'next' },
                        { type: 'no_outside', name: '아니요', action: 'next' },
                    ]
                };
                default: return null;
            }
        },
        state => {
            // LEVEL 3
            switch (state) {
                case 'no_ball-no_water-outside': return {
                    question: '관심가는 분야를 선택해 주세요.',
                    actions: [
                        { type: 'cycle', name: '사이클', action: 63 },
                        { type: 'board', name: '보드', action: 74 },
                    ]
                };
                case 'no_ball-no_water-no_outside': return {
                    question: '관심가는 분야를 선택해 주세요.',
                    actions: [
                        { type: 'go', name: '바둑', action: 72 },
                        { type: 'kendo', name: '검도', action: 70 },
                    ]
                };
                case 'ball-no_racket-soccer': return {
                    question: '분석 결과 두 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: 'COPA', action: 58 },
                        { type: 'end', name: '다울', action: 67 },
                    ]
                };
                case 'ball-no_racket-basketball': return {
                    question: '분석 결과 두 가지 동아리가 발견되었습니다.',
                    actions: [
                        { type: 'end', name: 'DUBA', action: 62 },
                        { type: 'end', name: 'WAY', action: 68 },
                    ]

                }
                default: return null;
            }
        }
    ],
    [
        // ------------- 동문
        () => {
            // LEVEL 0
            return {
                question: '출신 학교를 선택해 주세요.',
                actions: [
                    { type: 'donga_samsung', name: '동아고/삼성여고', action: 76 },
                    { type: 'daedong_namsung', name: '대동고/남성여고', action: 75 },
                ]
            };
        }
    ],
];

export const requestCurrentMbti = async (division_id, level, state) => {
    try {
        const getCurrentMbti = algorithm[division_id - 1][level];
        return getCurrentMbti(state.join('-'));   
    } catch (e) {
        console.log(e);
    }
};