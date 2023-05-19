import food from "../utils/Images/food.jpg"
import '../components/menu.css'
const Card = ()=>{
    return (
        <>
        <div className="card-container">
            <div className="card-img"><img src={food}/></div>
            <div className="card-name-add-remove">
                <div className="card-inner">
                <h2>Biryani</h2>
                <div className="card-add-remove">
                <span className="plus">+</span>
               <input type="text" value="1" className="card-input" />
                <span className="minus">-</span>
                </div>
                </div>
                
            </div>
            <div className="card-total">
                <h2>&#8377;16</h2>
            </div>
        </div>
        </>
    )
}
export default Card