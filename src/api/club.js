const clubs = [
    { id: 1, division_id: 1, address: '416', leader: { name: '남윤지', phone: '010-5263-5502' }, name: '따뜻한 사람들', attribute: ['travel', 'many'], intro: '따뜻한사람들은 여행을 주로 하는 동아리입니다.' },
    { id: 2, division_id: 1, address: '417', leader: { name: '최용석', phone: '010-3339-9173' }, name: '사람과 사랑', attribute: ['travel', 'few', 'irregular'], image: 'people&love.png', intro: '저희는 친목 도모에 중점을 둔 여행 동아리입니다. 자유로운 분위기에서 다양한 여행을 함께 즐겨요!!!' },
    { id: 3, division_id: 1, address: '421', leader: { name: '김동길', phone: '010-2774-9480' }, name: '커피헤븐', attribute: ['drink'], intro: '커피헤븐은 커피만들기/스터디를 주로 하는 동아리 입니다.' },
    { id: 4, division_id: 1, address: '404', leader: { name: '박진근', phone: '010-9205-0973' }, name: '콜로니', attribute: ['hacking'], image: 'colony.png', intro: '콜로니는 해킹, 정보 보안을 배울 수 있는 동아리입니다.' },
    { id: 5, division_id: 1, address: '533', leader: { name: '이태원', phone: '010-7724-2852' }, name: '다연회', attribute: ['car'], image: 'dayeon.jpg', intro: '학과학번 구분없이 어울려 동아리방에서 놀고 차도 마시며 공강때 자고 갈수도 있는 편한 분위기의 동아리입니다.' },
    { id: 6, division_id: 1, address: '302', leader: { name: '황재욱', phone: '010-4450-9407' }, name: '동아 자동차 연구회', attribute: ['car'], image: 'car_research.jpeg', intro: '안녕하세요 동아자동차연구회입니다. 저희 동아자동차연구회는 88년도부터 오랜 역사를 바탕으로 축척된 기술과 경험, 노하우를 바탕으로 직접 자동차를 설계 제작하여 레이싱 대회에 참여하는 동아리 입니다. 자동차를 이용하여 참가하는 활동에는 한국 자동차 공학회에서 진행하는한국 대학생 자작 자동차 대회 ‘KSAE’와AARK TRACKDAY등 향후 취업을 위한 스펙적인 활동과 모터쇼 참가 등 자동차에 대한 지식을 탐독하고 연구한다는 활동을 함께 할 수 있는 동아리입니다.' },
    { id: 7, division_id: 1, address: '614', leader: { name: '강성민', phone: '010-2866-3912' }, name: '유스호스텔', attribute: ['travel', 'few', 'regularly'], image: 'youth_hostel.png', intro: '대학도 왔는데 여행은 어때? 낭만과 설렘이 가득한 여행동아리 유스호스텔! 같이 여행갈래?' },
    { id: 8, division_id: 1, address: '519', leader: { name: '조은세상', phone: '010-2593-8889' }, name: '마코', attribute: ['cf'], image: 'maco.jpg', intro: '공모전 어렵게 생각말고 자유롭게 도전하고 싶다면 MACO!' },
    { id: 9, division_id: 1, address: '615', leader: { name: '김민건', phone: '010-4107-2313' }, name: '하늘별', attribute: ['star'], intro: '하늘별은 천체관측을 주로 하는 동아리입니다.' },
    { id: 10, division_id: 1, address: '531', leader: { name: '이채은', phone: '010-3077-3380' }, name: '신서유기', attribute: ['travel', 'few', 'regularly'], image: 'new_west_organic.jpg', intro: '신서유기 동아리는 한번 뿐인 대학생활, 꿈과 열정을 가진 청춘들의 즐거운 이야기가 담겨 있는 하나의 기록장 같은 곳입니다. ' },
    // 학술 1
    { id: 11, division_id: 2, address: '502', leader: { name: '이세비', phone: '010-6876-8922' }, name: '타임', attribute: [], image: 'time.png', intro: '세계화에 대비하여 외국신문(예 : 타임지), 잡지 등을 해석, 분석하여, 영어실력과 자신감 그리고 국제 정세를 파악, 동아리 회원들과 토론하는 능력을 키우기 위해 설립한 학술 동아리입니다.' },
    { id: 12, division_id: 2, address: '420', leader: { name: '곽정은', phone: '010-9828-1323' }, name: '성아회', attribute: [], image: 'seong-a.jpeg', intro: '자유로운 분위기에서 다양한 주제의토론을 통해서 말하는 연습을 향상시킬수있으며, 컴퓨터와 큰 티비를 통해 과제나 자료 등을 쉽게 검색 가능한 동아리입니다~' },
    // { id: 13, division_id: 2, address: '507', leader: { name: '한유진', phone: '010-7588-4717' }, name: 'BFFF', attribute: [] },
    { id: 14, division_id: 2, address: '419', leader: { name: '김덕균', phone: '010-6274-8583' }, name: '2L', attribute: [], intro: '2L는 강사초청및 강연을 주로 하는동아리 입니다.' },
    { id: 15, division_id: 2, address: '405', leader: { name: '장인수', phone: '010-2448-5732' }, name: '유니피스', attribute: [], intro: '유니피스는 토론및 봉사활동을 주로 하는 동아리입니다.' },
    { id: 16, division_id: 2, address: '504', leader: { name: '김규민', phone: '010-4694-8555' }, name: '유네스코', attribute: [], image: 'unesco.png', intro: '역사가 깊은 학술동아리 다양한 과들과 함께 어우러진 친목을 다지는 동아리 주점 및 다양한 행사 많음 이쁘고 잘생긴 형언니들과 함께 많을 추억을 만들수 있음 1주에 한번 정기집회 토론과 스피치 활동 각종 봉사활동과 농활등 다양한 활동' },
    { id: 17, division_id: 2, address: '526', leader: { name: '이동주', phone: '010-4057-5873' }, name: '아미고', attribute: [], image: 'amigo.jpg', intro: '아미고는 영어 역량 향상을 위한 영어활동뿐만 아니라 네 번의 엠티, 애니버서리 등 캠퍼스 생활도 즐길 수 있는 동아리입니다.' },
    // 학술 2
    { id: 18, division_id: 3, address: '508', leader: { name: '백승훈', phone: '010-4147-1146' }, name: '열린그림마당', attribute: [], intro: '열린 그림마당은 미술을 주로 하는 동아리입니다.' },
    { id: 19, division_id: 3, address: '506', leader: { name: '윤예빈', phone: '010-4592-5383' }, name: '인터카툰', attribute: [], image: 'intercartoon.png', intro: '만화 소설 게임 뮤지컬 1, 2차 창작 등 서브컬처를 아우르는 장르를 즐기는 사람들이 모인 동아리입니다.' },
    { id: 20, division_id: 3, address: '503', leader: { name: '한수민', phone: '010-4138-2595' }, name: 'BOA', attribute: [], image: 'boa.jpg', intro: '반갑습니다! 미술동아리 Boa입니다! 다양한 취미활동! 친목! boa에서 즐겨보세요! ' },
    { id: 21, division_id: 3, address: '603', leader: { name: '박진우', phone: '010-5180-8756' }, name: '사진예술연구회', attribute: [], image: 'picture_culture.jpg', intro: '사진을 사랑하는 사람들이 모여 함께 공부하고 출사를 나가며 소중한 추억을 쌓는 동아리입니다' },
    { id: 22, division_id: 3, address: '410', leader: { name: '김강산', phone: '010-5223-6407' }, name: 'Game Crew', attribute: [], image: 'game_crew.jpeg', intro: '동아대 이스포츠&게임 동아리 GameCrew⭐️ 같이 게임할 사람! 큐손실 나기전에 고!' },
    { id: 23, division_id: 3, address: '412', leader: { name: '송영현', phone: '010-4445-1743' }, name: '팝콘', attribute: [], image: 'popcon.png', intro: '팝콘은 영화를 기획, 제작함 학기당 한번 자신이 만든 영화를 상영하는 영화제를 함.' },
    { id: 24, division_id: 3, address: '510', leader: { name: '임수현', phone: '010-9544-2742' }, name: '영화예술연구회(DACA)', attribute: [], image:'daca.jpg', intro: '영화관람 동아리로 매달 문화의 날 단체 영화관람 및 뒷풀이와 소소한 토론으로 재미를 더해요! 동방에 있는 보드게임은 덤!' },
    // 문예 1
    { id: 25, division_id: 4, address: '613', leader: { name: '김보미', phone: '010-2345-8027' }, name: '스트리츠', attribute: [], image: 'streets.png', intro: '동아대 최대규모 밴드 스트리츠! 락, 어쿠스틱, 밴드, 버스킹 등 폭넓은 장르를 다룹니다!' },
    { id: 26, division_id: 4, address: '622', leader: { name: '배인희', phone: '010-2345-1267' }, name: '코마', attribute: [], image: 'coma.jpg', intro: '동아대학교 락밴드 동아리 코마입니다! 악기가 서툴어도 열정만 가지고 있다면 누구든지 환영입니다:)' },
    { id: 27, division_id: 4, address: '620', leader: { name: '최영우', phone: '010-4113-1638' }, name: '윤유월', attribute: [], image: 'yoonyuwol.jpg', intro: '가족 같은 분위기, 함께하고 싶은 넓은 동아리방, 장르 안가리는 팔방미인 중앙 밴드동아리 윤유월입니다.' },
    { id: 28, division_id: 4, address: '403', leader: { name: '김보경', phone: '010-6617-4335' }, name: '프릭스', attribute: [], image: 'freaks.jpeg', intro: '동아대학교 중앙댄스동아리 프릭스는 케이팝/얼반/걸스힙합/섹시/군무 등 다양한 장르를 기획팀과 함께 운영하고 있습니다 !' },
    { id: 29, division_id: 4, address: '409', leader: { name: '신대균', phone: '010-7133-9620' }, name: '동아극예술연구회', attribute: [], image: 'dong-a-theater.jpg', intro: '☆동아대학교 유일한 연극동아리☆<br/> 연극에 대한 열정으로 각자의 매력을 찾아보세요!<br/> ♧누구나 대.환.영♧' },
    { id: 30, division_id: 4, address: '602', leader: { name: '권진솔', phone: '010-9845-3167' }, name: '한아리국악회', attribute: [], intro: '한아리는 국악을 주로 하는 동아리입니다.' },
    { id: 31, division_id: 4, address: '605', leader: { name: '이승욱', phone: '010-5511-6934' }, name: 'FGC', attribute: [], image: 'fgc.jpg', intro: '음악을 좋아하는, 사람을 좋아하는, 놀기 좋아하는 모든人 환영합니다. FGC에 놀러오세요~' },
    { id: 32, division_id: 4, address: '509', leader: { name: '조현승', phone: '010-9949-2815' }, name: 'The Joker', attribute: [], image: 'the_joker.png', intro: '저희는 마술을 보고싶은 사람, 하고 싶은사람 모두 환영합니다. 관심 있으신 분은 학생회관 509호로 와주세요!' },
    { id: 33, division_id: 4, address: '617', leader: { name: '류운주', phone: '010-3463-3518' }, name: '가리온', attribute: [], image: 'karion.jpg', intro: '중앙댄스동아리 가리온은 힙합을 베이스로 한 다양한 장르의 댄스를 다루고 있는 스트릿댄스동아리입니다!◀' },
    { id: 34, division_id: 4, address: '608', leader: { name: '최동근', phone: '010-6314-9045' }, name: 'FLAT', attribute: [], image: 'flat.jpg', intro: '어쿠스틱 자율음악동아리 “FLAT”입니다. 음악과 악기들을 자유롭게 듣고 만지며 친해져 볼까요?' },
    { id: 35, division_id: 4, address: '534호, 535', leader: { name: '이지현', phone: '010-9208-2960' }, name: '리드머', attribute: [], image: 'rhythmer.png', intro: '동아대학교 유일한 흑인음악동아리 RHYTHMER(리드머)는 R&B, 힙합 등 흑인음악을 주로 다루고 있습니다. 커버곡은 물론이고 작사와 작곡활동까지 하고 있습니다!' },
    { id: 36, division_id: 4, address: '606', leader: { name: '이정목', phone: '010-5064-2497' }, name: '노래의 메아리', attribute: [], image: 'echo_of_song.jpg', intro: '어쿠스틱 기타 등 여러악기의 연주 및 다같이 노래하는 분위기로 친목도모' },
    { id: 37, division_id: 4, address: '607', leader: { name: '김관호', phone: '010-7139-2205' }, name: '동아합창단', attribute: [], intro: '동아합창단은 합창을 주로 하는 동아리입니다.' },
    { id: 38, division_id: 4, address: '604', leader: { name: '정영석', phone: '010-4572-8213' }, name: '크레파스', attribute: [], image: 'crayon.jpeg', intro: '반갑습니다! 저희는 통기타동아리 ‘크레파스 앙상블’ 입니다! 가족처럼 편한 분위기의 크레파스에 언제든지 방문해주세요!' },
    // 문예 2
    { id: 39, division_id: 5, address: '619', leader: { name: '김정규', phone: '010-7656-5695' }, name: '나눔', attribute: [], image: 'nanum.jpg', intro: '시각장애인분들을 위해 봉사하는 동아리입니다. 정기적으로 월 3회정도 방문하여 봉사하고 있습니다.' },
    { id: 40, division_id: 5, address: '408', leader: { name: '유정민', phone: '010-8270-5705' }, name: '내쇼날', attribute: [], intro: '내쇼날은 봉사를 주로 하는 동아리입니다.' },
    { id: 41, division_id: 5, address: '524', leader: { name: '구자욱', phone: '010-4930-9992' }, name: '가온 로타랙트', attribute: [], image: 'rotaract.png', intro: '가온 로타랙트는 봉사 동아리로서 타대학과의 교류 및 폭넓고 다양한 봉사 활동 가능합니다.' },
    { id: 42, division_id: 5, address: '528', leader: { name: '박강덕', phone: '010-3331-7305' }, name: '상앗대', attribute: [], image: 'sang-at-dae.png', intro: '매달 정기적인 봉사는 물론 재능기부, 지역축제 등의 봉사와 더불어 30년 넘게 정기적으로 매실보육원과 연계한 보육원 봉사 또한 진행하고 있습니다.' },
    { id: 43, division_id: 5, address: '523', leader: { name: '이승익', phone: '010-2620-0650' }, name: '한울', attribute: [], image: 'han-ul.png', intro: '‘한울’은 1987년에 창립되어 2021년도 까지 활동을 이어오고 있는 동아대학교의 중앙동아리입니다.' },
    { id: 44, division_id: 5, address: '407', leader: { name: '이혜린', phone: '010-9416-3292' }, name: '호우회', attribute: [], image: 'haw.jpeg', intro: '안녕하세요. 연합 봉사동아리\'호우회\'입니다 봉사와 헌신이수가 고민이시거나 친구와 함께 가입할 동아리, 맘 편히 쉴 수 있는 동아리를 찾고 계시다면 45년의 유구한 역사를 가진 \'호우회\' 를 추천합니다. 동의대학교와 연합동아리로서 다양한 봉사활동 제공과 국가보훈처 행사를 비롯해 국토대장정과 농촌활동 참여 가능 추가적으로 궁금한 점이 있다면 동아리 회장,부회장 연락처로 부담 갖지 말고 편하게 물어봐주세요.' },
    { id: 45, division_id: 5, address: '415', leader: { name: '이민중', phone: '010-5058-6148' }, name: '흙사랑', attribute: [], image: 'sand_love.jpg', intro: '흙사랑은 봉사동아리로 1년에 한번씩 정기적으로 농촌봉사활동을 하며 봉사시간 필요시에 동아리원끼리 다양한 봉사활동 할 수있습니다!' },
    { id: 46, division_id: 5, address: '505', leader: { name: '이동규', phone: '010-5496-6724' }, name: 'MRA', attribute: [], image: 'MRA.png', intro: '"MRA"는 농촌 또는 부산항, 다대포 철새 축제 등과 부산 대학 연합 봉사동아리 \'봉우리\' 에 소속되어 있는 자율 봉사동아리입니다.' },
    { id: 47, division_id: 5, address: '521', leader: { name: '이현정', phone: '010-2421-0931' }, name: 'Make a wish', attribute: [], image: 'make-a-wish.png', intro: '난치병 아동들의 소원을 들어주는 봉사동아리메이크어위시 동아에서 5기를 모집합니다!' },
    { id: 48, division_id: 5, address: '618', leader: { name: '박지헌', phone: '010-2789-9349' }, name: 'PTP', attribute: [], image: 'PTP.jpeg', intro: '중앙 봉사 동아리 PTP는 봉사를 하고 싶은 분, 새로운 친구를 사귀고 싶은 분 모두 환영해요!' },
    { id: 49, division_id: 5, address: '610', leader: { name: '백경훈', phone: '010-8783-2265' }, name: 'RCY', attribute: [], image: 'RCY.png', intro: 'Red Cross Youth<br/>재미있는 봉사 and 다양한 봉사 many<br/>신청 now' },
    // 봉사
    { id: 50, division_id: 6, address: '525', leader: { name: '박은혁', phone: '010-5545-6861' }, name: '동아가톨릭학생회', attribute: [], image: 'catholic.jpeg', intro: '저희는 대학생들의 신앙생활과 친목도모를 지원하여 신앙생활에 보탬이 되어 드립니다.' },
    { id: 51, division_id: 6, address: '501', leader: { name: '주민희', phone: '010-7131-2269' }, name: 'YWAM', attribute: [], image: 'jejus.jpg', intro: '예수전도단은 청년의 때에 하나님을 더 깊이 알아가길 힘쓰는 동아리입니다.' },
    { id: 52, division_id: 6, address: '514', leader: { name: '백사무엘', phone: '010-2196-8915' }, name: 'IVF', attribute: [], image: 'IVF.png', intro: '"말씀, 오늘도 맛있게 잘 먹었습니다!"<br/>재밌게 성경을 연구하는 끈끈한 공동체!' },
    { id: 53, division_id: 6, address: '414', leader: { name: '김시은', phone: '010-9661-5288' }, name: '인터콥(캠퍼스)', attribute: [], image: 'intercop.jpg', intro: ' 인터콥 캠퍼스는 사랑과 섬김의 기독교 가치관에 입각해 아시아·아프리카·중동권의 소외받는 민족과 난민들을 찾아가는 해외봉사 단체입니다.' },
    { id: 54, division_id: 6, address: '512', leader: { name: '유인재', phone: '010-5950-1131' }, name: '불교학생회(우연히)', attribute: [], intro: '"우연히" 찾아온 그대에게 버팀목이 되어줄게요' },
    { id: 55, division_id: 6, address: '516', leader: { name: '석주찬', phone: '010-6392-4278' }, name: 'CCC', attribute: [], image: 'CCC.jpg', intro: '오직 너만을 위해 준비된 동아리!!<br/>약 100명의 선배들이 너를 기다리고 있어<br/>대학에서 많은 사람과 인간관계를 맺고싶은 사람, 대학에서 신앙 생활을 하고 싶은 사람 모두 컴온~~' },
    { id: 56, division_id: 6, address: '515', leader: { name: '이소망', phone: '010-5031-6535' }, name: 'SFC', attribute: [], image: 'SFC.jpg', intro: '브라운데이운동(낮은 곳에서 섬기시는 어머니 아버님께 감사함을 전하는 운동)과 컨닝추방운동을 하고 있다.' },
    { id: 57, division_id: 6, address: '513', leader: { name: '고명준', phone: '010-4503-1108' }, name: 'ESF', attribute: [], image: 'ESF.jpg', intro: '종교(기독교) 동아리/ 말씀 중심의 동아리, 타학교 학생들과의 정기적 모임을 통한 교류' },
    // 종교
    { id: 58, division_id: 7, address: '529', leader: { name: '고혜진', phone: '010-8591-9302' }, name: 'FC-COPA', attribute: [], image: 'copa.jpg', intro: '보고 또 보고 COPA입니다!저희동아리는 2014년 축구를 사랑하는 사람들이 모여 만든 동아리입니다.축구동아리로 교내외 대회에 출전하며 실력쌓기는 물론이고 친목도모를 함께하고 있습니다!신입생 복학생 재학생 관계없이 축구하며 즐기고 싶으신 분들은 Fc COPA로!' },
    { id: 59, division_id: 7, address: '522', leader: { name: '채상민', phone: '010-8453-3734' }, name: 'ALPHA', attribute: [], image: 'alpha.jpg', intro: '코로나에도 불구하고 동아리인원들이 모여 고생한결과 3년만에 전국대회 트로피를 다시 가져올만큼 야구에대한 열정하나로 뭉쳐있습니다! 야구를 몰라도 못해도! 남녀상관없이 모두 환영합니다. S02 학생회관 522호로 놀러오세요~' },
    { id: 60, division_id: 7, address: '518', leader: { name: '허용준', phone: '010-6780-2842' }, name: '동아볼링', attribute: [], image: 'bowling.jpg', intro: '저희볼링 동아리는 코로나 시국에도 마스크를 쓰고실내에서 많은 인원이 쉽고 즐겁게 친목활동하면서 볼링을칠 수 있습니다.<br/>친목활동이 아니더라도 볼링을 치러 가는 걸 좋아하는 사람들끼리 갈 수도 있습니다.<br/>또 1년에 크고 작은 행사 및 대회가 있는데, 거기서 좋은 성적을 거두면 각종 상품을 얻을 수 있습니다.' },
    { id: 61, division_id: 7, address: '609', leader: { name: '서동혁', phone: '010-4688-5577' }, name: '스니치', attribute: [], image: 'snitch.jpg', intro: '스니치는 배드민턴 동아리이며, 사설 체육관 대관을 통해 지속적인 활동이 가능 합니다. 매년 스니치 주관하에 대회를 개최하고 있습니다. 대회 개최, 심판경험, 대회운영 및 대회 참여 기회를 가질 수 있습니다!' },
    { id: 62, division_id: 7, address: '527', leader: { name: '김동욱', phone: '010-3410-6015' }, name: '두바', attribute: [], image: 'duba.jpg', intro: '동아대학교 중앙 농구 동아리 두바입니다.<br/>남녀노소 매니저.초보 모두 환영입니다.' },
    { id: 63, division_id: 7, address: '102', leader: { name: '박지성', phone: '010-6722-9323' }, name: '동아사이클', attribute: [], image: 'cycle.jpg', intro: '동아사이클 / 정기 라이딩을 가고 방학때 자전거여행을 갑니다. 자전거에 관심이 있으면 누구나 환영합니다' },
    { id: 64, division_id: 7, address: '621', leader: { name: '정종필', phone: '010-8912-3304' }, name: '동아탁구회', attribute: [], image: 'pingpong.jpeg', intro: '혼자서도 스포츠를 즐기고 싶다면다른 부산권 학교들과 교류하고싶다면공강시간에 편하게 올 수 있는곳이 필요하다면저희 동아탁구회로 오세요~~' },
    { id: 65, division_id: 7, address: '532', leader: { name: '김소진', phone: '010-6458-6673' }, name: '테티스', attribute: [], intro: '테티스는 윈드서핑을 주로 하는 동아리 입니다.' },
    { id: 66, division_id: 7, address: '530', leader: { name: '윤순환', phone: '010-5019-5625' }, name: '동아수영회', attribute: [], image: 'swim.jpg', intro: '저희는 대학생들의 신앙생활과 친목도모를 지원하여 신앙생활에 보탬이 되어 드립니다.' },
    { id: 67, division_id: 7, address: '612', leader: { name: '이정희', phone: '010-9283-8375' }, name: '다울', attribute: [], image: 'daul1.jpeg', intro: '동아대학교 유일한 여자 축구 동아리‘DAU-L’<br/>축구를 좋아하고 사랑하는 여학우 선수들의 모임! 체육 전공이 아니더라도 축구가 처음이라도 축구를 좋아하는 마음만 있다면 누구든지 참여 가능!' },
    { id: 68, division_id: 7, address: '411', leader: { name: '김태훈', phone: '010-2221-2540' }, name: 'WAY', attribute: [], intro: 'WAY는 농구를 주로 하는 동아리입니다.' },
    { id: 69, division_id: 7, address: '520', leader: { name: '유승빈', phone: '010-8805-2147' }, name: '동아테니스', attribute: [], image: 'tenis.jpg', intro: '동아테니스는 장비걱정 없이 공용 라켓이 구비되어 있으며, 한번도 테니스를 경험해 본적 없어도,평일 정기레슨을 통해실력향상!편안한 맘으로 놀러오세요!!!' },
    { id: 70, division_id: 7, address: '401호, 402', leader: { name: '김성준', phone: '010-3265-8217' }, name: '동아검도회', attribute: [], image: 'kumdo.jpeg', intro: '매년일본큐슈국제대학과교류전 매년부산대회및전국대회참여 부산내검도동아리합동연무' },
    { id: 71, division_id: 7, address: '418', leader: { name: '조재훈', phone: '010-9120-3787' }, name: '동아요트', attribute: [], image: 'yacht.jpeg', intro: '체육분과/동아요트/https://www.facebook.com/DUYC2015/페이스북 동아요트 / s02-0418/47년 전통의 해양도시 부산의 지리적 요소를 바탕으로 다양한 대회 참가와 경력을 갖추고 있는 세일링동아리' },
    { id: 72, division_id: 7, address: '511', leader: { name: '박준형', phone: '010-4106-4704' }, name: '바둑사랑', attribute: [], image: 'go.jpg', intro: '40년 전통 교내 유일 바둑동아리, 매학기 전국 대학생 바둑 대회 참여! #알파고 #알까기가능' },
    { id: 73, division_id: 7, address: '406', leader: { name: '정재홍', phone: '010-8994-9686' }, name: '그랑부르', attribute: [], image: 'granblue.jpeg', intro: '바다를 좋아하는 사람이라면 누구나 환영당신이 몰랐던 지구의 또다른 모습을 다함께 만나보지 않을래요?' },
    { id: 74, division_id: 7, address: '601', leader: { name: '차명진', phone: '010-7183-2103' }, name: '파이', attribute: [], image: 'pi.jpg', intro: '저희 보드동아리(파이)는 롱보드를 중심으로 트릭 / 댄싱 등 여러 기술들을 연습하며, 다양한 보드를 다루는 동아리입니다.' },
    // 체육
    { id: 75, division_id: 8, address: '425', leader: { name: '신지훈', phone: '010-2513-2358' }, name: '한별', attribute: [], image: 'HB.jpeg', intro: '대동고 남성여고 졸업생들이 학연의 가족같은 분위기로 즐거운 대학생활을 보낼 수 있습니다. 체육대회 주점 등 행사로 선후배 다같이 추억도 쌓을 수 있습니다. ' },
    { id: 76, division_id: 8, address: '425', leader: { name: '고상진', phone: '010-9215-8653' }, name: '풀섶', attribute: [], image: 'PS.jpg', intro: '동아고 삼성여고 졸업생들로 이루어진 동문동아리. 동네 친한 오빠 언니 누나 형처럼 다같이 추억을 만들며 대학생활을 보내요~~!' },
    // 동문
];

export const requestClubList = async division_id => {
    if (division_id) {
        return clubs.filter(club => club.division_id === division_id);
    } else {
        return clubs;
    }
};

export const requestClubDetail = async club_id => {
    return clubs.find(club => club.id === club_id);
}