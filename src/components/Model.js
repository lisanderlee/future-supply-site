'use client'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel } from 'lamina'

function Model({ url }) {
  const ref = useRef()
  const ref2 = useRef()
  const { nodes, materials } = useGLTF(url)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref2.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 3) / 4,
      0.15 + Math.sin(t / 2) / 8,
    )
    ref2.current.position.y = (0.5 + Math.cos(t / 2)) / 7
  })

  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2)
    const cos = Math.cos(state.clock.elapsedTime / 2)
    ref.current.layers[0].origin.set(cos / 2, 0, 0)
    ref.current.layers[1].origin.set(cos, sin, cos)
    ref.current.layers[2].origin.set(sin, cos, sin)
    ref.current.layers[3].origin.set(cos, sin, cos)
  })

  return (
    <group ref={ref2} rotation={[0, 0, 0]} position={[0, 1, 0]} scale={0.65}>
      <mesh geometry={nodes.Head.geometry}>
        <LayerMaterial ref={ref} toneMapped={false}>
          <Depth
            colorA="#ff0080"
            colorB="black"
            alpha={1}
            mode="normal"
            near={0.5 * 0.14}
            far={1}
            origin={[0, 0, 0]}
          />
          <Depth
            colorA="blue"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={40 * 0.14}
            far={2}
            origin={[0, 1, 1]}
          />
          <Depth
            colorA="green"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={30 * 0.14}
            far={3}
            origin={[0, 1, -1]}
          />
          <Depth
            colorA="white"
            colorB="red"
            alpha={1}
            mode="overlay"
            near={10 * 0.14}
            far={1.5}
            origin={[1, -1, -1]}
          />
          <Fresnel
            mode="add"
            color="white"
            intensity={0.5}
            power={1.5}
            bias={0.05}
          />
        </LayerMaterial>
      </mesh>
      <mesh material={materials.M_Headset} />
    </group>
  )
}

export default function Head(props) {
  return (
    <>
      <Canvas id="thecanvas" dpr={[1.5, 2]} linear shadows>
        <ambientLight intensity={0.75} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 16]}
          fov={63}
        ></PerspectiveCamera>
        <pointLight intensity={2} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={0}
          position={[-25, 20, -15]}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <Suspense fallback={null}>
          <Model url="./Head.glb" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      {/* <img src="images/images/hero_flag.svg" alt="logo" className="hero-flag absolute -z-10 right-44 bottom-20" /> */}
      <Loader />
    </>
  )
}
