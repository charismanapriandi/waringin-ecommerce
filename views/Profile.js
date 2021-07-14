import { Button, Container, Gap, Input, Notification } from "../components"
import Image from 'next/image'
import { useState } from "react"
const Profile = () => {
    const [edit, setEdit] = useState(false)
    const [notif, setNotif] = useState(false)

    return (
        <>
        <Container>
            <div className="flex">
                <div className="w-20 h-20 overflow-hidden rounded-full relative">
                    <Image 
                        src="/profile.jpeg"
                        layout="fill"
                        objectFit='cover' />
                </div>
                <div className="ml-4">
                    <p className="font-bold">John Doe</p>
                    <p className="text-text-900">member</p>
                </div>
            </div>
            {/* tab button */}
            <div className="mt-4 flex justify-around border-b border-background-800">
                <div
                    onClick={() => setEdit(false)} 
                    className={`${!edit ? 'bg-background-800' : ''} flex-auto text-center p-2 cursor-pointer`}>
                    Profile
                </div>
                <div
                    onClick={() => setEdit(true)} 
                    className={`${edit ? 'bg-background-800' : ''} flex-auto text-center p-2 cursor-pointer`}>
                    Edit Profile
                </div>
            </div>
            {/* tab content */}
            <div className="mt-4">
                {/* profile content  */}
                <div className={`${!edit ? '' : 'hidden'}`}>
                    <p className="font-bold">Receiver</p>                    
                    <p className="mb-4">John Doe</p>
                    <p className="font-bold">Address</p>                    
                    <p className="mb-4">Dolor non cillum voluptate adipisicing enim eiusmod esse adipisicing.</p>
                    <p className="font-bold">Phone</p>                    
                    <p className="mb-4">08797726781</p>
                </div>
                {/* edit content  */}
                <div className={`${edit ? '' : 'hidden'}`}>
                    <Input 
                        label="Receiver"
                    />
                    <Gap height={10} />
                    <Input 
                        label="Address"
                    />
                    <Gap height={10} />
                    <Input 
                        label="Phone"
                    />
                    <Gap height={20} />
                    <div className="flex">
                        <Button
                            onClick={() => setEdit(false)}>
                            Save
                        </Button>
                        <Gap width={20} />
                        <Button
                            active={true}
                            onClick={() => {
                                setEdit(false)
                                setNotif(true)
                                setTimeout(() => {
                                    setNotif(false)
                                }, 3000)
                            }}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            <Notification status={notif} setStatus={setNotif}>
                success
            </Notification>
        </Container>
        </>
    )
}

export default Profile