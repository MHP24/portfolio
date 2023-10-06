'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import { useGLTF, useAnimations, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model() {
  const groupRef = useRef(null);
  //@ts-ignore
  const { nodes, materials, animations } = useGLTF('/models/penguin.gltf');
  const { actions, names } = useAnimations(animations, groupRef);

  useEffect(() => {
    const animation = actions[names[0]];
    animation && animation.reset().fadeIn(0.5).play()
  }, []);

  return (
    <group ref={groupRef} position={[0, -60, 0]} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="1cf78bb2d64943928e8bb2f7e0a39cfafbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature001">
                  <group name="Object_11">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Pinguin} skeleton={nodes.Object_14.skeleton}/>
                    <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Sharf} skeleton={nodes.Object_15.skeleton}/>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/penguin.gltf');

export const Penguin = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows={false} className='animate__animated animate__fadeIn'>
        <Stage environment={'sunset'} shadows={false}>
          <Model/>
        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </Suspense>
  );
};
