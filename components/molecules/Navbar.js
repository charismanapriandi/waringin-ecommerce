import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faHeart } from '@fortawesome/free-regular-svg-icons'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { Container } from '.'
import { faHeadset, faShoppingBag, faStore } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import usePosition from '../../hook/usePosition'
import { Input, Button } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Gap } from '../atoms'
import DropdownRight from './DropdownRight'
import { closeFilter, openFilter, openLiveChat } from '../../store/actions/statusAction'
import Link from 'next/link'
import LiveChat from './LivaChat'
import useDevice from '../../hook/useDevice'
import useScrollBody from '../../hook/useScrollBody'
import useGoToTop from '../../hook/useGoToTop'

const Navbar = () => {
    const [userMenu, setUserMenu] = useState(false) 
    const [isSearch, setIsSearch] = useState(false)
    const [curPosition, setCurPosition] = useState(position)
    const [isShow, setIsShow] = useState(false)
    const position = usePosition()
    const filterPanel = useSelector(state => state.status.filter_panel)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const {scrollOn, scrollOff} = useScrollBody()
    const deviceSize = useDevice()
    const goToTop = useGoToTop()
    
    // bottom navigation bar controller 
    useEffect(() => {
        if (curPosition < position ){
            setIsShow(false)
        } else {
            setIsShow(true)
        }

        setCurPosition(position)
    }, [position])

    return (
        <>
            {/* top  */}
            <nav className="fixed top-0 shadow-md w-full py-3 bg-background-900 z-20 transition-all duration-300">
                <Container>
                    {/* -------------------- sm -------------------- */}
                    <div className="flex items-center lg:hidden justify-between mx-6">
                        <div className="flex items-center">
                            {location.pathname === '/' && <p className="font-bold text-xl">Waringin</p>}
                        </div>
                        {/* title control  */}
                        {location.pathname === '/cart' && <p className="font-bold text-xl">Cart</p>}
                        {location.pathname === '/wishlist' && <p className="font-bold text-xl">Wishlist</p>}
                        {location.pathname === '/profile' && <p className="font-bold text-xl">Profile</p>}
                        <div className="flex items-center">
                            {location.pathname === '/' && 
                                <div className="relative ml-4">
                                    <button 
                                        className={'bg-background-800 rounded-xl p-3 w-14 focus:ring-2 focus:ring-background-active transition-all duration-300'} 
                                        onClick={() => {
                                            filterPanel 
                                            ? dispatch(closeFilter()) && scrollOn() 
                                            : dispatch(openFilter()) && scrollOff()
                                        }}>
                                            {/* times  */}
                                        <div className={`${filterPanel ? 'w-5' : 'w-0 opacity-40'} rotate-45 origin-center transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 bg-text-800 transition-all duration-300`}/>
                                        <div className={`${filterPanel ? 'w-5' : 'w-0 opacity-40'} -rotate-45 origin-center transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 bg-text-800 transition-all duration-300`}/>
                                            {/* bars  */}
                                        <div className={`${filterPanel ? 'w-0 opacity-40' : 'w-7'} ml-auto transform h-0.5 rounded-sm bg-text-800 mb-1 transition-all duration-300`} />
                                        <div className={`${filterPanel ? 'w-0 opacity-40' : 'w-7'} transform h-0.5 rounded-sm bg-text-800 my-1 transition-all duration-300`} />
                                        <div className={`${filterPanel ? 'w-0 opacity-40' : 'w-7'} ml-auto transform h-0.5 rounded-sm bg-text-800 mt-1 transition-all duration-300`} />
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                    
                    {/* -------------------- lg -------------------- */}
                    <div className={`hidden lg:flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap items-center justify-between`}>
                        <ul className="hidden lg:flex items-center">
                            <li className="mr-10">
                                <p className="font-bold text-xl">Waringin</p>
                            </li>
                            <li className="hover:text-background-active transition-all duration-300" onClick={() => goToTop()}>
                                <NavLink exact activeClassName="text-text-active font-bold" to="/">Store</NavLink>
                            </li>
                        </ul>
                        <div className={`${position > 50 && location.pathname === '/' ? 'ml-0 opacity-100 pointer-events-auto': 'lg:-mt-10 lg:opacity-0 pointer-events-none'} w-full px-10 flex transition-all duration-300`}>
                            <div className={`${filterPanel ? '-ml-20 opacity-0' : 'ml-0 opacity-100'} mr-2 transition-all duration-300`}>
                                <Button 
                                    active={true} 
                                    onClick={() => dispatch(openFilter())}>
                                    filter</Button>
                            </div>
                            <div className="w-full">
                                <Input 
                                    placeholder="Search" 
                                    search={true} />
                            </div>
                        </div>
                        <ul className="flex items-center">
                            <li className="relative">
                                <div 
                                    onClick={() => {
                                        dispatch(openLiveChat())
                                        scrollOff()
                                    }}
                                    className="relative mr-6 text-xl hover:text-background-active cursor-pointer transition-all duration-300">
                                    <FontAwesomeIcon icon={faHeadset} />
                                </div>
                                {/* <LiveChat /> */}
                            </li>
                            <li 
                                onClick={() => goToTop()}
                                className="relative mr-6 text-xl hover:text-background-active cursor-pointer transition-all duration-300">
                                <NavLink to="/cart" activeClassName="font-bold text-text-active">
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                    <span className="absolute -bottom-1 -right-2 p-2 rounded-full bg-background-active text-xs"></span>
                                </NavLink>
                            </li>
                            <li 
                                onClick={() => goToTop()}
                                className="mr-6 text-xl hover:text-background-active cursor-pointer transition-all duration-300">
                                <NavLink to="/wishlist" activeClassName="font-bold text-text-active">
                                    <FontAwesomeIcon icon={faHeart} />
                                </NavLink>
                            </li>
                            <li className="relative">
                                <div
                                    onClick={() => setUserMenu(!userMenu)} 
                                    className="ring-2 ring-background-active w-10 h-10 rounded-full relative overflow-hidden">
                                    <Image 
                                        src="/profile.jpeg"
                                        alt="profile"
                                        layout="fill"
                                        objectFit='cover'
                                    />
                                </div>
                                <DropdownRight status={userMenu} setStatus={setUserMenu}>
                                    <p className="text-center">John Doe</p>
                                    <Gap height={20} />
                                    <ul>
                                        <li>
                                            <Button 
                                                onClick={() => {
                                                    history.push('/profile')
                                                    setUserMenu(false)
                                                }}>
                                                Profile
                                            </Button>
                                        </li>
                                        <li>
                                            <Button>Dashboard</Button>
                                        </li>
                                    </ul>
                                    <Gap height={20} />
                                    <div>
                                        <Link href="/auth" passHref>
                                            <Button active={true}>Login</Button>
                                        </Link>
                                    </div>
                                </DropdownRight>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>

            {/* Bottom  */}
            <nav className={`${isShow ? 'bottom-0 opacity-100 pointer-events-auto' : '-bottom-10 opacity-0 pointer-events-none'} lg:hidden fixed w-full bg-background-900 z-20 transition-all duration-300`}>
                <ul className="flex items-center">
                    <div 
                        className={`${location.pathname === '/' && 'bg-background-800'} flex-auto flex justify-center py-4 cursor-pointer hover:bg-background-800 transition-all duration-300`} 
                        onClick={() => {
                            goToTop()
                            history.push('/')
                        }}>
                        <li><FontAwesomeIcon icon={faStore} /></li>
                    </div>
                    <div 
                        className={`${location.pathname === '/cart' && 'bg-background-800'} flex-auto flex justify-center py-4 cursor-pointer hover:bg-background-800 transition-all duration-300`} 
                        onClick={() => {
                            goToTop()
                            history.push('/cart')
                        }}>
                        <li><FontAwesomeIcon icon={faShoppingBag} /></li>
                    </div>
                    <div 
                        className={`${location.pathname === '/wishlist' && 'bg-background-800'} flex-auto flex justify-center py-4 cursor-pointer hover:bg-background-800 transition-all duration-300`} 
                        onClick={() => {
                            goToTop()
                            history.push('/wishlist')
                        }}>
                        <li><FontAwesomeIcon icon={faHeart} /></li>
                    </div>
                    <div
                        className="flex-auto flex justify-center py-4 cursor-pointer hover:bg-background-800 transition-all duration-300"
                        onClick={() => {
                            dispatch(openLiveChat())
                            scrollOff()
                        }}>
                        <li className="">
                            <div 
                                className="relative hover:text-background-active cursor-pointer transition-all duration-300">
                                <FontAwesomeIcon icon={faHeadset} />
                            </div>
                        </li>
                    </div>
                    <div 
                        className={`${location.pathname === '/profile' && 'bg-background-800'} flex-auto flex justify-center py-3 cursor-pointer hover:bg-background-800 transition-all duration-300`} 
                        onClick={() => {
                            goToTop()
                            history.push('/profile')
                        }}>
                        <li>
                            <div
                                onClick={() => setUserMenu(!userMenu)} 
                                className="ring-2 ring-background-active w-8 h-8 rounded-full relative overflow-hidden">
                                <Image 
                                    src="/profile.jpeg"
                                    alt="profile"
                                    layout="fill"
                                    objectFit='cover'
                                />
                            </div>
                        </li>
                    </div>
                </ul>
            </nav>
            <LiveChat />
        </>
    )
}

export default Navbar