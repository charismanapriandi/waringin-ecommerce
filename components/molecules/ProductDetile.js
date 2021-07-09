import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Gap } from ".."
import Image from 'next/image'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Radio from "./Radio"
import DropdownLeft from "./DropdownLeft"
import { Input } from "../atoms"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeProductDetile } from "../../store/actions/statusAction"
import Blocker from "./Blocker"
import DropdownCenter from "./DropdownCenter"

const ProductDetile = ({ setStatus, children }) => {
    const [isColor, setIsColor] = useState(false)
    const [isStorage, setIsStorage] = useState(false)
    const [isRam, setIsRam] = useState(false)
    const productDetile = useSelector(state => state.status.product_detile)
    const dispatch = useDispatch()

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
                onClick={() => dispatch(closeProductDetile())} />
            <div 
                className={`${productDetile ? 'pointer-events-auto opacity-100 bottom-0' : 'pointer-events-none opacity-0 -bottom-20'} product-detile bg-background-900 fixed left-1/2 container transform -translate-x-1/2 z-40 rounded-t-3xl p-4 transition-all duration-300`}>
                <div className="flex justify-center items-center">
                    <div>
                        <Button onClick={() => dispatch(closeProductDetile())}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </Button>
                    </div>
                </div>

                {/* CONTENT */}
                
                <Gap height={20} />
                <div className="flex">
                    {/* LEFT */}
                    <div className="w-1/3">
                        <div className="w-64 h-64 relative rounded-xl overflow-hidden mx-auto">
                            <Image
                                src="/iphone.jpg"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <Gap height={10} />
                        <div className="flex justify-center">
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
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-2/3">
                        <p className="font-bold text-lg">Iphone XR</p>
                        <p className="mt-2">Officia fugiat eiusmod aliquip sint voluptate ullamco pariatur veniam ipsum quis occaecat occaecat. Incididunt laboris adipisicing non eiusmod sint minim. Aute qui mollit deserunt occaecat pariatur duis quis aliqua sint esse deserunt pariatur. Duis aliqua magna est incididunt esse est aute. Aute reprehenderit esse ullamco anim culpa consectetur. Veniam id adipisicing id et.</p>
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
                            <span className="font-bold">20.000.000 </span>- tambahkan ke keranjang
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetile