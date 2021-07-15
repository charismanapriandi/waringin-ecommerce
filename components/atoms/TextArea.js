import { useEffect, useState } from "react"

const TextArea = ({ placeholder, id, onChange }) => {
    const [row, setRow] = useState(1)

    const autoGrow = (value) => {
        const br = value.split('\n').length

        if (br < 4) {
            setRow(br)
        }
    }

    return (
        <textarea 
            id={`textarea-${id}`}
            placeholder={placeholder}
            rows={row}
            onChange={(e) => {
                autoGrow(e.target.value)
                onChange
            }}
            className={`bg-background-800 rounded-xl py-2 px-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-background-active transition-all duration-300`}>

        </textarea>
    )
}

export default TextArea