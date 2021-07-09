import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CheckBox } from '..'
import { Input, Gap, Button } from '..'

const Filter = ({ children }) => {
    const [isChecked, setIsChecked] = useState(false)
    const filterPanelOpen = useSelector(state => state.global.filterPanelOpen)

    const checkboxList = [
        {
            category: 'Android',
            id: 1,
        },
        {
            category: 'IOS',
            id: 2,
        },
        {
            category: 'Batre',
            id: 3,
        },
        {
            category: 'Charger',
            id: 4,
        }
    ]
    const handleCheckBoxChange = (e) => {
        console.log(e.target);
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-lg">filter</p>
                { children }
            </div>
            <p className="font-bold text-lg mt-10">kategori</p>
            <div className="mt-2 ml-2">
                { checkboxList.map(check => (
                    <CheckBox 
                        key={check.id}
                        checked={isChecked}
                        name={check.category}
                        onChange={(e) => handleCheckBoxChange(e)}>
                        {check.category}
                    </CheckBox>
                ))}
            </div>
            <p className="font-bold text-lg mt-10">rentang harga <span className="text-text-900 text-xs">dalam rupiah</span></p>
            <div className="mt-2 flex items-center">
                <Input placeholder="min" center={true} />
                <Gap width={10} />
                <Input placeholder="max" center={true}/>
            </div>
            <Gap height={10} />
            <Button 
                active={true}>
                terapkan
            </Button>
        </div>
    )
}

export default Filter