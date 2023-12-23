/// <reference types="vite/client" />

declare global {
  interface IprojectData {
    title: string;
    type: string;
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
    type: null | "skill" | "project" | "more";
    detail: SkillDetail | IprojectData.title | null;
  }

  interface ImoreData {
    title: string;
    img: string;
    period: string;
    skills: {
      fe: string[];
      be: string[];
      deploy: string[];
    };
    summary: string;
  }
}

export default {};
