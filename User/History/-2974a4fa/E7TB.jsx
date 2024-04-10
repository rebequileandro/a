import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import archive from "../../assets/uploads_files_3099242_lamp_3tubes.glb";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

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
        <Bloom luminanceThreshold={2} luminanceSmoothing={3} height={300} />
        <Noise opacity={0.02} />
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
    </Canvas>
  );
};

export default NeonStick;
