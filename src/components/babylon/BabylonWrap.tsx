import { memo } from "react";
import BabylonCanvas from "./BabylonCanvas";
import { SceneLoader } from "@babylonjs/core/Loading/";
import {
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  MeshBuilder,
  FresnelParameters,
  StandardMaterial,
  SpotLight,
  HemisphericLight,
  Color3,
} from "@babylonjs/core";

function BabylonWrap() {
  let frametime = 0;
  let camera: ArcRotateCamera;
  let light: SpotLight;
  //맨 처음 렌더링 될 때 실행할 함수
  function onSceneReady(scene: Scene) {
    camera = new ArcRotateCamera(
      "camera",
      -0.5,
      1.5,
      40,
      new Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(true);
    camera.inputs.removeByType("ArcRotateCameraMouseWheelInput");
    camera.inputs.removeByType("ArcRotateCameraKeyboardMoveInput");

    SceneLoader.Append(
      "/resume/babylonModel/",
      "main6.babylon",
      scene,
      (scene) => {
        var material = new StandardMaterial("material", scene);
        material.reflectionFresnelParameters = new FresnelParameters();
        material.reflectionFresnelParameters.bias = 0.1; // 반사의 강도 조절
        material.reflectionFresnelParameters.power = 2; // 반사의 세기를 결정

        scene.meshes[1].material = material;
        scene.meshes[2].material = material;
        scene.meshes[3].rotate(new Vector3(0, 2 * Math.PI, 0), 3);
        scene.meshes[3].position.y = -5;
        scene.meshes[3].position.x = -0.1;
        scene.meshes[1].position.y = -5;
        scene.meshes[2].position.y = -5;
        scene.meshes[1].position.z = 0.5;
      }
    );
    var ground = MeshBuilder.CreateDisc("ground", { radius: 3 }, scene);
    ground.rotate(new Vector3(1, 0, 0), Math.PI / 2);
    ground.position.y = -5;

    var material2 = new StandardMaterial("material2", scene);
    material2.reflectionFresnelParameters = new FresnelParameters();
    material2.reflectionFresnelParameters.bias = 0.1; // 반사의 강도 조절
    material2.reflectionFresnelParameters.power = 2; // 반사의 세기를 결정
    scene.meshes[0].material = material2;
    const light2 = new HemisphericLight("light", new Vector3(0, 50, 0));
    light2.intensity = 0.3;
    light = new SpotLight(
      "light",
      new Vector3(0, 7, 0),
      new Vector3(0, -1, 0),
      Math.PI / 4,
      0.1,
      scene
    );
    light.intensity = 1;
    light.diffuse = new Color3(1, 1, 0.3);
  }

  //프레임마다 실행할 함수
  function onRender(scene: Scene) {
    frametime = frametime + 1;
    scene.clearColor = new Color4(0, 0, 0, 0.0);

    camera.alpha = -0.6 + 0.6 * Math.sin(frametime * 0.001 * Math.PI);
    camera.beta = 1.5 + 0.05 * Math.sin(frametime * 0.001 * Math.PI);
    camera.radius = 40;

    if (frametime % 500 == 0) {
      light.diffuse = new Color3(0, 0, 0);
      setTimeout(() => {
        light.diffuse = new Color3(1, 1, 0.3);
        setTimeout(() => {
          light.diffuse = new Color3(0, 0, 0);
          setTimeout(() => {
            light.diffuse = new Color3(1, 1, 0.3);
            setTimeout(() => {
              light.diffuse = new Color3(0, 0, 0);
              setTimeout(() => {
                light.diffuse = new Color3(1, 1, 0.3);
              }, 30);
            }, 40);
          }, 100);
        }, 100);
      }, 40);
    }
  }
  return <BabylonCanvas onRender={onRender} onSceneReady={onSceneReady} />;
}

export default memo(BabylonWrap);
