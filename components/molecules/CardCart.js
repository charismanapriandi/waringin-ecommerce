import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DropdownRight, Gap } from '..'
import useMoney from '../../hook/useMoney'
import { Button } from '../atoms'
import ConfirmationDelete from './ConfirmationDelete'
import DropdownCenter from './DropdownCenter'
import Pushdown from './Pushdown'

const CardCart = ({ item }) => {
    const [isDetile, setIsDetile] = useState(false)
    
    return (
        <>
        <div className="flex justify-between items-center">
            <div className="flex">
                <div className="w-24 h-24 relative overflow-hidden rounded-xl">
                    <Image 
                        src={`/images/${item.image}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="ml-4">
                    <p className="font-bold">{item.name}</p>
                    <p className="my-2">{useMoney(item.price)}{item.discount !== 0 && <span className="ml-2 text-text-active">- {useMoney(item.discount)}</span>}</p>
                    <p 
                        className="text-text-900 cursor-pointer text-right flex"
                        onClick={() => setIsDetile(!isDetile)}>
                        Detile lainnya 
                        <div className={`${isDetile ? '-rotate-180 ' : ''} ml-2 transform transition-all duration-300`}><FontAwesomeIcon icon={faChevronDown} /></div>
                    </p>
                </div>
            </div>
            <Gap width={20} />
            <div className="relative">
                <ConfirmationDelete />
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