'use client';

import React, { Suspense, useRef } from 'react';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function Model() {
  const groupRef = useRef(null);
  //@ts-ignore
  const { nodes, materials } = useGLTF('/models/rocket.gltf');

  useFrame(() => {
    // @ts-ignore
    groupRef.current.rotation.y -= 0.01;
  });
  return (
    <group ref={groupRef} dispose={null}>
      <group position={[0, 48.553, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[21.321, 21.321, 18.311]}>
        <mesh geometry={nodes.Cylinder_Grey002_0.geometry} material={materials['Grey.002']} />
        <mesh geometry={nodes.Cylinder_White002_0.geometry} material={materials['White.002']} />
        <mesh geometry={nodes.Cylinder_Orange002_0.geometry} material={materials['Orange.002']} />
        <mesh geometry={nodes.Cylinder_Engine002_0.geometry} material={materials['Engine.002']} />
        <mesh geometry={nodes.Cylinder_Black002_0.geometry} material={materials['Black.002']} />
      </group>
      <group position={[0, -14.543, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[143.501, 143.501, 25.535]}>
        <mesh geometry={nodes.Cube_Concrete001_0.geometry} material={materials['Concrete.001']} />
        <mesh geometry={nodes.Cube_Yellow001_0.geometry} material={materials['Yellow.001']} />
      </group>
      <group position={[-1.916, 21.297, -117.662]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.135, 8.135, 22.228]}>
        <mesh geometry={nodes.Cylinder002_Metal001_0.geometry} material={materials['Metal.001']} />
        <mesh geometry={nodes.Cylinder002_Yellow001_0.geometry} material={materials['Yellow.001']} />
      </group>
      <group position={[-55.416, 138.792, -2.491]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[8.135, 8.135, 31.405]}>
        <mesh geometry={nodes.Cylinder006_Metal001_0.geometry} material={materials['Metal.001']} />
        <mesh geometry={nodes.Cylinder006_Orange003_0.geometry} material={materials['Orange.003']} />
      </group>
      <group position={[50.674, 26.158, 17.614]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[7.989, 4.612, 7.989]}>
        <mesh geometry={nodes.Cube087_Orange003_0.geometry} material={materials['Orange.003']} />
        <mesh geometry={nodes.Cube087_Metal001_0.geometry} material={materials['Metal.001']} />
      </group>
      <group position={[12.094, 202.051, -15.704]} rotation={[-Math.PI / 2, 0, 2.727]} scale={[9.406, 2.353, 3.24]}>
        <mesh geometry={nodes.Cube105_Yellow001_0.geometry} material={materials['Yellow.001']} />
        <mesh geometry={nodes.Cube105_Grey003_0.geometry} material={materials['Grey.003']} />
      </group>
      <mesh geometry={nodes.Cube001_Concrete001_0.geometry} material={materials['Concrete.001']} position={[-1.916, 11.357, -63.2]} rotation={[-Math.PI / 2, 0, 0]} scale={[42.223, 19.273, 19.273]} />
      <mesh geometry={nodes.Cylinder001_Grey_0.geometry} material={materials.Grey} position={[-1.916, 21.297, -63.2]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.135, 8.135, 33.188]} />
      <mesh geometry={nodes.Cube003_Grey_0.geometry} material={materials.Grey} position={[-16.958, 22.277, -89.337]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.356, 29.571, 2.761]} />
      <mesh geometry={nodes.Cube024_Black003_0.geometry} material={materials['Black.003']} position={[-1.695, 292.93, -63.2]} rotation={[-Math.PI / 2, 0, 0]} scale={[26.546, 9.859, 10.979]} />
      <mesh geometry={nodes.Cube031__0.geometry} material={materials['Cube.031__0']} position={[20.228, 260.528, -56.155]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.767, 0.767, 5.989]} />
      <mesh geometry={nodes.Cube041_Concrete001_0.geometry} material={materials['Concrete.001']} position={[-1.695, 204.068, -53.586]} rotation={[-Math.PI / 2, 0, 0]} scale={[22.824, 13.636, 3.059]} />
      <mesh geometry={nodes.Cube042_Yellow001_0.geometry} material={materials['Yellow.001']} position={[-1.695, 215.784, -53.586]} rotation={[-Math.PI / 2, 0, 0]} scale={[22.824, 13.636, 3.059]} />
      <mesh geometry={nodes.Cube061_Metal001_0.geometry} material={materials['Metal.001']} position={[-82.647, 80.045, 14.089]} rotation={[-Math.PI / 2, 0.391, Math.PI / 2]} scale={[3.748, 2.149, 70.691]} />
      <mesh geometry={nodes.Cube062_Black003_0.geometry} material={materials['Black.003']} position={[-79.159, 88.507, -2.177]} rotation={[2.395, -0.273, 1.854]} scale={[25.931, 1.304, 2.082]} />
      <mesh geometry={nodes.Cylinder008_Grey003_0.geometry} material={materials['Grey.003']} position={[-24.249, 202.246, -17.125]} rotation={[Math.PI / 2, 0, 0]} scale={4.552} />
    </group>
  );
};

export const Rocket = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows className='animate__animated animate__fadeIn'>
        <Stage environment={'city'}>
          <Model/>
        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </Suspense>
  );
};

useGLTF.preload('/models/rocket.gltf');
