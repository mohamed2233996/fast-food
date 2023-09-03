import React from 'react';
import Modal from 'react-modal';
import './popupProdect.css'
import { useState } from 'react';
import { BsFillCursorFill } from "react-icons/bs";

const PopupProdect = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <button className='btn-m fs-5 border-m toPay' onClick={openModal}>
                Order Now
            </button>
            <Modal
                className="myContentClass" overlayClassName="myOverlayClass"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}>
                <div className="closeicon">
                    <button type="button" onClick={closeModal}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="main-model">
                    <h2 className='modal-title modal-hading' >Make Your Order Now!</h2>
                    <div className="marin-20tb">
                        <form className='text-center' name="sentMessage" id="contactForm" action="#" method="post">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <input className='input-m' name="senderName" id="senderName" placeholder="Your Name" required type="text" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <input className='input-m' name="senderEmail" id="senderEmail" placeholder="Email Address" required type="email" />
                                </div>
                            </div>
                            <input className='input-m' name="address" id="address" placeholder="Address" required type="text" />
                            <input className='input-m' placeholder="Zip Code" required type="number" />
                            <input className='input-m' placeholder="Mobile No." required type="number" />
                            <select className='input-m' name="name" id="select" required="required">
                                <option value> Rainbow Vegetable Sandwich - $10.50 </option>
                                <option value={1}> Vegetarian Burger - $9.20 </option>
                                <option value={2}> Raspberry Stuffed French Toast - $12.50 </option>
                            </select>
                            <button type="submit" className="btn-m text-center">Send Message<BsFillCursorFill /></button>
                        </form>
                    </div>
                    <div id="sendingMessage" className="statusMessage">
                        <p><i className="fa fa-spin fa-cog" /> Sending your message. Please wait...</p>
                    </div>
                    <div id="successMessage" className="successmessage">
                        <p><span className="success-ico" /> Thanks for sending your message! We'll get back to you shortly.</p>
                    </div>
                    <div id="failureMessage" className="errormessage">
                        <p><span className="error-ico" /> There was a problem sending your message. Please try again.</p>
                    </div>
                    <div id="incompleteMessage" className="statusMessage">
                        <p><i className="fa fa-warning" /> Please complete all the fields in the form before sending.</p>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default PopupProdect;




