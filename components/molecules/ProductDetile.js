import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Gap } from ".."
import Image from 'next/image'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Radio from "../atoms/Radio"
import DropdownLeft from "./DropdownLeft"
import { Input } from "../atoms"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeProductDetile } from "../../store/actions/statusAction"
import Blocker from "./Blocker"
import DropdownCenter from "./DropdownCenter"
import useMoney from "../../hook/useMoney"
import useScrollBody from "../../hook/useScrollBody"

const ProductDetile = ({ setStatus, children }) => {
    const [isColor, setIsColor] = useState(false)
    const [isStorage, setIsStorage] = useState(false)
    const [isRam, setIsRam] = useState(false)
    const productDetile = useSelector(state => state.status.product_detile)
    const dispatch = useDispatch()
    const payload = useSelector(state => state.memory.product_detile_payload)
    const scrollBody = useScrollBody()
    
    const color = [
        {
            id: 1,
            name: 'Merah',
        },
        {
            id: 2,
            name: 'Kuning',
        },
        {
            id: 3,
            name: 'Biru',
        },
        {
            id: 4,
            name: 'Putih',
        },
    ]
    
    return (
        <>
            <Blocker 
                status={productDetile}
                onClick={() => {
                    dispatch(closeProductDetile())
                    scrollBody()
                }} />
            <div 
                className={`${productDetile ? 'pointer-events-auto opacity-100 top-0' : 'pointer-events-none opacity-0 top-20'} product-detile h-screen bg-background-900 fixed left-0 lg:left-1/2 lg:container lg:transform lg:-translate-x-1/2 z-40 rounded-t-3xl transition-all duration-300`}>
                <div className="flex justify-end items-center px-4 py-2 lg:py-4">
                    <div>
                        <Button onClick={() => {
                            dispatch(closeProductDetile())
                            scrollBody()
                        }}>
                            Kembali
                            {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                        </Button>
                    </div>
                </div>

                {/* CONTENT */}
                
                {/* <Gap height={20} /> */}
                <div className="block lg:flex h-full overflow-y-auto p-4">
                    {/* LEFT */}
                    <div className="lg:w-1/3">
                        <div className="w-64 h-64 relative rounded-xl overflow-hidden mx-auto">
                            <Image
                                src={"/images/"+payload?.image}
                                layout="fill"
                                alt="product-image"
                                objectFit="cover"
                            />
                        </div>
                        <Gap height={10} />
                        {/* <div className="flex justify-center">
                            <div className="w-20 h-20 relative rounded-xl overflow-hidden mx-2 hover:opacity-70 cursor-pointer transition-all duration-300">
                                <Image
                                    src="/iphone.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="w-20 h-20 relative rounded-xl overflow-hidden mx-2 hover:opacity-70 cursor-pointer transition-all duration-300">
                                <Image
                                    src="/iphone.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="w-20 h-20 relative rounded-xl overflow-hidden mx-2 hover:opacity-70 cursor-pointer transition-all duration-300">
                                <Image
                                    src="/iphone.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div> */}
                    </div>
                    {/* RIGHT */}
                    <div className="lg:w-2/3 mt-5 lg:mt-0">
                        <p className="font-bold text-lg text-center">{payload?.name}</p>
                        <p className="mt-2">{payload?.body}</p>
                        <Gap height={20} />
                        <div className="flex items-center mb-2">
                            <p className="font-bold mr-4">Warna</p>
                            <div className="relative">
                                <div className="w-64">
                                    <Input type="button" defaultValue="--- pilih warna ---" onClick={() => setIsColor(!isColor)}/>
                                </div>
                                <DropdownCenter status={isColor} setStatus={setIsColor}>
                                    { color.map(color => (
                                        <Radio key={color.id}>{color.name}</Radio>
                                    )) }
                                </DropdownCenter>
                            </div>
                        </div>
                        <div className="items-center mb-2 flex">
                            <p className="font-bold mr-4">Memori Penyimpanan</p>
                            <div className="relative">
                                <div className="w-64">
                                    <Input 
                                        type="button" 
                                        defaultValue="--- pilih option ---" 
                                        onClick={() => setIsStorage(!isStorage)}/>
                                </div>
                                <DropdownCenter status={isStorage} setStatus={setIsStorage}>
                                    { color.map(color => (
                                        <Radio key={color.id}>{color.name}</Radio>
                                    )) }
                                </DropdownCenter>
                            </div>
                        </div>
                        <div className="items-center mb-2 flex">
                            <p className="font-bold mr-4">Memori RAM</p>
                            <div className="relative">
                                <div className="w-64">
                                    <Input 
                                        type="button" 
                                        defaultValue="--- pilih option ---" 
                                        onClick={() => setIsRam(!isRam)}/>
                                </div>
                                <DropdownCenter status={isRam} setStatus={setIsRam}>
                                    { color.map(color => (
                                        <Radio key={color.id}>{color.name}</Radio>
                                    )) }
                                </DropdownCenter>
                            </div>
                        </div>
                    </div>
                </div>

                {/* { children } */}

                <div className="absolute bottom-2 rounded-xl right-5 bg-background-800 left-5 py-2 px-4 flex justify-end">
                    <div className="mr-4">
                        <Button>
                            <FontAwesomeIcon icon={faHeart} />
                        </Button>
                    </div>
                    <div>
                        <Button active={true}>
                            <span className="font-bold mr-4">{useMoney(payload?.price)} </span>tambahkan ke keranjang
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetile