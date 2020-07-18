import React from 'react'
import s from './Main.module.css'
import mockBalalay from "../../API/mockBalalay";
import Balalayka from "../../common/Balalayka/Balalayka";

const Main = () => {

    const balalayElements = mockBalalay.map(b => <Balalayka name={b.name} img={b.image}
                                                            description={b.description}
    id={b.id}/>)

    return <div>
        <div></div>
        <div className={s.grid}>
            {balalayElements}
        </div>
    </div>
};

export default Main;