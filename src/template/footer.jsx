import React from 'react';
import './css/footer.css';

const FooterTemplate = () => {
    return (
        <footer className="container-fluid">
            <div className="row d-block">
                <section className="d-md-flex d-block bg-black text-white px-md-5 px-3 py-4">
                    <div className="col-md-4 col-12">
                        <div className="title-footer">About</div>
                        <div>Our Church</div>
                        <div>Pastor</div>
                    </div>
                    
                    <div className="col-md-4 col-12">
                        <div className="title-footer">Connect</div>
                        <div>IFGF Youth</div>
                        <div>IFGF Kids</div>
                        <div>ICARE</div>
                    </div>
                    
                    <div className="col-md-4 col-12">
                        <div className="title-footer">Contact Us</div>
                        <div><a href="tel:+6221-2321-2341">021-2321-2341</a></div>
                        <div><a href="mailto:test@gmail.com" target="_blank">test@gmail.com</a></div>
                        <div>Jalan Anggrek 3 E/482.BTN Sweta Mataram</div>
                    </div>
                </section>  

                <section className="section-copyright">
                    <div className="py-1 text-center">&copy;2021 by IFGF Mataram</div>
                </section>
            </div>
            
        </footer>
    );
};

export default FooterTemplate;