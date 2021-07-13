import { Button, Container } from "../components"
import Image from 'next/image'
const Profile = () => {
    return (
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
            <div className="mt-4">
                {/* TODO: */}
            </div>
        </Container>
    )
}

export default Profile