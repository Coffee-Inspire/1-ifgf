import React from 'react';
import './css/home.css';

const HomePage = () => {
    return (
        <div id="homepage" className="container-fluid">
            <div className="row d-block">
                <section className="content">
                    <div className="div-background" style={{ backgroundImage: `url("/home/bg-1.png")` }}>
                        <div className="shadow h-100 w-100 d-flex align-items-center position-relative">
                            <div className="position-absolute top-2 d-flex w-100 justify-content-center fs-2 text-uppercase align-items-center"><span className="fw-700 fs-4 pr-1">IFGF</span> Mataram</div>
                            <div className="white-shadow w-100 d-flex h-50 justify-content-center ">
                                <div className="d-flex align-items-center">
                                    <div className="px-3">
                                        <button className="p-2">Get Connected</button>
                                    </div>
                                    <div className="px-3">
                                        <button className="p-2">Watch Sermon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content ph-md-4 ph-2 text-center">
                    <div className="text-uppercase fs-3 fw-600">This is Our <span className="fw-700">Church</span></div>
                    <div className="pt-4 ph-md-3 fw-600">God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission, to show love and Compassion because he is a GOD of Convenant, who declare our purpose in creation. We are called to be a cutting edge church that follows God's progressive vision, made into champions by the promises of His Word.</div>
                </section>

                <section className="content">
                    <div className="div-background" style={{ backgroundImage: `url("/home/bg-2.png")` }}>
                        <div className="h-100 w-100 d-flex align-items-center position-relative">
                            <div className="position-absolute top-2 d-flex w-100 justify-content-center fs-5 fw-700 text-uppercase align-items-center">Location</div>

                            <div className="w-100 fs-2">
                                <div className="shadow py-5 w-100 d-flex justify-content-center">
                                    <div className="text-center">
                                        <div className="text-uppercase">IFGF Mataram</div>
                                        <div className="pt-3">Komp. Central Plaza, Jl. A. A Gede Ngurah, Abian Tubuh Baru, Kec. Cakranegara, Kota Mataram.</div>
                                        <div className="pt-2">Sunday 08.00 A.M</div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <div className="px-2">
                                        <button className="p-2">Contact Info</button>
                                    </div>
                                    <div className="px-2">
                                        <button className="p-2">Get Directions</button>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="position-absolute bottom-2 d-flex w-100 justify-content-center fs-2 fw-600 text-uppercase align-items-center">A Church for your family</div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="div-background" style={{ backgroundImage: `url("/home/bg-3.png")` }}>
                        <div className="h-100 w-100 d-flex align-items-center position-relative">
                            <div className="d-flex w-100 justify-content-center">
                                <div className="text-center">
                                    <div className="fs-5 fw-700 text-uppercase">Connect to Icare</div>
                                    <div className="pt-3">"ICare helps you to grow spiritually, and that requires more than meeting at Sunday services."</div>
                                    <div className="pt-5 d-flex justify-content-center w-100">
                                        <div>
                                            <button className="p-2">Search ICare</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="div-background" style={{ backgroundImage: `url("/home/bg-4.png")` }}>
                        <div className="h-100 w-100 d-flex align-items-center">
                            <div className="d-flex w-100 justify-content-center shadow py-5">
                                <div className="text-center">
                                    <div className="fs-5 fw-700 text-uppercase">IFGF Youth</div>
                                    <div className="pt-3">"IFGF Youth helps you to grow spiritually, and that requires more than meeting at Sunday services."</div>
                                    <div className="pt-4 d-flex justify-content-center w-100">
                                        <div>
                                            <button className="p-2">Search ICare</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="div-background" style={{ backgroundImage: `url("/home/bg-5.png")` }}>
                        <div className="h-100 w-100 d-flex align-items-center position-relative">
                            <div className="d-flex w-100 justify-content-center shadow py-5">
                                <div className="text-center">
                                    <div className="fs-5 fw-700 text-uppercase">IFGF kids</div>
                                    <div className="pt-3">"IKids helps you to grow spiritually, and that requires more than meeting at Sunday services."</div>
                                    <div className="pt-4 d-flex justify-content-center w-100">
                                        <div>
                                            <button className="p-2">Search ICare</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;