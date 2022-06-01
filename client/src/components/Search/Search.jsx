import React from 'react'

export const Search = () => {
    return (
        <div className="container d-flex justify-content-evenly text-danger mt-2" style={{ position: "absolute", top: "0%", left: "10%" }}>
            <div style={{ width: "30%" }}>
                <i className="fa-solid fa-bars me-3"></i>
                <span className="">SHOP BY CATEGORIES</span>
            </div>
            <div style={{ width: "30%" }}>
                <div className="mb-1">CALL CUSTOMER SERVICES</div>
                <i className="fa-solid fa-phone me-2 fs-5"></i>
                <span className="">+959 758 764 462</span>
            </div>

            <form className="d-flex" style={{ width: "30%", height: "40px" }}>
                <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                <span className="btn btn-success rounded-circle" style={{ transform: "translate(-125%, 1%)" }}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            </form>
        </div>
    )
}
