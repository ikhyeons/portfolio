import { atom } from "recoil";

export const AisOn = atom<React.RefObject<HTMLDivElement> | null>({
  key: "modal",
  default: null,
});

export default {};
