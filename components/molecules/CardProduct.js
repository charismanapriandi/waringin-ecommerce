import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartFill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useMoney from '../../hook/useMoney'
import useScrollBody from '../../hook/useScrollBody'
import { setProductDetile } from '../../store/actions/memoryAction'
import { openProductDetile } from '../../store/actions/statusAction'
import { Button, ButtonWishlist, Gap } from '../atoms'

const CardProduct = ({ image, name, price, payload }) => {
    const [favorite, setFavorite] = useState(false)
    const dispatch = useDispatch()
    const scrollBody = useScrollBody()
    return (
        <div className="w-64 border border-background-800 rounded-3xl overflow-hidden mb-2 mx-1 relative">
            <div className="w-60 h-60 overflow-hidden mx-auto mt-2 rounded-2xl relative">
                <Image 
                    src={'/images/' + image}
                    alt="product"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-2 right-2">
                <ButtonWishlist />
            </div>
            </div>
            <div className="px-2 pt-3 pb-2">
                <p className="text-base font-bold">{name}</p>
                <div className="mt-2">
                    <p className="text-sm text-text-900">harga</p>
                    <p className="">Rp. {useMoney(price)}</p>
                </div>
                <Gap height={10} />
                <Button onClick={() => {
                    dispatch(openProductDetile())
                    dispatch(setProductDetile(payload))
                    scrollBody()
                }}>
                    lihat detail produk
                </Button>
            </div>
        </div>
    )
}

export default CardProduct