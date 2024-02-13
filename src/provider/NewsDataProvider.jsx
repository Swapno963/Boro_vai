/* eslint-disable react/prop-types */
import {useState } from "react"
import { NewsDataContext } from "../context"

const NewsDataProvider = ({children}) =>{

    const [nData, setNData] = useState([])

    const addData = (data) =>{
        setNData(data);
    }
    return (
        <NewsDataContext.Provider value={{addData,nData}}>
            {children}
        </NewsDataContext.Provider>      
    )

}
export default NewsDataProvider