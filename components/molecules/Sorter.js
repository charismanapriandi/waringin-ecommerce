import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Radio } from '..'
import { Button } from '../atoms'

const Sorter = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const productList = useSelector(state => state.memory.product_list)
    
    const sorter = [
        {
            label: 'latest',
            name: 'sorter',
            display: 'terbaru'
        },
        {
            label: 'popular',
            name: 'sorter',
            display: 'populer'
        },
        {
            label: 'cheapest',
            name: 'sorter',
            display: 'termurah'
        },
        {
            label: 'most-expensive',
            name: 'sorter',
            display: 'termahal'
        }
    ]

    const onSort = (e) => {
        setSelectedOption(e.target.value)
    }
    
    return (
        <div className="flex items-center">
            <p className="mr-4">Urutkan</p>
            <div 
                className="flex items-center"
                onChange={(e)=> onSort(e)}>
                {sorter.map(sorter => (
                    <div className="mr-4">
                        <Radio
                            active={selectedOption === sorter.label}
                            label={sorter.label}
                            value={sorter.label}
                            name={sorter.name}
                            checked={selectedOption === sorter.label}>
                            {sorter.display}
                        </Radio>
                    </div>
                ))}
                <div className={`${selectedOption ? 'opacity-100 ml-0 pointer-events-auto' : 'opacity-0 ml-10 pointer-events-none'} transition-all duration-300`}>
                    <Button 
                        danger={true} 
                        onClick={() => setSelectedOption(null)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Sorter