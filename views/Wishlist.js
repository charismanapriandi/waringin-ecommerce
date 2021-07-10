import { CardWishlist, Container, ProductDetile } from "../components"

const Wishlist = () => {
    return (
        <>
            <Container>
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
            </Container>

            <ProductDetile />
        </>
    )
}

export default Wishlist