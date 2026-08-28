import "./index.css"

const CategoryItem = ({ category, activeCategory, setActiveCategory }) => {
    const onChangeActiveCategory = () => {
        setActiveCategory(category)
    }

    const dynamicClassName = category === activeCategory ? "active category-buton" : "category-button"

    return (<li className="category-item">
        <button
            type="button"
            onClick={onChangeActiveCategory}
            className={dynamicClassName}
        >
            {category}
        </button>
    </li>)
}

export default CategoryItem