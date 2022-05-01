import { Canvas } from '@react-three/fiber'
import Goblin from '../Goblin'

export const Scene = () => {
    const clickEvent = () => {
        console.log('goblin mode')
    }
    return (
        <Canvas camera={{fov: 90}}>
            <ambientLight intensity={0.1} />
            <directionalLight color='white' position={[0,0,5]} />
            <Goblin onClick={clickEvent} position={[0,-5,-10]} rotation={[0.2,0.3,0]} />
            {/* <mesh position={[0,0,0]}>
                <boxGeometry args={[1000,1000,1000]} />
                <meshStandardMaterial />
            </mesh> */}
        </Canvas>
    )
}