import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import useMoney from '../../hook/useMoney'
import { setProductDetile } from '../../store/actions/memoryAction'
import { openProductDetile } from '../../store/actions/statusAction'
import { Button, Gap } from '../atoms'
import ConfirmationDelete from './ConfirmationDelete'

const CardWishlist = ({ item }) => {
    const dispatch = useDispatch()
    const curencyPrice = useMoney(item.price)

    return (
        <div className="ring ring-background-800 rounded-xl p-4 flex justify-between mb-4">
            <div className="flex">
                <div className="w-24 h-24 relative overflow-hidden rounded-xl">
                    <Image 
                        src={`/images/${item.image}`}
                        layout="fill"
                        alt="product-image"
                        objectFit="cover"
                    />
                </div>
                <div className="ml-4">
                    <p className="font-bold">{item.name}</p>
                    <div className="my-2 flex justify-between w-full">
                        <p className="text-text-900 mr-2">
                            sisa stok
                            <span className="ml-2 text-text-800">
                                {item.stock}
                            </span>
                        </p>
                    </div>
                    <p>{curencyPrice}</p>
                </div>
            </div>
            <div className="relative mt-auto flex">
                <ConfirmationDelete/>   
                <Gap width={20} />    
                <Button 
                    active={true} 
                    onClick={() => {
                        dispatch(setProductDetile(item))
                        dispatch(openProductDetile())}}>
                    tambah ke keranjang
                </Button>
            </div>
        </div>
    )
}

export default CardWishlist