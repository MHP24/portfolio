'use client';

import React, { useRef } from 'react';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function Model() {
  //@ts-ignore
  const { nodes, materials } = useGLTF('/models/react.gltf');
  const groupRef = useRef(null);

  useFrame(() => {
    // @ts-ignore
    groupRef.current.rotation.z -= 0.01;
  });

  return (
    <group ref={groupRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.935, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[39.166, 39.166, 52.734]} />
          <mesh geometry={nodes.Backdrop_Material001_0.geometry} material={materials['Material.001']} position={[-17.091, 7.935, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[247.854, 247.854, 52.734]} />
        </group>
      </group>
    </group>
  );
};

export const ReactLogo = () => {
  return (
    <Canvas shadows>
      <Stage>
        <Model/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  );
};

useGLTF.preload('/models/react.gltf');
