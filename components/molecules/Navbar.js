import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { NavLink, useLocation } from 'react-router-dom'
import { Container } from '.'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import usePosition from '../../hook/usePosition'
import { Input, Button } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Gap } from '../atoms'
import DropdownRight from './DropdownRight'
import { openFilter } from '../../store/actions/statusAction'
import Link from 'next/link'

const Navbar = () => {
    const [userMenu, setUserMenu] = useState(false) 
    const position = usePosition()
    const filterPanel = useSelector(state => state.status.filter_panel)
    const dispatch = useDispatch()
    const location = useLocation()

    return (
        <nav className="fixed top-0 shadow-md w-full py-3 bg-background-900 z-20 transition-all duration-300">
            <Container>
                <div className="flex items-center justify-between">
                    <ul className="flex items-center">
                        <li className="mr-10">
                            <p className="font-bold text-xl">WaringinAcc</p>
                        </li>
                        <li className="hover:text-background-active transition-all duration-300">
                            <NavLink exact activeClassName="text-text-active font-bold" to="/">etalase</NavLink>
                        </li>
                        {/* <li className="mr-4 hover:text-background-active transition-all duration-300">
                            <NavLink activeClassName="text-text-active font-bold" to="/about">kontak</NavLink>
                        </li> */}
                    </ul>
                    <div className={`${position > 100 && location.pathname === '/' ? 'ml-0 opacity-100': '-mt-10 opacity-0'} w-full px-10 flex transition-all duration-300`}>
                        <div className={`${filterPanel ? '-ml-20 opacity-0 pointer-events-none' : 'ml-0 opacity-100 pointer-events-auto'} mr-2 transition-all duration-300`}>
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
                        <li className="relative mr-6 text-xl hover:text-background-active cursor-pointer transition-all duration-300">
                            <NavLink to="/cart" activeClassName="font-bold text-text-active">
                                <FontAwesomeIcon icon={faShoppingBag} />
                                <span className="absolute -bottom-1 -right-2 p-2 rounded-full bg-background-active text-xs"></span>
                            </NavLink>
                        </li>
                        <li className="mr-6 text-xl hover:text-background-active cursor-pointer transition-all duration-300">
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
                                        <Button>Profile</Button>
                                    </li>
                                    <li>
                                        <Button>Dashboard</Button>
                                    </li>
                                </ul>
                                <Gap height={20} />
                                <div>
                                    <Link href="/auth">
                                        <Button active={true}>Login</Button>
                                    </Link>
                                </div>
                            </DropdownRight>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar