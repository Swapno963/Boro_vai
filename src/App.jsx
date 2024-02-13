import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsBoard from "./components/NewsBoard";
import CategoryProvider from "./provider/CategoryProvider";
import NewsDataProvider from "./provider/NewsDataProvider";

export default function App() {
  return (
    <>
      <NewsDataProvider>
        <CategoryProvider>
          <Navbar/>
          <NewsBoard/>
        </CategoryProvider>
      </NewsDataProvider>
      <Footer/>
    </>
  )
}