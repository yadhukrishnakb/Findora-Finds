import { useState, useEffect } from "react"
import { ThreeDots } from "react-loader-spinner"
import Navbar from "../Navbar"
import ProductCard from "../ProductCard"
import CategoryItem from "../CategoryItem"

import "./index.css"

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    inProgress: "IN_PROGRESS",
    failure: "FAILURE"
}

const initialCategoriesList = [
    "ALL",
    "ELECTRONICS",
    "MOBILE_ACCESSORIES",
    "HOME_AND_KITCHEN",
    "BEAUTY_AND_PERSONAL_CARE",
    "HEALTH_AND_FITNESS",
    "AUTOMOTIVE",
    "SMART_HOME",
    "AUDIO"
];

const Products = () => {
    const [productsList, setProductsList] = useState([])
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [activeCategory, setActiveCategory] = useState(initialCategoriesList[0])
    const [searchInput, setSearchInput] = useState("")
    const [categories, setCategories] = useState(initialCategoriesList)

    const getProducts = async () => {
        setApiStatus(apiStatusConstants.inProgress)
        try {
            const apiUrl = import.meta.env.VITE_API_URL + "/products"

            const response = await fetch(apiUrl)
            const data = await response.json()

            if (response.ok) {
                const formattedData = data.products.map(each => ({
                    id: each._id,
                    title: each.title,
                    description: each.description,
                    imageUrl: each.image_url,
                    category: each.category,
                    productLink: each.product_link
                }))
                setApiStatus(apiStatusConstants.success)
                setProductsList(formattedData)
                setCategories(["ALL", ...data.categories])
                // console.log(data.categories)
            } else {
                setApiStatus(apiStatusConstants.failure)
                // console.log(data.message)
            }
        } catch (err) {
            setApiStatus(apiStatusConstants.failure)
            console.log(err)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const getFilteredList = () => {
        return activeCategory !== "ALL" ? productsList.filter(each => each.category === activeCategory && each.title.toLowerCase().includes(searchInput.toLowerCase())) :
            productsList.filter(each => each.title.toLowerCase().includes(searchInput.toLowerCase()))
    }

    const renderProducts = () => {
        const filteredList = getFilteredList()
        if (filteredList.length === 0) {
            return <div className="search-result-not-found">
                <img src="https://res.cloudinary.com/dvzcnvazm/image/upload/v1787908679/web_search_ndovi7.svg" className="no-result-image" alt="no-result" />
                <p>We couldn't find that one 🫠 Try another search.</p>
                <button type="button" onClick={() => setSearchInput("")}>
                    Clear Search
                </button>
            </div>
        }

        return (
            <div className="content-container">
                <ul className="category-list">
                    {categories.map(each => <CategoryItem category={each} activeCategory={activeCategory} setActiveCategory={setActiveCategory} key={each} />)}
                </ul>
                <ul className="products-list">
                    {filteredList.map(each => <ProductCard productDetails={each} key={each.id} />)}
                </ul>
            </div>
        )
    }

    const renderLoader = () => (
        <div className="loader-container">
            <ThreeDots
                height="50"
                width="50"
                color="#000000"
                ariaLabel="loading"
            />
        </div>
    )

    const renderFailure = () => (
        <div className="failure-container">
            <img src="https://res.cloudinary.com/dvzcnvazm/image/upload/v1787904531/No_data-pana_zmhcja.svg" className="failure-img" alt="no-data" />
            <p>Oops! Something went wrong 🫠 <br />
                We couldn't load the products right now. Please try again.</p>
            <button type="button" onClick={() => getProducts()}>Try Again</button>
        </div>
    )

    const renderContent = () => {
        switch (apiStatus) {
            case apiStatusConstants.success:
                return renderProducts()
            case apiStatusConstants.inProgress:
                return renderLoader()
            case apiStatusConstants.failure:
                return renderFailure()
            default:
                return null
        }
    }

    return (
        <div className="bg-container">
            <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
            {renderContent()}
        </div>
    )
}

export default Products