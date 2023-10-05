import clientImage1 from "../assets/img/fa-brands-1.png"
import clientImage2 from "../assets/img/fa-brands-2.png"
import clientImage3 from "../assets/img/fa-brands-3.png"
import clientImage4 from "../assets/img/fa-brands-4.png"
import clientImage5 from "../assets/img/fa-brands-5.png"
import clientImage6 from "../assets/img/fa-brands-6.png"
const Client = () =>{
    const clientImages = [clientImage1, clientImage2, clientImage3, clientImage4, clientImage5, clientImage6]
    return(
        <section className="client">
            {clientImages.map((brand, i)=><img src={brand} alt="client-images" key={i}/>)}
        </section>
    )
}

export default Client