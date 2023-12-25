import { atom } from "recoil";

export const AModalState = atom<ImodalState>({
  key: "modal",
  default: { isOn: false, type: null, detail: null },
});

export const AProjectPhase = atom({
  key: "projectPhase",
  default: 0,
});

export const AcurrentPosition = atom<1 | 2 | 3 | 4>({
  key: "currentPosition",
  default: 1,
});

export default {};
