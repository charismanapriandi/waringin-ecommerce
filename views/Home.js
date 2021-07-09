import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Container, ProductCard, Gap, Sorter, Button } from '../components'
import usePosition from '../hook/usePosition'
import { FILTER_PANEL } from '../store/types'

const Home = () => {
    const filterPanelOpen = useSelector(state => state.global.filterPanelOpen)
    const dispatch = useDispatch()
    const position = usePosition()

    return (
        <Container>
            <div className={`${position > 100 ? 'opacity-0' : 'opacity-100'} flex w-full transition-all duration-300`}>
                <div className={`${filterPanelOpen ? '-ml-20 opacity-0 pointer-events-none' : 'ml-0 opacity-100 pointer-events-auto'} mr-2 transition-all duration-300`}>
                    <Button active={true} onClick={() => {
                        dispatch({
                            type: FILTER_PANEL,
                            status: true
                        })
                    }}>filter</Button>
                </div>
                <div className="w-full transition-all duration-300">
                    <Input 
                        placeholder="Search" 
                        search={true} />
                </div>
            </div>
            <Gap height={30} />
            <Sorter />
            <Gap height={30} />
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Container>
    )
}

export default Home