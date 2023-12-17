/// <reference types="vite/client" />

declare global {
  interface IprojectData {
    title: string;
    period: string;
    img: string;
    skills: { fe: string[]; be: string[]; deploy: string[] };
    summary: string;
    url?: string;
    funtion?: {
      name: string;
      description: string;
      img: string;
    }[];
  }

  type SkillDetail = "Front-End" | "Back-End" | "else";

  interface ImodalState {
    isOn: boolean;
    type: null | "skill" | "project";
    detail: SkillDetail | IprojectData.title | null;
  }
}

export default {};
