import React from 'react';
import Modal from 'react-modal';

const OpenModal = (props) => (
    <Modal
    isOpen = {props.isModalOpen}
    onRequestClose = {props.clearCart}
contentLabel = "Final Bill"
closeTimeoutMS={200}
className="modal">
<h3 className="modal__title">Final Bill Amount</h3>
{
    props.billamt && <p className="modal__body">{props.billamt}</p>
}
<button className="divbutton" onClick={props.clearCart}>Close</button>
</Modal>
)

export default OpenModal;