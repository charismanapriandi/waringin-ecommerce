import { useDispatch, useSelector } from 'react-redux'
import { Input, Container, ProductCard, Gap, Sorter, Button, ProductDetile } from '../components'
import usePosition from '../hook/usePosition'
import { openFilter } from '../store/actions/statusAction'

const Home = () => {
    const filterPanel = useSelector(state => state.status.filter_panel)
    const dispatch = useDispatch()
    const position = usePosition()

    return (
        <>
            <Container>
                <div className={`${position > 100 ? 'opacity-0' : 'opacity-100'} flex w-full transition-all duration-300`}>
                    <div className={`${filterPanel ? '-ml-20 opacity-0 pointer-events-none' : 'ml-0 opacity-100 pointer-events-auto'} mr-2 transition-all duration-300`}>
                        <Button active={true} onClick={() => {
                            dispatch(openFilter())
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
                <div className="flex flex-wrap justify-center">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <ProductDetile>
                ss
            </ProductDetile>
        </>
    )
}

export default Home