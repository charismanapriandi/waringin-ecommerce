import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DropdownRight, Gap } from '..'
import { Button } from '../atoms'
import DropdownCenter from './DropdownCenter'

const CardCart = () => {
    const [isDetile, setIsDetile] = useState(false)
    const [confirm, setConfirm] = useState(false)

    // useEffect(() => {
        
    // }, [confirm])
    
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex">
                <div className="w-24 h-24 relative overflow-hidden rounded-xl">
                    <Image 
                        src="/iphone.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="ml-4">
                    <p className="font-bold">Iphone XR</p>
                    <div className="my-2 flex justify-between w-full">
                        <p className="text-text-900 mr-2">
                            warna
                            <span className="ml-2 text-text-800">
                                Merah
                            </span>
                        </p>
                    </div>
                    <p>Rp. 20.000.000</p>
                </div>
            </div>
            <Gap width={20} />
            <div className="relative">
                <p 
                    className="text-text-900 cursor-pointer text-right"
                    onClick={() => setIsDetile(true)}>
                    Detile lainnya 
                    <FontAwesomeIcon icon={faChevronDown} />
                </p>
                <DropdownRight status={isDetile} setStatus={setIsDetile}>
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
                </DropdownRight>
                <Gap height={20} />
                <div className={`${confirm ? 'hidden' : 'ml-10'}`}>
                    <Button danger={true} onClick={() => {
                        setConfirm(true)
                        setTimeout(() => {
                            setConfirm(false)
                        }, 5000)}}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </div>
                <div className={`${confirm ? 'flex' : 'hidden'}`}>
                    <Button onClick={() => setConfirm(false)}>
                        Batal
                    </Button>
                    <Gap width={10} />
                    <Button danger={true}>
                        Yakin
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardCart