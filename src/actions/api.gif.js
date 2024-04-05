export const getCategoryGif = async(category) =>{
    //5MLDoY9E5LGoKCRXS0wCWa6ZG4ZIrI6z
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5MLDoY9E5LGoKCRXS0wCWa6ZG4ZIrI6z&q=${category}&limit=10`)
    const data = await response.json()
    return data
}