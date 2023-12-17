export const skillList: {
  detail: SkillDetail;
  skillList: { name: string; gage: number }[];
}[] = [
  {
    detail: "Front-End",
    skillList: [
      { name: "HTML", gage: 70 },
      { name: "CSS", gage: 70 },
      { name: "JS", gage: 70 },
      { name: "React", gage: 70 },
      { name: "Next", gage: 60 },
    ],
  },
  {
    detail: "Back-End",
    skillList: [
      { name: "Node", gage: 70 },
      { name: "MySQL", gage: 70 },
      { name: "AWS", gage: 60 },
    ],
  },
  {
    detail: "else",
    skillList: [
      { name: "TS", gage: 62 },
      { name: "Git", gage: 60 },
      { name: "GitActions", gage: 60 },
      { name: "Notion", gage: 60 },
      { name: "C#", gage: 40 },
    ],
  },
];

export default {};
