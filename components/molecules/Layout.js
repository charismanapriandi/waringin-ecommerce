import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { Navbar, Filter } from "."
import { Footer, Gap } from ".."
import { closeFilter } from "../../store/actions/statusAction"
import { Button } from "../atoms"

const Layout = ({ children }) => {
    const filterPanel = useSelector(state => state.status.filter_panel)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/') {
            dispatch(closeFilter())
        }
    })

    return (
        <>
            <Navbar />
            {/* <Gap height={70}/> */}
            <div className="flex c-content overflow-hidden overflow-y-auto">
                <div className={`${filterPanel ? 'lg:ml-0' : 'lg:-ml-64 -left-full lg:left-0'} w-full lg:w-64 h-screen shadow p-4 fixed overflow-y-auto left-0 top-0 z-10 bg-background-900 transition-all duration-300`}>
                    <Gap height={60} />
                    <Filter>
                        {/* Control button */}
                        <div>
                            <Button 
                                onClick={() => {
                                    dispatch(closeFilter())}}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </div>
                    </Filter>
                </div>
                <div className={`${filterPanel ? 'lg:ml-64' : 'ml-0'}  w-full min-h-screen transition-all duration-300`}>
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