import React from "react";
import classes from "./Modal.module.css";

const Modal = ({onClose}) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={onClose}></div>
            <div className={classes.modalBody}>
                <div className={classes.formContainer}>
                    <h1>Complete the form below and hit submit</h1>
                    <form className={classes.orderForm}>
                        <ul>
                            <li>
                                <input type="text"
                                       name="Name"
                                       className={[classes.fieldStyle, classes.fieldSplit, classes.alignLeft].join(' ')}
                                       placeholder="Enter Your Name"/>
                                <input
                                    type="text"
                                    name="Phone"
                                    className={[classes.fieldStyle, classes.fieldSplit, classes.alignRight].join(' ')}
                                    placeholder="Enter Your Phone Number"
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    name="Email"
                                    className={[classes.fieldStyle, classes.fieldFull].join(' ')}
                                    placeholder="Enter Your Email"
                                />
                            </li>
                            <li>
                        <textarea
                            name="Address"
                            className={classes.fieldStyle}
                            placeholder="Enter Your Address"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Place Order"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Modal;