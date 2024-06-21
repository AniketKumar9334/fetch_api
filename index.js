
// base url
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php'

// intislize button
const getCategories = document.getElementById('get-category-data')
const getIngredient = document.getElementById('get-ingredient-data')


// getCategoriesdata to button click
getCategories.addEventListener('click', ()=>{
    getCategoriesData()
})
// getIngredient data to button click
getIngredient.addEventListener('click', ()=>{
    getIngredientData()
})

// getCategories data 
const getCategoriesData = async () =>{
    try {
        // api calling
        const response = await fetch(`${BASE_URL}?c=Seafood`)
        const data = await response.json()
        console.log(data.meals)
    } catch (error) {
        // error handling
        console.log("something went wrong.", error)
    }
}
// getCategories data 
const getIngredientData = async () =>{
    try {
        // api calling
        const response = await fetch(`${BASE_URL}?i=chicken_breast`)
        const data = await response.json()
        console.log(data.meals)
    } catch (error) {
        // error handling
        console.log("something went wrong.", error)
    }
}