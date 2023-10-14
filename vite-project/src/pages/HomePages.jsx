import Header from "../component/Header/Header";
import Client from "../component/Client"
import TopProduct from "../component/top-product/TopProduct"
import BestSelling from "../component/Best-selling/BestSelling"
import Feature from "../component/featured-product/Feature"
import BestService from "../component/Best-services/BestServices"
import PracticeAdvice from "../component/Practice-advice/PracticeAdvice"
import Footer from "../component/footer/Footer";

const HomePage =()=>{
    return(
        <>
            <Header />
            <Client />
            <TopProduct />
            <BestSelling />
            <Feature />
            <BestService />
            <PracticeAdvice />
            <Footer />
        </>
    )
}
export default HomePage