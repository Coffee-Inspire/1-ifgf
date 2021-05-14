import React from 'react';
import './css/icare.css';

const IcarePage = () => {
    return (
        <div id="icarepage" className="container-fluid">
            <div className="row d-block">
                <section className="content">
                <div className="div-background" style={{ backgroundImage: `url("/home/bg-3.png")` }}>
                        <div className="h-100 w-100 d-flex align-items-center position-relative">
                            <div className="d-flex w-100 justify-content-center">
                                <div className="text-center">
                                    <div className="fs-5 fw-700 text-uppercase">Connect to Icare</div>
                                    <div className="pt-3">"ICare helps you to grow spiritually, and that requires more than meeting at Sunday services."</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="d-flex justify-content-center w-100 ph-md-5 ph-3 text-center">
                        <div className="fw-600">God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission, to show love and Compassion because he is a GOD of Convenant, who declare our purpose in creation. We are called to be a cutting edge church that follows God's progressive vision, made into champions by the promises of His Word.</div>
                    </div>
                </section>

                <section className="content">
                    <div className="px-3">
                        <div className="d-flex w-100 justify-content-center div-shadow py-4">
                            <div className="col-md-3 col-4 items px-3">
                                <div className="div-background w-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("/icare/bg-1.png")` }}>
                                    <div className="text-uppercase text-center">Icare for Youth</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-4 items px-3">
                                <div className="div-background w-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("/icare/bg-2.png")` }}>
                                    <div className="text-uppercase text-center">Icare for men</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-4 items px-3">
                                <div className="div-background w-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("/icare/bg-3.png")` }}>
                                    <div className="text-uppercase text-center">Icare for women</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="d-flex justify-content-center w-100 ph-md-5 ph-3 text-center">
                        <div className="fw-600">God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission, to show love and Compassion because he is a GOD of Convenant, who declare our purpose in creation. We are called to be a cutting edge church that follows God's progressive vision, made into champions by the promises of His Word.</div>
                    </div>
                </section>

                <section className="content">
                    <div className="ph-md-5 ph-2 d-md-flex w-100 justify-content-center">
                        <div className="col-md-5 col-12 px-4 d-md-block d-flex justify-content-center">
                            <img className="col-8" src={"/icare/leader.png"} />
                        </div>
                        <div className="col-md-5 col-12 px-4 text-md-left text-center">
                            <div className="pt-3 fs-1 fw-500">Leader</div>
                            <div className="pt-3 fs-1 fw-500">Name Of Leader</div>
                            <div className="py-4 w-100">
                                <div className="separator"></div>
                            </div>
                            <div className="fs-1 fw-500">Mobile Phone</div>
                            <div className="pt-3 fs-1 fw-500">092739161823</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default IcarePage;