// import { useResource } from 'react'
import { Canvas } from '@react-three/fiber'
import Goblin from '../Goblin'
import Room from '../Room'
import { Skybox } from '../Skybox'



export const Scene = () => {
    const clickEvent = () => {
        console.log('goblin mode')
    }
    // const light = useRef(null)
    return (
        <Canvas camera={{fov: 60}}>
            <ambientLight intensity={0.1} />
            {/* <directionalLight color='darkblue' position={[-30,5,0]} /> */}
            <pointLight intensity={1} color='darkblue' position={[-30,5,0]} />
            <Skybox />
            {/* <Goblin onClick={clickEvent} position={[0,-5,-10]} rotation={[0.2,0.3,0]} /> */}
            <Room position={[0,-1,-0.08]} rotation={[0.01,1,0]}/>
        </Canvas>
    )
}