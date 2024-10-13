import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css'; // Assuming you create a separate CSS file for styling
import timeline from '../images/timeline1.png';

function Timeline(){
    return (
        <div className="container my-5">
            {/* Title Section */}
            <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '50px', color:'#ae87e1' }}>
            Revolutionize Your Dining Experience
            </h1>

            <div className="row">
                {/* Timeline Section */}
                <div className="col-md-7 text-center">
                    <img src={timeline} alt="ONDC Image" className="img-fluid"/>
                </div>
                <div className="col-md-5">
                    <div className="timeline">
                        {/* Step 1: Scan the QR Code */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Step 1: Scan the QR Code</h5>
                            <p>
                                <img src="https://www.citypng.com/public/uploads/preview/check-mark-correct-true-purple-sign-tick-icon-png-701751694964928dsg3amqxqr.png" alt="Check" className="check-icon" />
                                Instantly access the restaurant's digital menu by scanning the QR code placed at your table. 
                            </p>
                            <p>
                                <img src="https://www.citypng.com/public/uploads/preview/check-mark-correct-true-purple-sign-tick-icon-png-701751694964928dsg3amqxqr.png" alt="Check" className="check-icon" />
                                No app download is required—just scan and get started!
                            </p>
                        </div>
                        {/* Step 2: Browse and Order */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Step 2: Browse and Order</h5>
                            <p>
                                <img src="https://www.citypng.com/public/uploads/preview/check-mark-correct-true-purple-sign-tick-icon-png-701751694964928dsg3amqxqr.png" alt="Check" className="check-icon" />
                                Effortlessly explore the menu, select your favorite items, and customize your order with just a few taps.
                            </p>
                            <p>
                                <img src="https://www.citypng.com/public/uploads/preview/check-mark-correct-true-purple-sign-tick-icon-png-701751694964928dsg3amqxqr.png" alt="Check" className="check-icon" />
                                View detailed descriptions and images of each dish for better choices.
                            </p>
                        </div>
                        {/* Step 3: Place Your Order */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Step 3: Place Your Order</h5>
                            <p>
                                <img src="https://www.citypng.com/public/uploads/preview/check-mark-correct-true-purple-sign-tick-icon-png-701751694964928dsg3amqxqr.png" alt="Check" className="check-icon" />
                                Send your order directly to the kitchen from your table, no need to wait for a server!
                            </p>
                            <p>
                                <img src="https://www.citypng.com/public/uploads/preview/check-mark-correct-true-purple-sign-tick-icon-png-701751694964928dsg3amqxqr.png" alt="Check" className="check-icon" />
                                Receive real-time updates on your order status for a seamless dining experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
