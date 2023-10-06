'use client';

import React, { Suspense, useRef } from 'react'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';

export function Model() {
  const groupRef = useRef(null);
  //@ts-ignore
  const { nodes, materials } = useGLTF('/models/coke.gltf');

  return (
    <group ref={groupRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.77}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Vending_machine_Vending_machine_0.geometry} 
            material={materials.Vending_machine} position={[-256.787, -143.511, 248.216]} 
            rotation={[-Math.PI / 2, 0, 0]} scale={100} 
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/coke.gltf');


export const Coke = () => {
  return (
    <Suspense fallback={null}>
      <Canvas className='animate__animated animate__fadeIn'>
        <Stage environment={'sunset'} intensity={1}>
          <Model/>
        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </Suspense>
  );
};
