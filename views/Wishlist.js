import { useSelector } from "react-redux"
import { CardWishlist, Container, ProductDetile } from "../components"

const Wishlist = () => {
    const wishList = useSelector(state => state.memory.wish_list)
    
    return (
        <>
            <Container>
                {wishList?.map(item => {
                    return (
                        <CardWishlist item={item}/>
                    )
                })}
            </Container>

            <ProductDetile />
        </>
    )
}

export default Wishlist