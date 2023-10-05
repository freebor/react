import Header from "./component/Header/Header";
import Client from "./component/Client"
import TopProduct from "./component/top-product/TopProduct"
import BestSelling from "./component/Best-selling/BestSelling"
import Feature from "./component/featured-product/Feature"
import BestService from "./component/Best-services/BestServices"
import PracticeAdvice from "./component/Practice-advice/PracticeAdvice"

function App() {
  return (
    <>
      <Header />
      <Client />
      <TopProduct />
      <BestSelling />
      <Feature />
      <BestService />
      <PracticeAdvice />
    </>
  )
}

export default App
