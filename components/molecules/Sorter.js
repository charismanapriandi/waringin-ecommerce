import { Button } from '..'

const Sorter = () => {
    return (
        <div className="flex items-center">
            <p className="mr-4">Urutkan</p>
            <div className="mr-4">
                <Button>terbaru</Button>
            </div>
            <div className="mr-4">
                <Button>populer</Button>
            </div>
            <div className="mr-4">
                <Button>termurah</Button>
            </div>
            <div className="mr-4">
                <Button>termahal</Button>
            </div>
        </div>
    )
}

export default Sorter