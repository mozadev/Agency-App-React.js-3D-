import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'

import * as random from 'maath/random/dist/maath-random.esm'



const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    let positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    // Validar que no haya NaN en las posiciones generadas
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        console.error('Se encontró un valor NaN en las posiciones generadas');
        // Reemplazar el valor NaN con 0 o alguna otra estrategia adecuada
        positions[i] = 0;
      }
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride=
        {3} frustumCulled {...props} >
        <PointMaterial
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />

      </Points>
    </group>
  )
}
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0
    z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}


export default StarsCanvas;