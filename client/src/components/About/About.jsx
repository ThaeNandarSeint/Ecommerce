import React from 'react'

export const About = () => {
    return (
        <div class="container mt-5">
            <h1 class="text-center text-danger">About Us</h1>
            <div class="d-flex justify-content-center align-items-center">
                <div class="">
                    <img src="assets/images/about.jpg" alt="" style={{width: "90%", height: "100%", objectFit: "cover"}} />
                </div>
                <div class="" style={{width: "70%"}}>
                    <h2 class="text-purple">Our Vision</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo totam dolor accusantium voluptatibus reiciendis possimus at unde. Quidem fugit odio eveniet nobis aliquid quisquam? Provident quia officia cum? Eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quae blanditiis magnam neque, soluta dolore maxime culpa. Fuga fugit nam exercitationem, culpa qui accusamus dolorum. Beatae repellendus saepe vero impedit.</p>
                    <a href="/contact" class="btn btn-success">Contact Us</a>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <div class="" style={{width: "50%"}}>
                    <h2 class="text-purple">Our Approch</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo totam dolor accusantium voluptatibus reiciendis possimus at unde. Quidem fugit odio eveniet nobis aliquid quisquam? Provident quia officia cum? Eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quae blanditiis magnam neque, soluta dolore maxime culpa. Fuga fugit nam exercitationem, culpa qui accusamus dolorum. Beatae repellendus saepe vero impedit.</p>
                    <div class="border d-flex justify-content-evenly align-items-center">
                        <i class="fa-solid fa-users fs-1"></i>
                        <div>
                            <small>Total Guests</small>
                            <h3 class="text-danger">200,000,000+</h3>
                        </div>
                    </div>
                </div>
                <div class="">
                    <img src="assets/images/approch.jpg" alt="" style={{width: "90%", height: "100%", objectFit: "cover"}} />
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <div class="">
                    <img src="assets/images/process.png" alt="" style={{width: "90%", height: "100%", objectFit: "cover"}} />
                </div>
                <div class="" style={{width: "50%"}}>
                    <h2 class="text-purple">Our Process</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo totam dolor accusantium voluptatibus reiciendis possimus at unde. Quidem fugit odio eveniet nobis aliquid quisquam? Provident quia officia cum? Eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quae blanditiis magnam neque, soluta dolore maxime culpa. Fuga fugit nam exercitationem, culpa qui accusamus dolorum. Beatae repellendus saepe vero impedit.</p>
                    <div class="border d-flex justify-content-evenly align-items-center">
                        <i class="fa-solid fa-gifts fs-1"></i>
                        <div>
                            <small>Monthly Orders</small>
                            <h3 class="text-danger">100,000+</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
