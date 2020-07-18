import React from 'react'
import Balalayka from "../../common/Balalayka/Balalayka";
import mockBalalay from "../../API/mockBalalay";
import AboutBalalayka from "../../common/AboutBalalayka/AboutBalalayka";


const Balalay = (props) => {

    const d = props.match.params.slug;
    const AboutBalalaykaElement = mockBalalay.map(b => <AboutBalalayka name={b.name} img={b.image}
                                                            height={b.height}
                                                            id={b.id}/>);

    return (
        <div>
            <div>
                {AboutBalalaykaElement[d-1]} {/* так как ид начинается с 1, поэтому d-1*/}
            </div>
            <div>
                BOKOVOE MENU
            </div>
        </div>

    )
};

export default Balalay;