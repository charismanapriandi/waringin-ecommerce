import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Button, CardCart, Container, Gap } from "../components"
import useArray from "../hook/useArray"
import useMoney from "../hook/useMoney"
import useSubtraction from "../hook/useSubtraction"
import useSum from "../hook/useSum"

const Cart = () => {
    const cartList = useSelector(state => state.memory.cart_list)
    
    const price = useArray(cartList?.map(item => item.price))
    const discount = useArray(cartList?.map(item => item.discount))

    const sumPrice = useSum(price)
    const sumDiscount = useSum(discount)

    const totalPrice = useSubtraction(sumPrice, sumDiscount)

    return (
        <>
            <Container>
                <div className="flex">
                    <div className="w-2/3 mr-4">
                        <div className="ring ring-background-800 rounded-xl p-4 flex justify-between">
                            <div>
                                <p>DATA PENERIMA</p>
                                <p className="font-bold mt-2">John Doe</p>
                            </div>
                            <div>
                                <Button>GANTI</Button>
                            </div>
                        </div>
                        <Gap height={20} />
                        <div className="ring ring-background-800 rounded-xl p-4 flex justify-between">
                            <div>
                                <p>ALAMAT PENERIMA</p>
                                <p className="font-bold mt-2">Excepteur ullamco ipsum in sunt eiusmod Lorem sunt consectetur occaecat qui cupidatat excepteur veniam cupidatat.</p>
                            </div>
                            <div>
                                <Button>GANTI</Button>
                            </div>
                        </div>
                        <Gap height={20} />
                        <div className="bg-background-800 w-full rounded-xl p-4">
                            METODE PENGIRIMAN
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="bg-background-800 w-full rounded-xl p-4">
                            <p className="font-bold">Keranjang</p>
                            <Gap height={20} />
                            {cartList &&
                                <>
                                    {cartList?.map(item => {
                                        return (
                                            <CardCart
                                                item={item}
                                            />
                                        )
                                    })}
                                    <Gap height={20} />
                                    <div className="mx-10">
                                        <div className="flex justify-between">
                                            <p>Pengiriman<span className="font-normal ml-2">JNE Express</span></p>
                                            <p className="font-bold">Rp. 20.000</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Diskon</p>
                                            <p className="font-bold text-green-300">{useMoney(sumDiscount)}</p>
                                        </div>
                                    </div>
                                    <Gap height={30} />
                                    <div className="p-4 rounded-xl bg-background-900 flex items-center justify-between px-10">
                                        <p className="text-xl font-bold">Total</p>
                                        <p>{useMoney(totalPrice)}</p>
                                    </div>
                                    <Gap height={10} />
                                    <Button active={true}>Bayar</Button>
                                </>
                            }
                            
                            {!cartList && 
                                <>
                                    <div className="my-5 text-text-900 text-9xl flex justify-center items-center">
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </div>
                                    <p className="mb-5 text-center font-bold text-2xl text-text-900">keranjang anda kosong</p>
                                    <Button active={true}>mulai berbelanja</Button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart