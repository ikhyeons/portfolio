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
}

export default {};
