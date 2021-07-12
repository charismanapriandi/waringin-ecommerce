import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CheckBox } from '..'
import { Input, Gap, Button } from '..'

const Filter = ({ children }) => {
    const categoryList = useSelector(state => state.memory.category_list)
    const [checked, setChecked] = useState([])

    const handleCheckbox = (value) => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]
        
        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }
  
    // useEffect(()=> {
    //     console.log(checked)
    // }, [checked])

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-lg">filter</p>
                { children }
            </div>
            <p className="font-bold text-lg mt-10">kategori</p>
            <div className="mt-2 ml-2">
                { categoryList?.map(item => {
                    return (
                        <CheckBox 
                            // active={checked}
                            key={item.id}
                            label={item.name}
                            name={item.name}
                            onChange={(e) => {
                                handleCheckbox(item.name)
                            }}>
                            {item.name}
                        </CheckBox>
                    )
                })}
            </div>
            <p className="font-bold text-lg mt-10">rentang harga <span className="text-text-900 text-xs">dalam rupiah</span></p>
            <div className="mt-2 flex items-center w-full justify-center">
                <Input placeholder="min" center={true} />
                <Gap width={10} />
                <Input placeholder="max" center={true}/>
            </div>
            <Gap height={10} />
            <div className="flex justify-center lg:w-full">
                <div className="w-64 lg:w-full">
                    <Button 
                        active={true}>
                        terapkan
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Filter