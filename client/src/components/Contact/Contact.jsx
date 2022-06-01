import React from 'react'

export const Contact = () => {
    return (
        <div class="container mt-5">
            <h1 class="text-center text-danger">Contact Us</h1>
            <div class="text-center text-purple">Have any questions? We'd love to hear from you.</div>
            <div class="row mt-5">
                <div class="col-md-6 col-12">
                    <form action="" class="mb-3 needs-validation" novalidate>
                        <div class="form-group mb-3">
                            <input type="text" name="fname" id="" class="form-control" placeholder="First name အမည်ရှေ့စာလုံး(များ)" required />
                                <div class="invalid-feedback mb-3">
                                    required
                                </div>
                        </div>
                        <div class="form-group mb-3">
                            <input type="text" name="lname" id="" class="form-control" placeholder="Last name အမည်နောက်ဆုံးစာလုံး" required />
                                <div class="invalid-feedback mb-3">
                                    required
                                </div>
                        </div>
                        <div class="form-group mb-3">
                            <input type="email" name="email" id="" class="form-control" placeholder="Email" required />
                                <div class="invalid-feedback">
                                    required
                                </div>
                        </div>
                        <div class="form-group mb-3">
                            <input type="text" name="company" id="" class="form-control" placeholder="Company Name" required />
                                <div class="invalid-feedback">
                                    required
                                </div>
                        </div>
                        <div class="form-group mb-3">
                            <textarea name="desc" class="form-control" id="" cols="30" rows="10" placeholder="Suggestion" required></textarea>
                            <div class="invalid-feedback">
                                required
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success me-3">Send Message</button>
                    </form>
                </div>
                <div class="col-md-6 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488799.487456202!2d95.90137142883529!3d16.838952481756376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon!5e0!3m2!1sen!2smm!4v1650532598196!5m2!1sen!2smm" width="100%" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                            <h6>Two Logan Square</h6>
                            <h6>Suite #820</h6>
                            <h6>Philadelphia, PA 19103</h6>
                        </div>
                        <div>
                            <a href="#" class="text-purple">info@peoplemetrics.com</a>
                            <p class="text-purple">+959 758 764 462</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
