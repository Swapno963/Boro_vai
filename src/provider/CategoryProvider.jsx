/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { CategoryContext } from "../context";

const CategoryProvider = ({children}) =>{
    const [category, setCategory] = useState("");
    const addCategory = (catName) =>{
        setCategory(catName);
    }

    return(
        <CategoryContext.Provider value = {{category,addCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;