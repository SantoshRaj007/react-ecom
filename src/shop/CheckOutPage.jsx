import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    //handle Tab change

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2' onClick={handleShow}>Process to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
            <div className='modal-dialog'>
                <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className='tabs mt-3'>
                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} href='#visa'
                                        id='visa-tab'
                                        data-toggle = "tab"
                                        role='tab'
                                        aria-controls='visa'
                                        aria-selected={activeTab === "visa"}
                                        onClick={() => handleTabChange("visa")}
                                    >
                                        <img src='https://i.imgur.com/sB4jftM.png' alt='payment method' width="80"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Modal>
        </div>
    )
}

export default CheckOutPage
