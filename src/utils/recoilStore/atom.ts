import { atom, RecoilState } from "recoil";

export const AModalState = atom<ImodalState>({
  key: "modal",
  default: { isOn: false, type: null, detail: null },
});

export default {};
