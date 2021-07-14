import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Container, CardProduct, Gap, Sorter, Button, ProductDetile } from '../components'
import useDevice from '../hook/useDevice'
import usePosition from '../hook/usePosition'
import { openFilter } from '../store/actions/statusAction'

const Home = () => {
    const filterPanel = useSelector(state => state.status.filter_panel)
    const dispatch = useDispatch()
    const position = usePosition()
    const productList = useSelector(state => state.memory.product_list)
    const deviceSize = useDevice()

    return (
        <>
            <Container>
                <div className={`${position > 100 ? 'opacity-0' : 'opacity-100'} flex w-full transition-all duration-300`}>
                    {deviceSize > 1024 &&
                        <div className={`${filterPanel ? '-ml-20 opacity-0 pointer-events-none' : 'ml-0 opacity-100 pointer-events-auto'} mr-2 transition-all duration-300`}>
                            <Button active={true} onClick={() => {
                                dispatch(openFilter())
                            }}>filter</Button>
                        </div>
                    }
                    <div className="w-full transition-all duration-300">
                        <Input 
                            placeholder="Search" 
                            search={true} />
                    </div>
                </div>
                <Gap height={30} />
                <Sorter />
                <Gap height={30} />
                <div className="sm:flex grid grid-cols-2 sm:flex-wrap sm:justify-center justify-between">
                    {productList?.map(item => {
                        return <CardProduct 
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            payload={item}
                        />
                    })}
                </div>
            </Container>

            <ProductDetile />
        </>
    )
}

export default Home