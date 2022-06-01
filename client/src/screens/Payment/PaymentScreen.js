import React from 'react'
import { ShowOrderScreen } from '../Order/OrderScreen'

export const PaymentScreen = () => {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className="col-md-6" id="payment">
                    <span className="fs-5">Payment Method</span>
                    <hr />
                    <form action="" className="needs-validation" novalidate>
                        <div className="d-flex flex-wrap justify-content-evenly">
                            <div className="form-check" id="cardBtn">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="card" checked />
                                <label className="form-check-label" for="">
                                    <img src="/images/visa.png" alt="" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                </label>
                            </div>
                            <div className="form-check" id="cardBtn">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="card" />
                                <label className="form-check-label" for="">
                                    <img src="/images/cbpay.png" alt="" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                </label>
                            </div>
                            <div className="form-check" id="cardBtn">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="card" />
                                <label className="form-check-label" for="">
                                    <img src="/images/kbz.png" alt="" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                </label>
                            </div>

                            {/* kpay */}
                            <div className="form-check" data-bs-toggle="modal" data-bs-target="#kpay" id="notCardBtn">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="notCard" />
                                <label className="form-check-label" for="">
                                    <img src="/images/kpay.png" alt="" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                </label>
                            </div>
                            {/* modal */}
                            <div className="modal fade" id="kpay" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Scan Here to Pay</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex justify-content-center">
                                            <img src="/images/kpayQR.jpeg" alt="" style={{ width: "300px", height: "300px", objectFit: "cover" }} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* wavepay */}
                            <div className="form-check" data-bs-toggle="modal" data-bs-target="#wavepay" id="notCardBtn">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="notCard" />
                                <label className="form-check-label" for="">
                                    <img src="/images/wavepay.jpg" alt="" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                </label>
                            </div>
                            {/* modal */}
                            <div className="modal fade" id="wavepay" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Scan Here to Pay</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex justify-content-center">
                                            <img src="/images/wavepayQR.jpeg" alt="" style={{ width: "300px", height: "300px", objectFit: "cover" }} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="cardInput">
                            <div className="form-group mb-3">
                                <label for="cardnum" className="form-label">CARD NUMBER</label>
                                <input type="text" name="cardnum" id="" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                                <div className="invalid-feedback">
                                    required
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="name" className="form-label">EXPIRATION DATE</label>
                                        <input type="date" name="expdate" id="" className="form-control" required />
                                        <div className="invalid-feedback">
                                            required
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="name" className="form-label">CVC CODE</label>
                                        <input type="text" name="code" id="" className="form-control" required />
                                        <div className="invalid-feedback">
                                            required
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3 d-none" id="notCardInput">
                            <label for="" className="form-label">PAYMENT SCREENSHOT</label>
                            <input type="file" name="paymentss" id="" className="form-control" required />
                            <div className="invalid-feedback">
                                required
                            </div>
                        </div>
                        <button className="btn btn-success">Order and Pay</button>
                    </form>
                </div>
                <ShowOrderScreen />
            </div>
        </div>
    )
}
