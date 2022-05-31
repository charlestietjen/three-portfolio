import { useThree } from '@react-three/fiber'
import { CubeTextureLoader } from 'three'
import up from '../../assets/images/up.png'
import left from '../../assets/images/left.png'
import front from '../../assets/images/front.png'
import back from '../../assets/images/back.png'
import down from '../../assets/images/down.png'
import right from '../../assets/images/right.png'
const Skybox = () => {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        up, left, front, back, down, right
    ])
    scene.background = texture
    return (
        null
    )
}

export { Skybox }