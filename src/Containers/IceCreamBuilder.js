import React, {Component} from "react";
import classes from "./IceCreamBuilder.module.css"
import IceCream from "../components/IceCream/IceCream";
import Builder from "../components/Builder/Builder";

class IceCreamBuilder extends Component {
    state = {
        items:{
            vanilla:45,
            chocolate:60,
            butterScotch:120,
            strawberry:50,
            mango:65
        },
        scoops:[],
        totalPrice:0,
    }
    addScoop = (scoop) =>{
        const {scoops, items} = this.state;
        const newScoops = [...scoops];
        newScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: newScoops,
                totalPrice: prevState.totalPrice + items[scoop]
            }
        })
    }
    removeScoop = (scoop) =>{
        const {scoops, items} = this.state;
        const newScoops = [...scoops];
        const scoopIndex = newScoops.findIndex((sc) => sc === scoop);
        newScoops.splice(scoopIndex, 1);
        this.setState((prevState) => {
            return {
                scoops: newScoops,
                totalPrice: prevState.totalPrice - items[scoop]
            }

        })
    }
    render() {
        const {items, totalPrice, scoops} = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoop={scoops}/>
                <Builder items={items} prices={totalPrice}
                         add={this.addScoop}
                         remove={this.removeScoop}
                         scoops={scoops} />
            </div>
        );
    }
}

export default IceCreamBuilder;