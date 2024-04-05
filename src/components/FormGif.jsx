import { useState } from "react"

export const FormGif = (props) => {

    const {addCategory} = props

 
    const [category, setCategory] = useState("")

    const handleInput = (event) =>{
        setCategory(event.target.value)
    }

    const handleSubmitGif = (event) =>{
        event.preventDefault() // EVITAR UN REDERIZADO DE LA APLICACION
        addCategory(category)
        setCategory("")
    }

    return (
        <form onSubmit={handleSubmitGif}>
            <input onChange={handleInput} type="text" placeholder="Buscador Gif....." value={category} />
            <button>Buscar</button>
        </form>
    )
}