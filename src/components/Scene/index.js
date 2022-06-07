import { Canvas } from '@react-three/fiber'
import { useStoreContext } from '../../utils/GlobalState'
import Goblin from '../Goblin'
import Room from '../Room'
import NoticeBoard from '../NoticeBoard'
import { Skybox } from '../Skybox'
import { ProjectsList } from '../ProjectsList'
import { TOGGLE_PROJECTS } from '../../utils/actions'
import './styles.css'

export const Scene = () => {
    const [state, dispatch] = useStoreContext();
    const projectsClick = () => {
        dispatch({
            type: TOGGLE_PROJECTS,
            projectsVisible: !state.projectsVisible
        })
    }
    return (
        <Canvas className='Scene' camera={{fov: 60}}>
            <ambientLight intensity={0.07} />
            <pointLight intensity={1} color='darkblue' position={[-30,5,0]} />
            <Skybox />
            <Room position={[0,-1,-0.08]} rotation={[0.01,1,0]}/>
            <NoticeBoard onClick={projectsClick} position={[-1.6,0.2,2.36]} rotation={[0.01,1,0]} scale={[0.2,0.2,0.2]}/>
        </Canvas>
    )
}