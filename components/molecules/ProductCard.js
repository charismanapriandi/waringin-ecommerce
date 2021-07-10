import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { openProductDetile } from '../../store/actions/statusAction'
import { Button, Gap } from '../atoms'

const ProductCard = () => {
    const dispatch = useDispatch()

    return (
        <div className="w-64 border border-background-800 rounded-3xl overflow-hidden mb-2 mx-1 relative">
            <div className="w-60 h-60 overflow-hidden mx-auto mt-2 rounded-2xl relative">
                <Image 
                    src="/iphone.jpg"
                    alt="product"
                    height={400}
                    width={400}
                    layout="intrinsic"
                />
                <div className="absolute top-2 right-2">
                <Button>
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
            </div>
            </div>
            <div className="px-2 pt-3 pb-2">
                <p className="text-base font-bold">Iphone xr</p>
                <div className="mt-2">
                    <p className="text-sm text-text-900">price</p>
                    <p className="">Rp. 20.000.000</p>
                </div>
                <Gap height={10} />
                <Button onClick={() => dispatch(openProductDetile())}>
                    lihat detail produk
                </Button>
            </div>
        </div>
    )
}

export default ProductCard