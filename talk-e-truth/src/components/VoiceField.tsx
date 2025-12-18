import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.1
    meshRef.current.position.y = Math.sin(t) * 0.15
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial
        color="#ff0a4fff"
        roughness={0.6}
        metalness={0.2}
        transparent
        opacity={0.1}
      />
    </mesh>
  )
}

export default function VoiceField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 5]} intensity={1} />
      <FloatingSphere />
    </Canvas>
  )
}
