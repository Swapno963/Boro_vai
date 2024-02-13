import { useContext, useEffect } from "react";
import { useState } from "react";
import { CategoryContext, NewsDataContext } from "../context";
// import {  CategoryContext,NewsDataProvider } from "../context";

const useNewsQuery = () => {
  const {addData} = useContext(NewsDataContext)
  const [newsData] = useState([]); // for news data
  const [loading, setLoding] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const categoryContext = useContext(CategoryContext);
  const fetchNewsData = async (category) => {
    // console.log(category);
    try {
      setLoding({
        ...loading,
        state: true,
        message: "Feathing News Data",
      });
      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );
      if (!response.ok) {
        const errorMessage = `Fetching data failed : ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
    //   const updatedNews = [...newsData, data.articles];
      const updatedNews = [data.articles];
      // console.log('updated data ', updatedNews);
      // setNewsData(updatedNews);
      addData(updatedNews[0])
    } catch (err) {
      setError(err);
    } finally {
      setLoding({ ...loading, state: false, message: "" });
    }
  };

  useEffect(() => {
    fetchNewsData(categoryContext.category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryContext.category]);
  return {
    newsData,
    error,
    loading,
    
  };
};

export default useNewsQuery;
