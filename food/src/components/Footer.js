// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS for styling
import appStoreImage from '../images/app-store.jpg'; // Import specific image
import paymentMethodImage from '../images/payment-method.png';
import Google from '../images/google-play.jpg'; // Import specific image

const Footer = () => {
    // Example data for payment methods
    const paymentMethods = [
        { id: 1, name: 'AppStore', image: appStoreImage },
        { id: 2, name: 'PaymentMethod', image: paymentMethodImage },
        { id: 3, name: 'GooglePlay', image: Google , page:"https://play.google.com/store/apps/details?id=in.myinnos.AppManager&hl=en"}, // Assuming 'google-play.jpg' is in the correct relative path
        // Add more payment methods as needed
    ];

    // Description about your organic store
    const aboutUsText = "Organic Food Delight brings you the finest selection of organic ingredients, sourced sustainably to promote health and well-being. We are committed to supporting local farmers and ensuring that our products are free from harmful chemicals and pesticides.";

    // Additional content related to organic food
    const additionalContent = [
        "Discover a wide range of organic fruits, vegetables, grains, dairy, and more.",
        "Our products are certified organic, ensuring the highest standards of quality and purity.",
        "Join us in promoting environmental sustainability through organic farming practices.",
        "Follow us on social media to stay updated with our latest offers and organic recipes.",
        "Contact us for personalized organic meal plans and nutritional advice.",
    ];

    return (
        <footer className="footer">
            <div id='footer'
             className="footer-container">
                <div className="payment-methods">
                    <h3>Accepted Payment Methods</h3>
                    <ul>
                        {paymentMethods.map(method => (
                            <li key={method.id}>
                                <img src={method.image} alt={method.name} />
                                
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="organic-description">
                    <h3>About Us</h3>
                    <p>{aboutUsText}</p>
                    <ul>
                        {additionalContent.map((content, index) => (
                            <li key={index}>{content}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
