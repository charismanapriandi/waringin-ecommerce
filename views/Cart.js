import { Button, CardCart, Container, Gap } from "../components"

const Cart = () => {
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
                            <CardCart/>
                            <CardCart/>
                            <CardCart/>
                            <Gap height={10} />
                            <div className="mx-10">
                                <div className="flex justify-between">
                                    <p>Pengiriman<span className="font-normal ml-2">JNE Express</span></p>
                                    <p className="font-bold">Rp. 20.000</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Diskon</p>
                                    <p className="font-bold text-green-300">- Rp. 20.000</p>
                                </div>
                            </div>
                            <Gap height={20} />
                            <div className="p-4 rounded-xl bg-background-900 flex items-center justify-between px-10">
                                <p className="text-xl font-bold">Total</p>
                                <p>Rp 20.000.000</p>
                            </div>
                            <Gap height={10} />
                            <Button active={true}>Bayar</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart