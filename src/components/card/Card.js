import { languages } from "../../helpers/data";
import Item from "../item/Item";
import "./Card.css";
import Header from '../header/Header'

const Card = () => {
    return(
        
        <div className="cards-area-container" >
            <div className="header">
                <h3>LANGUAGES</h3>
            </div>
            <div className="card__item">
                {
                    languages.map((item,index)=> {
                        return(
                            <Item card={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Card;