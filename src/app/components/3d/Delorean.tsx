'use client';

import { useRef } from 'react';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function Model() {
  const groupRef = useRef(null);
  //@ts-ignore
  const { nodes, materials } = useGLTF('/models/delorean.gltf');
  
  return (
    <group ref={groupRef} dispose={null}>
      <group position={[0.174, 0.121, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.538, 2.993, -12.239]} scale={0.816}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.mr_fusion} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.mr_fusion_2} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.mr_fusion_3} />
          </group>
          <group position={[-5.118, 2.373, -12.225]} rotation={[2.666, -0.141, 0.267]}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.front_part} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.front_part_2} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials.delorean} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.window} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.windshield} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.sides} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.wheels} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.wheels_2} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.cooler} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.metal_parts} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.buttons} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.buttons_2} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.board} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.circuits} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.circuits_2} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.time_circuits} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.back_part} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.cables} position={[1.629, 2.909, -11.119]} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.cables} position={[-2.012, 2.15, -10.438]} rotation={[Math.PI / 2, 0, 0]} scale={2.174} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.cables} position={[1.118, 2.928, -11.955]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.cables} position={[-2.012, 2.15, -13.869]} rotation={[Math.PI / 2, 0, 0]} scale={2.174} />
          <mesh geometry={nodes.Object_35.geometry} material={materials.cables} position={[1.13, 2.909, -13.196]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh geometry={nodes.Object_37.geometry} material={materials.cables} position={[1.636, 2.909, -13.196]} />
        </group>
      </group>
    </group>
  );
};

export const Delorean = () => {
  return (
    <Canvas shadows>
      <Stage environment={'sunset'} intensity={1}>
        <Model/>
      </Stage>
      <OrbitControls/>
    </Canvas>
  );
};

useGLTF.preload('/models/delorean.gltf');
