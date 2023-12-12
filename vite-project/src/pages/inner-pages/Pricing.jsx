import BottomHeader from "../../component/Header/BottomHeader"
import Footer from "../../component/footer/Footer"
import { ShowPricing } from "../../component/pricing-section/ShowPricing"

export const Pricing = () => {
  return (
    <>
        <BottomHeader 
            BgsmallColor={'bg-gray'}
            showLoginButton = {true}
            hideLink = {'hide-link'}
            showSamplePrice={true}
        />
        <ShowPricing />
        <Footer />
    </>
  )
}
