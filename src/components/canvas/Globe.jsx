import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";
import { extend } from "@react-three/fiber";
extend({ OrbitControls });
const Globe = () => {
  const planet = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={planet.scene}
      position-y={0}
      rotation-y={0}
      scale={6.5}
    />
  );
};
const GlobeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [18, -10, 5], fav: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Globe />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default GlobeCanvas;
