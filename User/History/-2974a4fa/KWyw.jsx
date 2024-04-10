import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import archive from "../../assets/uploads_files_3099242_lamp_3tubes.glb";
import {
  EffectComposer,
  Bloom,
  Noise,
  DepthOfField,
} from "@react-three/postprocessing";

const NeonStick = () => {
  const gltf = useGLTF(archive);

  return (
    <Canvas>
      <OrbitControls />
      {/* Agregar una luz */}
      {/* <pointLight color="blue" intensity={2} position={[2, 0, 0]} /> */}
      <ambientLight intensity={5} />

      {/* <directionalLight color="#f2f" position={[2, 0, 3]} /> */}
      <pointLight color="white" intensity={20} position={[2, 2, 0]} />

      {/* <ambientLight color="white" intensity={10} position={[0, 0, 0]} /> */}
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={2} luminanceSmoothing={4} height={300} />
        <Noise opacity={0.04} />
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
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial color="#000" />
      </mesh>
    </Canvas>
  );
};

export default NeonStick;
