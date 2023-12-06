export const projectData: IprojectData[] = [
  {
    title: "개인 블로그 프로젝트",
    img: "../resume/Imgs/블로그.png",
    period: "2023.06.29 ~ 10.01",
    skills: {
      fe: ["TS, Next(13)", "Redux(RTK, RTK-Query)", "SCSS", "반응형 웹"],
      be: ["Node(Express)", "MySQL"],
      deploy: ["Vercel(FE)", "EC2(BE)", "GitActions", "S3"],
    },
    summary:
      "공부한 내용들을 정리, 기록하기 위하여 개인 블로그를 제작하였습니다.",
    url: "https://blog.ikhyeons.net",
    funtion: [
      {
        name: "게시글 CRUD",
        description: "AJAX 통신을 이용하여 게시글 CRUD를 구현하였습니다.",
        img: "../resume/Imgs/blog/crud.gif",
      },
      {
        name: "게시글 검색",
        description: "MySQL 쿼리로 게시글 검색을 구현하였습니다.",
        img: "../resume/Imgs/blog/search.gif",
      },
      {
        name: "로그인",
        description:
          "JWT의 AccessToken과 RefreshToken을 이용하여 로그인을 구현하였습니다.",
        img: "../resume/Imgs/blog/login.gif",
      },
    ],
  },
  {
    title: "자취방 양도 플랫폼",
    img: "../resume/Imgs/자취방양도.png",
    period: "2022.12.16 ~ 23.04.22",
    skills: {
      fe: [
        "TS",
        "React",
        "Recoil",
        "React-Query",
        "Styled-Components",
        "Webpack",
        "WebSocket",
      ],
      be: ["Node(express)", "MySQL", "WebSocket"],
      deploy: [],
    },
    summary:
      "자취생들이 원룸 계약이 끝나기전에 불가피하게 방을 빼야할 일이 생길 경우 에브리타임에서 양도받을 사람을 구하는 불편한 점을 해결하고자 제작하였습니다.",
    url: "",
    funtion: [
      {
        name: "지도에 방 목록 표시",
        description:
          "DB에 등록된 방을 Kakao Map라이브러리를 이용하여 지도 위에 표시하였습니다.",
        img: "../resume/Imgs/realEstate/upload.gif",
      },
      {
        name: "게시글CRUD",
        description:
          "AJAX 통신을 이용하여 커뮤니티 게시글 CRUD를 구현하였습니다.",
        img: "../resume/Imgs/realEstate/crud.gif",
      },
      {
        name: "방 필터",
        description:
          "원룸, 투룸, 추가적인 옵션을 통해서 방의 목록을 필터링 할 수 있게 하였습니다.",
        img: "../resume/Imgs/realEstate/filter.gif",
      },
      {
        name: "로그인",
        description: "MySQL session로그인을 이용하여 로그인을 구현하였습니다.",
        img: "../resume/Imgs/realEstate/login.gif",
      },
      {
        name: "실시간 알림",
        description:
          "WebSocket을 이용하여 게시글의 알림이나 채팅 문의를 실시간으로 구현하였습니다.",
        img: "../resume/Imgs/realEstate/alarm.gif",
      },
    ],
  },
  {
    title: "협업 웹",
    period: "2022.05.18 ~ 10.06",
    img: "../resume/Imgs/협업툴.png",
    skills: {
      fe: ["React, Recoil", "Styled-components", "WebSocket"],
      be: ["Node(express)", "MySQL", "WebSocket"],
      deploy: [],
    },
    summary: "Notion, Collabee등을 참고하여 제작한 협업을 위한 웹 플랫폼",
    url: "",
    funtion: [
      {
        name: "문서 CRUD",
        description: "AJAX 통신을 이용하여 게시글 CRUD를 구현하였습니다.",
        img: "../resume/Imgs/collab/crud.gif",
      },
      {
        name: "달력 일정 입력",
        description:
          "Full Calendar를 이용하여 달력에 일정을 기록할 수 있도록 구현하였습니다.",
        img: "../resume/Imgs/collab/addSchedule.gif",
      },
      {
        name: "실시간 채팅",
        description: "WebSocket을 이용하여 실시간 채팅을 구현하였습니다.",
        img: "../resume/Imgs/collab/chat.gif",
      },
      {
        name: "드래그 앤 드랍",
        description:
          "React-Dnd 라이브러리를 이용하여 컴포넌트 드래그 앤 드랍을 구현하였습니다.",
        img: "../resume/Imgs/collab/dnd.gif",
      },
    ],
  },
  {
    title: "동물 분양 플랫폼",
    img: "../resume/Imgs/동물분양.png",
    period: "2023.05.01 ~ 07.02",
    skills: {
      fe: ["TS", "Next(12)", "Recoil", "SCSS", "반응형 웹"],
      be: [],
      deploy: [],
    },
    summary:
      "강아지, 고양이, 기타 동물들을 분양하는 플랫폼으로 모바일 화면을 중점으로 제작하였습니다.",
    url: "",
    funtion: [
      {
        name: "실시간 알람",
        description: "WebSocket을 이용하여 실시간 알람을 구현하였습니다.",
        img: "../resume/Imgs/동물분양.png",
      },
      {
        name: "어드민 페이지",
        description: "Chart.js를 이용하여 데이터를 시각화 하였습니다.",
        img: "../resume/Imgs/동물분양.png",
      },
    ],
  },
  {
    title: "포트폴리오",
    img: "../resume/Imgs/포트폴리오.png",
    period: "2023.11.16 ~ 11.24",
    skills: {
      fe: ["React", "Recoil", "Styled-Components", "babylon.js"],
      be: [],
      deploy: [],
    },
    summary: "포트폴리오를 React로 생성",
    url: "https://blog.ikhyeons.net/resume",
    funtion: [
      {
        name: "바빌론 3d모델",
        description:
          "blender에서 가져온 3D모델을 리액트에서 가져와 표시하였습니다.",
        img: "../resume/Imgs/portfolio/babylon.gif",
      },
    ],
  },
];

export default projectData;
