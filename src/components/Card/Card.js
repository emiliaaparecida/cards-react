import './Card.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';

function Card(props){
    const title = props.title;
    const text = props.text;
    const button = props.button;
    const image = props.image;
    
    return (
        <div className="card">
            <div className="card--header">
                <p></p>
                <FiHeart className="ico-heart"/>
            </div>
            <div className="card-content">
                <img src={image} className="card--image"></img>
                <h3 className="card--title">{title}</h3>
                <p className="card--text">{text}</p>
                <div className="card--cta">
                    <button className="card--button">{button}</button>
                    <FiShoppingCart className="card--cart"/>
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    // src: "",
    title: "Title",
    text: "Content",
    button: "Button"
}

export default Card