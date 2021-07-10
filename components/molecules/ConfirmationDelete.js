import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Gap } from "../atoms"

const ConfirmationDelete = () => {
    const [confirm, setConfirm] = useState(false)

    return (
        <>
            <div className={`${confirm ? 'hidden' : 'ml-10'}`}>
                <Button danger={true} onClick={() => {
                    setConfirm(true)
                    setTimeout(() => {
                        setConfirm(false)
                    }, 5000)}}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
            <div className={`${confirm ? 'flex' : 'hidden'}`}>
                <Button onClick={() => setConfirm(false)}>
                    Batal
                </Button>
                <Gap width={10} />
                <Button danger={true}>
                    Yakin
                </Button>
            </div>
        </>
    )
}

export default ConfirmationDelete