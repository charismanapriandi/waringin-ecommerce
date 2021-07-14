import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faChevronUp, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DropdownRight, Gap } from '..'
import useDevice from '../../hook/useDevice'
import useMoney from '../../hook/useMoney'
import { Button } from '../atoms'
import ConfirmationDelete from './ConfirmationDelete'
import DropdownCenter from './DropdownCenter'
import Pushdown from './Pushdown'

const CardCart = ({ item }) => {
    const [isDetile, setIsDetile] = useState(false)
    const [isCMenu, setIsCMenu] = useState(false)
    
    const curencyPrice = useMoney(item.price)
    const curencyDiscount = useMoney(item.discount)
    
    const deviceSize = useDevice()
    
    return (
        <>
        <div className="flex justify-between items-center relative">
            <div className="flex items-center">
                <div className="w-24 h-24 relative overflow-hidden rounded-xl">
                    <Image 
                        src={`/images/${item.image}`}
                        alt="product-image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="ml-4">
                    <p className="font-bold">{item.name}</p>
                    <span className="my-2">
                        <p className="">{curencyPrice}</p>
                        <span className="text-text-900 flex text-sm">discount
                            {item.discount !== 0 && <p className="text-text-active ml-2"> {curencyDiscount}</p>}
                            {item.discount === 0 && <p className="text-text-active ml-2"> {curencyDiscount}</p>}
                        </span>
                    </span>
                </div>
            </div>
            <div className="">
                {/* -------------------- sm ------------------ */}
                <div className="absolute top-1 right-1 lg:hidden">
                    <div
                        className="h-8 w-8 flex justify-center items-center rounded-full cursor-pointer" 
                        onClick={() => setIsCMenu(!isCMenu)}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                    <DropdownRight status={isCMenu} setStatus={setIsCMenu}>
                        <Button onClick={() => {
                            setIsCMenu(false)
                            setIsDetile(true)
                        }}>Detile Product</Button>
                        <Gap height={10} />
                        <ConfirmationDelete />
                    </DropdownRight>
                </div>
                {/* -------------------- lg ------------------ */}
                <div className="relative hidden lg:block">
                    <Button onClick={() => setIsDetile(!isDetile)}>Detile</Button>
                    <Gap height={10} />
                    <ConfirmationDelete />
                </div>
            </div>
            
        </div>
        <Pushdown status={isDetile} setStatus={setIsDetile}>
            <div className="flex justify-center">
                <p className="cursor-pointer" onClick={() => setIsDetile(false)}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </p>
            </div>
            <div className="flex justify-between my-1">
                <p className="text-text-900 mr-2">
                    warna
                </p>
                <p className="ml-2 text-text-800">
                    Merah
                </p>
            </div>
            <div className="flex justify-between my-1">
                <p className="text-text-900 mr-2">
                    memori peyimpanan
                </p>
                <p className="ml-2 text-text-800">
                    64Gb
                </p>
            </div>
            <div className="flex justify-between my-1">
                <p className="text-text-900 mr-2">
                    memori RAM
                </p>
                <p className="ml-2 text-text-800">
                    4GB
                </p>
            </div>
        </Pushdown>
        </>
    )
}

export default CardCart