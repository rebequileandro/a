import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import archive from "../../assets/uploads_files_4048489_City+center+at+night+.glb";
import {
  EffectComposer,
  Bloom,
  Noise,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";

const NeonStick = () => {
  const gltf = useGLTF(archive);

  return (
    <Canvas>
      <color attach="background" args={["#111"]} />
      <OrbitControls />
      {/* Agregar una luz */}
      {/* <pointLight color="blue" intensity={2} position={[2, 0, 0]} /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <directionalLight color="#f2f" position={[2, 0, 3]} /> */}
      {/* <pointLight color="white" intensity={1} position={[2, 2, 0]} /> */}

      {/* <ambientLight color="white" intensity={10} position={[0, 0, 0]} /> */}
      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={1} height={300} />
        {/* <Noise opacity={0.04} /> */}
        <primitive object={gltf.scene} position={[0, -4, 0]}>
          {/* Agregar un material de emisión al objeto */}
          {/* <meshBasicMaterial color="blue" emissive="blue" emissiveIntensity={3} /> */}
          {/* <meshStandardMaterial
          color="blue"
          emissive="blue"
          emissiveIntensity={100}
        /> */}
        </primitive>
      </EffectComposer>
      {/* <mesh receiveShadow position={[0, -3, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial color="#000" />
      </mesh> */}
    </Canvas>
  );
};

export default NeonStick;
