import { createContext, useContext } from 'react'
import { useListReducer } from './reducers'

const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useListReducer({
        projectsVisible: false,
    })
    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext)
}

export { StoreProvider, useStoreContext }