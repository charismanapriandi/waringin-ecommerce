import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useMoney from '../../hook/useMoney'
import useScrollBody from '../../hook/useScrollBody'
import { setProductDetile } from '../../store/actions/memoryAction'
import { openProductDetile } from '../../store/actions/statusAction'
import { Button, Gap } from '../atoms'
import ConfirmationDelete from './ConfirmationDelete'
import DropdownRight from './DropdownRight'

const CardWishlist = ({ item }) => {
    const dispatch = useDispatch()
    const curencyPrice = useMoney(item.price)
    const [isCMenu, setIsCMenu] = useState(false)
    const {scrollOff} = useScrollBody()

    return (
        <div className="ring ring-background-800 rounded-xl p-4 flex justify-between mb-4 relative">
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
            {/* -------------------- sm ------------------ */}
            <div className="absolute top-2 right-3 lg:hidden">
                <div
                    className="h-8 w-8 flex justify-center items-center rounded-full cursor-pointer" 
                    onClick={() => setIsCMenu(!isCMenu)}>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
                <DropdownRight status={isCMenu} setStatus={setIsCMenu}>
                    <Button onClick={() => {
                        setIsCMenu(false)
                        dispatch(setProductDetile(item))
                        dispatch(openProductDetile())
                        scrollOff()
                    }}>add to cart</Button>
                    <Gap height={10} />
                    <ConfirmationDelete />
                </DropdownRight>
            </div>
            {/* -------------------- lg ------------------ */}
            <div className="relative mt-auto hidden lg:flex">
                <ConfirmationDelete/>   
                <Gap width={20} />    
                <Button 
                    active={true} 
                    onClick={() => {
                        dispatch(setProductDetile(item))
                        dispatch(openProductDetile())
                        scrollBody()
                    }}>
                    tambah ke keranjang
                </Button>
            </div>
        </div>
    )
}

export default CardWishlist