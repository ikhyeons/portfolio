import { useRef, useEffect } from "react";
import { Engine, Scene } from "@babylonjs/core";
import { BabylonjsProps } from "babylonjs-hook";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AisWheelReady, Aphase } from "../../utils/recoilStore";

const SCanvas = styled.canvas<{ $phase: number }>`
  position: absolute;
  width: 41%;
  height: 112.5%;
  z-index: 0;
  background-color: transparent;
  opacity: ${(prop) => (prop.$phase == 0 || prop.$phase == 3 ? 1 : 0.001)};
  transition: opacity 0.5s ease-out, transform 2s;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

function BabylonCanvas({ onSceneReady, onRender }: BabylonjsProps) {
  const [phase, setPhase] = useRecoilState(Aphase);
  const reactCanvas = useRef<HTMLCanvasElement>(null);
  const [isWheelReady, setIsWheelReady] = useRecoilState(AisWheelReady);
  useEffect(() => {
    setIsWheelReady(false);
    setTimeout(() => {
      setIsWheelReady(true);
    }, 1000);
  }, []);
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    const engine = new Engine(canvas, true, { stencil: true });
    const scene = new Scene(engine);
    if (scene.isReady()) onSceneReady(scene);
    else scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));

    engine.runRenderLoop(() => {
      if (typeof onRender === "function") onRender(scene);
      scene.render();
    });

    function resize() {
      scene.getEngine().resize();
    }

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      scene.getEngine().dispose();
      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [onRender, onSceneReady]);

  return (
    <SCanvas
      $phase={phase}
      onWheel={(e) => {
        if (isWheelReady) {
          if (e.deltaY > 0) setPhase((prev) => (prev != 3 ? prev + 1 : prev));
          else setPhase((prev) => (prev != 0 ? prev - 1 : prev));
        }
      }}
      ref={reactCanvas}
    />
  );
}

export default BabylonCanvas;
