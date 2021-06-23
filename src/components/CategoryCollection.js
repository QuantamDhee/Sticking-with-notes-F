import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryCollection = (props) =>{

    // return(
    //     <div>
    //         aha ha category#index
    //     </div>
    // )
    const renderCategory = () => {
        return props.category.map(cat => <CategoryCard cat={cat} key={cat.id}/>)
    }
    return (
        <div id ="category-collection">
            {renderCategory()}
        </div>
    )
}

export default CategoryCollection