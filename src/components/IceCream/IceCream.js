import React from 'react';
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop";


const IceCream = ({scoop}) => {
    //const flavours = Object.keys(items);
    return (
                <div>
                    <div className={classes.icecream}>
                        <p className={classes.cone}></p>
                        {scoop.map(flavour =>(
                            <Scoop key = {`${flavour}${Math.random()}`} scoop = {flavour} />
                        ))}
                        <div className={classes.cherry}></div>
                    </div>
                </div>
    );
}
export default IceCream;