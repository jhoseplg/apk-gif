import { useEffect, useState } from "react"
import { getCategoryGif } from "../actions/api.gif"

export const CardGif = (props) => {

    const {category} = props

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getCategoryGif(category).then(res => setGifs(res.data))
    }, [])

    console.log("gifs", gifs)

    return (
        <div>
            <h2>Gif</h2>
            {
                gifs.map((gif)=>(
                    <img src={gif.images.downsized_medium.url} />
                ))
            }
        </div>
    )
}