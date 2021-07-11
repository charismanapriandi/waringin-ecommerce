import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { faCaretLeft, faCaretRight, faChevronDown, faHourglassEnd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { closeLiveChat } from "../../store/actions/statusAction"
import { Button, Gap, Input } from "../atoms"
import Blocker from "./Blocker"
import Image from 'next/image'

const IncomingMessage = ({ message }) => {
    return (
        <div className="flex py-2">
            <div className="w-10 h-10 relative overflow-hidden rounded-full">
                <Image 
                    src="/profile.jpeg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="w-auto ml-4 px-4 py-2 bg-background-800 rounded-xl relative">
                <p className="font-bold mb-2">Admin</p>
                <p className="">{ message }</p>
                <p className="text-sm text-text-900 float-right mt-2">12.20</p>
                <span className="absolute -left-2 top-0 text-2xl text-background-800">
                    <FontAwesomeIcon icon={faCaretLeft} />
                </span>
            </div>
        </div>
    )
}

const OutcomingMessage = ({ message }) => {
    return (
        <div className="flex justify-end py-2">
            <div className="w-auto mr-4 px-4 py-2 bg-text-900 rounded-xl relative">
                <p className="font-bold mb-2">John Doe</p>
                <p className="">{ message }</p>
                <p className="text-sm text-background-800 float-right mt-2">12.20</p>
                <span className="absolute -right-2 top-0 text-2xl text-background-800">
                    <FontAwesomeIcon icon={faCaretRight} />
                </span>
            </div>
            <div className="w-10 h-10 relative overflow-hidden rounded-full">
                <Image 
                    src="/profile.jpeg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            
        </div>
    )
}

const LiveChat = () => {
    const liveChatStatus = useSelector(state => state.status.live_chat)
    const dispatch = useDispatch()

    return (
        <>
            <Blocker 
                status={liveChatStatus}
                onClick={() => dispatch(closeLiveChat())} />
            <div 
                className={`${liveChatStatus ? 'pointer-events-auto opacity-100 bottom-0' : 'pointer-events-none opacity-0 -bottom-20'} product-detile bg-background-900 fixed left-1/2 container transform -translate-x-1/2 z-40 rounded-t-3xl overflow-hidden transition-all duration-300`}>
                <div className="flex justify-between items-center bg-background-active py-2 px-4">
                    <p className="font-bold">Live Chat</p>
                    <div>
                        <Button onClick={() => dispatch(closeLiveChat())}>
                            Sembunyikan
                        </Button>
                    </div>
                </div>
                <div className="pb-40 p-4 h-screen overflow-y-auto">
                    <IncomingMessage message="Pariatur ex exercitation consequat reprehenderit nisi." />  
                    <OutcomingMessage message="Exercitation dolore et laborum fugiat qui labore." />
                    <IncomingMessage message="Cillum duis do ea labore id commodo adipisicing aute tempor incididunt ipsum." />  
                    <OutcomingMessage message="Et pariatur amet reprehenderit cillum excepteur ea." />
                    <IncomingMessage message="Consectetur magna magna ea reprehenderit id officia ea anim nostrud aute Lorem adipisicing." />  
                    <OutcomingMessage message="Aute ut culpa qui dolor labore aliqua nulla nostrud consectetur laborum voluptate veniam consequat veniam." />
                    <IncomingMessage message="Laboris amet excepteur enim voluptate consectetur incididunt exercitation duis dolor labore dolore incididunt labore." />  
                    <OutcomingMessage message="Consequat tempor laborum ut id consequat et excepteur do ea magna." />
                </div>
                <div className="bg-background-800 flex px-4 py-2 absolute bottom-0 w-full">
                    <div className="w-full">
                        <Input placeholder="masukkan pesan" />
                    </div>
                    <Gap width={20} />
                    <div>
                        <Button active={true}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LiveChat