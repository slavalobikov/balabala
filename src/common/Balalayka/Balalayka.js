import React from 'react'
import s from './Balalayka.module.css'
import {Link} from "react-router-dom";

const Balalayka = ({name, img, description, id}) => {
    return (
        <div className={s.balalayka}>
            <img src={img} alt=""/>
            {name}
            <div>
                {description}
            </div>
            <button>Купить</button>
            <Link to={`/hello/${id}`}>
                <button>Подробнее</button>
            </Link>

        </div>
    )
};

export default Balalayka;