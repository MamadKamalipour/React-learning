import React from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
const Card = (props) => {
  return (
        <div className="Card">
            <div className="Card__Wrapper">
                <img src={props.image} alt={props.alt}/> 
                <div className="Card__Wrapper__Body" >
                <div className="Card__Wrapper__Body__Header">
                <h2 className="Card__Wrapper__Body__Header__Title" >{props.title}</h2>
                <div className="Card__Wrapper__Body__Header__Tags">
                <ul>
                    {props.tags.map(tag =>{
                        return(
                            <li key={v4()} className="tag">
                                <Link to="/news">{tag}</Link>
                            </li>
                        )
                    })}
                </ul>
                </div>
                </div>
                <p className="Card__Wrapper__Body__Desc">{props.desc}</p>
                <Link className="postlink" to={`/news/${props.Btnlink}`}>Read More</Link>
                </div>
                    
            </div>


        </div>
    );
};

export default Card;