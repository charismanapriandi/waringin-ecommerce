import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { Navbar, Filter } from "."
import { Footer, Gap } from ".."
import { FILTER_PANEL } from "../../store/types"
import { Button } from "../atoms"

const Layout = ({ children }) => {
    const filterPanelOpen = useSelector(state => state.global.filterPanelOpen)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/') {
            dispatch({
                type: FILTER_PANEL,
                status: false,
            })
        }
    })

    return (
        <>
            <Navbar />
            {/* <Gap height={70}/> */}
            <div className="flex c-content overflow-hidden overflow-y-auto">
                <div className={`${filterPanelOpen ? 'ml-0' : '-ml-64'} w-64 h-screen shadow p-4 fixed overflow-y-auto left-0 top-0 z-10 bg-background-900 transition-all duration-300`}>
                    <Gap height={60} />
                    <Filter>
                        {/* Control button */}
                        <div>
                            <Button 
                                onClick={() => {
                                    dispatch({
                                        type: FILTER_PANEL, 
                                        status: filterPanelOpen === true && false || filterPanelOpen === false && true})
                                } }>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </div>
                    </Filter>
                </div>
                <div className={`${filterPanelOpen ? 'ml-64' : 'ml-0'}  w-full min-h-screen transition-all duration-300`}>
                    <div className="p-4 min-h-screen">
                        <Gap height={60} />
                        { children }
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout