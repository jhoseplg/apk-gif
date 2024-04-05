import { useState } from "react"
import { CardGif, FormGif } from "./components"

export const AppAplicationGif = () => {

    const [categories, setCategories] = useState(["Goku"])

    const addCategory = (category) =>{
        setCategories([category, ...categories])
    }

    return (
        <div>
            <h1>Aplicativo Gif Certus :D</h1>
            <FormGif addCategory={addCategory} />
            {categories.map((category) => (
                <div key={category}>{category}</div>
            ))}

            {
                categories.map((category)=>(
                    <CardGif key={category} category={category} />
                ))
            }

           
        </div>
    )
}