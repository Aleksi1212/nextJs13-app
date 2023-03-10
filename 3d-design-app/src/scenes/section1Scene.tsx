// import { useEffect, useRef, useState } from 'react'
// import useWindowDimensions from '../hooks/windowDimensionsHook'

// import * as THREE from 'three'
// import { OrbitControls } from '@react-three/drei'
// import { useThree } from '@react-three/fiber'

// function Grid() {
//     const mesh = useRef<THREE.Mesh>(null!)
//     const { camera } = useThree()
//     const [mobile, setMobile] = useState(true)

//     const dimensions = useWindowDimensions()

//     useEffect(() => {
//         camera.position.set(10, 2, 5)  
        
//         if (dimensions.width < 900) {
//             setMobile(false)
//         } else {
//             setMobile(true)
//         }
//     }, [camera, dimensions])

//     return (
//         <mesh ref={mesh}>
//             <gridHelper args={[200, 10]} />
//             <OrbitControls enableZoom={false} minDistance={100} args={[camera]} enableRotate={mobile} />
//         </mesh>
//     )
// }

// export default Grid

import Spline from '@splinetool/react-spline';

export default function Scene1() {
  return (
    <Spline scene="https://prod.spline.design/juAOa54FKuierPSd/scene.splinecode" />
  );
}
