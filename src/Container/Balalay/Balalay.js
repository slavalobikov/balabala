import React from 'react'
import Balalayka from "../../common/Balalayka/Balalayka";
import mockBalalay from "../../API/mockBalalay";
import AboutBalalayka from "../../common/AboutBalalayka/AboutBalalayka";


const Balalay = (props) => {

    const d = props.match.params.slug;
    const AboutBalalaykaElement = mockBalalay.map(b => <AboutBalalayka name={b.name} img={b.image}
                                                            height={b.height}  description={b.description}
                                                            id={b.id} price={b.price}/>);

    return (
        <div>
            <div>
                {AboutBalalaykaElement[d-1]} {/* так как ид начинается с 1, поэтому d-1*/}
            </div>
        </div>

    )
};

export default Balalay;