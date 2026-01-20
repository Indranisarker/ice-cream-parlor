import React from "react";
import Item from "./Item/Item";

const Items = ({item, add, remove, scoops}) => {
    const iceCreamFlavors = Object.keys(item);
    return (
        <div>
            <ul>
                {iceCreamFlavors.map(flavor => (
                    <Item key = {flavor} name={flavor} add={add} remove={remove} scoops={scoops}/>
                ))}
            </ul>
        </div>
    );
}
export default Items;

