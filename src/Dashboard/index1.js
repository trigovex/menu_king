import Banner1 from "./components/Banner1";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import PricingContainer from "./components/pricing-component-container";
import ServiceStats from "./components/ServiceStats";
import Timeline from "./components/Timeline";



export function MainPage2(){
    return(
        <>
            <NavigationBar/>
    <div className="content">
        <Banner1/>
        </div>
        <Timeline/>
        <PricingContainer/>
        <ServiceStats/>
        <Footer/>
        </>
    )
}