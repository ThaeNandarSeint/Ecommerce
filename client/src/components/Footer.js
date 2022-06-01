import React from 'react'

export const Footer = () => {
    return (
        <div className="py-3 px-5 footer">
            <h3 className="text-center mb-4 text-purple">Subscribe to our newsletter and <span className="text-danger">Get 10% off</span></h3>
            <form className="d-flex" style={{width: "50%", marginLeft: "33%"}}>
                <input className="form-control me-2 rounded-pill" type="search" placeholder="Your E-mail" aria-label="Search" />
                    <div className="invalid-feedback mb-3">
                        required
                    </div>
                    <button className="btn btn-success rounded-pill" type="submit" style={{transform: "translate(-105%, 1%)", width: "220px"}}>Subscribe Now!</button>
            </form>
            <div className="d-flex justify-content-evenly mt-4">
                <a href="#" className="text-decoration-none text-danger">About</a>
                <a href="#" className="text-decoration-none text-danger">Need Help?</a>
                <a href="#" className="text-decoration-none text-danger">Content Guide</a>
                <a href="#" className="text-decoration-none text-danger">Advertising</a>
            </div>
            <hr />
                <div className="d-flex justify-content-between">
                    <p><i className="fa-solid fa-copyright me-2"></i>All right reserved 2022</p>
                    <div className="">
                        <a href="#" className="fa-brands fa-facebook fs-4 me-2 text-primary text-decoration-none"></a>
                        <a href="#" className="fa-brands fa-instagram fs-4 me-2 text-danger text-decoration-none"></a>
                        <a href="#" className="fa-brands fa-twitter fs-4 me-2 text-primary text-decoration-none"></a>
                        <a href="#" className="fa-brands fa-youtube fs-4 me-2 text-danger text-decoration-none"></a>
                    </div>
                </div>
        </div>
    )
}
