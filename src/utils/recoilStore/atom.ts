import { atom } from "recoil";

export const AModalState = atom<ImodalState>({
  key: "modal",
  default: { isOn: false, type: null, detail: null },
});

export const AProjectPhase = atom({
  key: "projectPhase",
  default: 0,
});

export const AcurrentPosition = atom<
  "ABOUT ME" | "Skills" | "Projects" | "Contact me"
>({
  key: "currentPosition",
  default: "ABOUT ME",
});
export default {};
