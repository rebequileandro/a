import React, { useRef } from "react";
import { OrbitControls, SpotLight, useDepthBuffer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const Light = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
    >
      <OrbitControls />

      {/* <color attach="background" args={["#202020"]} /> */}
      <fog attach="fog" args={["#202020", 5, 20]} />
      <ambientLight intensity={0.015} />
      <MovingSpot color="#0c8cbf" position={[3, 3, 2]} />
      <MovingSpot color="#b00c3f" position={[1, 3, 0]} />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </Canvas>
  );
};

export default Light;

function MovingSpot({ vec = new Vector3(), ...props }) {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      depthBuffer={depthBuffer}
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={7}
      intensity={4}
      {...props}
    />
  );
}
