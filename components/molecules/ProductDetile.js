import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Gap } from ".."
import Image from 'next/image'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Radio from "../atoms/Radio"
import DropdownLeft from "./DropdownLeft"
import { ButtonWishlist, Input } from "../atoms"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeProductDetile } from "../../store/actions/statusAction"
import Blocker from "./Blocker"
import DropdownCenter from "./DropdownCenter"
import useMoney from "../../hook/useMoney"
import useScrollBody from "../../hook/useScrollBody"
import ModalCenter from "./ModalCenter"

const ProductDetile = ({ setStatus, children }) => {
    const [isColor, setIsColor] = useState(false)
    const [isStorage, setIsStorage] = useState(false)
    const [isRam, setIsRam] = useState(false)
    const productDetile = useSelector(state => state.status.product_detile)
    const dispatch = useDispatch()
    const payload = useSelector(state => state.memory.product_detile_payload)
    const {scrollOn} = useScrollBody()
    const [isDetile, setIsDetile] = useState(false)
    
    const color = [
        {
            id: 1,
            name: 'Red',
        },
        {
            id: 2,
            name: 'Yellow',
        },
        {
            id: 3,
            name: 'Blue',
        },
        {
            id: 4,
            name: 'White',
        },
        {
            id: 5,
            name: 'Gray',
        },
    ]

    const storage = [
        {
            id: 1,
            storage: '32GB'
        },
        {
            id: 2,
            storage: '64GB'
        },
        {
            id: 3,
            storage: '128GB'
        }
    ]
    
    return (
        <>
            <Blocker 
                status={productDetile}
                onClick={() => {
                    dispatch(closeProductDetile())
                    scrollOn()
                }} />
            <div 
                className={`${productDetile ? 'pointer-events-auto opacity-100 bottom-0' : 'pointer-events-none opacity-0 -bottom-20'} w-full modal-bottom h-screen bg-background-900 fixed left-0 lg:left-1/2 lg:container lg:transform lg:-translate-x-1/2 z-40 rounded-t-3xl transition-all duration-300`}>
                <div className="flex justify-between items-center px-4 py-2 lg:py-4">
                    <p className="font-bold text-lg">{payload?.name}</p>
                    <div>
                        <Button onClick={() => {
                            dispatch(closeProductDetile())
                            scrollOn()
                        }}>
                            Back
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
                        <div className="flex justify-center">
                            <div className="w-20 h-20 relative rounded-xl overflow-hidden mx-2 hover:opacity-70 cursor-pointer transition-all duration-300">
                                <Image
                                    src={"/images/"+payload?.image}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="w-20 h-20 relative rounded-xl overflow-hidden mx-2 hover:opacity-70 cursor-pointer transition-all duration-300">
                                <Image
                                    src={"/images/"+payload?.image}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="w-20 h-20 relative rounded-xl overflow-hidden mx-2 hover:opacity-70 cursor-pointer transition-all duration-300">
                                <Image
                                    src={"/images/"+payload?.image}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    {/* tab */}
                    <div className='lg:ml-4 w-full mt-4 lg:mt-0'>
                        <div className="flex border-b border-background-800">
                            <div
                                onClick={() => setIsDetile(false)} 
                                className={`${!isDetile ? "bg-background-800" : ""} cursor-pointer flex-auto text-center py-2 transition-all duration-300`}>
                                Overview
                            </div>
                            <div
                                onClick={() => setIsDetile(true)} 
                                className={`${isDetile ? "bg-background-800" : ""} cursor-pointer flex-auto text-center py-2 transition-all duration-300`}>
                                Detile
                            </div>
                        </div>
                        {/* tab Content */}
                        <div className="pb-28">
                            {/* overview */}
                            <div className={`${!isDetile ? '' : 'hidden'} py-2`}>{payload?.body}</div>
                            {/* detile */}
                            <div className={`${isDetile ? '' : 'hidden'} py-2`}>
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold mr-4 mb-1">Color</p>
                                        <Input type="button" defaultValue="--- select color ---" onClick={() => setIsColor(!isColor)}/>
                                        <ModalCenter status={isColor} setStatus={setIsColor}>
                                            {color.map(color => (
                                                <Radio key={color?.id}>{color?.name}</Radio>
                                            ))}
                                        </ModalCenter>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-bold mr-4 mb-1">internal</p>
                                        <Input type="button" defaultValue="--- select storage ---" onClick={() => setIsStorage(!isStorage)}/>
                                        <ModalCenter status={isStorage} setStatus={setIsStorage}>
                                            {storage?.map(storage => (
                                                <Radio key={storage?.id}>{storage?.storage}</Radio>
                                            ))}
                                        </ModalCenter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* { children } */}

                <div className="absolute bottom-2 rounded-xl right-5 bg-background-800 left-5 py-2 px-4 flex justify-end">
                    <div className="mr-4">
                        <ButtonWishlist />
                    </div>
                    <div>
                        <Button active={true}>
                            <span className="font-bold mr-4">{useMoney(payload?.price)} </span>add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetile