import React from "react";
import classes from "./Builder.module.css"
import Items from "./Items/Items";
import TotalPrice from "./Price/TotalPrice";
import Modal from "../Modal/Modal";


const Builder = ({items, prices, add, remove, scoops, openModal, closeModal, modal}) => {
    return (
        <div>
            <div className={classes.builder}>
                <h3>Build your own Ice Cream Sundae</h3>
                <Items item={items} add={add} remove={remove} scoops={scoops}/>
                <TotalPrice price={prices} />

            <button type="button" onClick={openModal} className={[classes.order, 'rounded'].join(' ')}>
                Add to Cart
            </button>
            </div>
            {modal && (
                <Modal onClose={closeModal}></Modal>
            )}
        </div>
    );
}
export default Builder;