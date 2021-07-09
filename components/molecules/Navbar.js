import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { NavLink, useLocation } from 'react-router-dom'
import { Container, DropdownLeft } from '.'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import usePosition from '../../hook/usePosition'
import { Input, Button } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_PANEL } from '../../store/types'
import { useEffect, useState } from 'react'
import { Gap } from '../atoms'

const Navbar = () => {
    const [userMenu, setUserMenu] = useState(false) 
    const position = usePosition()
    const filterPanelOpen = useSelector(state => state.global.filterPanelOpen)
    const dispatch = useDispatch()

    return (
        <nav className="fixed top-0 shadow-md w-full py-3 bg-background-900 z-20 transition-all duration-300">
            <Container>
                <div className="flex items-center justify-between">
                    <ul className="flex items-center">
                        <li className="mr-10">
                            <p className="font-bold text-xl">WaringinAcc</p>
                        </li>
                        <li className="mr-4">
                            <NavLink exact activeClassName="text-text-active font-bold" to="/">etalase</NavLink>
                        </li>
                        <li className="mr-4">
                            <NavLink activeClassName="text-text-active font-bold" to="/about">kontak</NavLink>
                            
                        </li>
                    </ul>
                    <div className={`${position > 100 ? 'ml-0 opacity-100': '-mt-10 opacity-0'} w-full px-10 flex transition-all duration-300`}>
                        <div className={`${filterPanelOpen ? '-ml-20 opacity-0 pointer-events-none' : 'ml-0 opacity-100 pointer-events-auto'} mr-2 transition-all duration-300`}>
                            <Button active={true} onClick={() => {
                                dispatch({
                                    type: FILTER_PANEL,
                                    status: true
                                })
                            }}>filter</Button>
                        </div>
                        <div className="w-full">
                            <Input 
                                placeholder="Search" 
                                search={true} />
                        </div>
                    </div>
                    <ul className="flex items-center">
                        <li className="mr-6 text-xl">
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </li>
                        <li className="mr-6 text-xl">
                            <FontAwesomeIcon icon={faHeart} />
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
                            <DropdownLeft status={userMenu} setStatus={setUserMenu}>
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
                                    <Button active={true}>Login</Button>
                                </div>
                            </DropdownLeft>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar