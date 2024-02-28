import React from "react";

const PolicyPage = () => (
    <main>
        <h1>Privacy Policy</h1>
        <p>
            This privacy policy explains how our organization (Kortz) uses the personal data
            collected from you when you use our app Kortz.
        </p>

        <h2>Topics:</h2>
        <ul>
            <li>What data do we collect?</li>
            <li>How do we collect your data?</li>
            <li>How will we use your data?</li>
            <li>How do we store your data?</li>
            <li>What are your data protection rights?</li>
            <li>Changes to our privacy policy</li>
            <li>How to contact us</li>
        </ul>

        <h3>Data We Collect:</h3>
        <p>Personal identification information (email address)</p>

        <h3>How We Collect Your Data:</h3>
        <p>
            You authenticate with a single sign-on 3rd-party provider (Google or
            Apple). You then provide us with a token that we use to fetch your private
            data from the corresponding data provider.
        </p>

        <h3>How We Will Use Your Data:</h3>
        <ul>
            <li>Uniquely identify you in our system</li>
            <li>
                Contact you to communicate important information regarding the services
                we provide
            </li>
            <li>Confirm your orders and requests</li>
            <li>Provide support regarding the services we offer</li>
        </ul>

        <p>
            We do not share your data with other parties without your separate
            explicit request and/or permission.
        </p>

        <h3>How We Store Your Data:</h3>
        <p>
            Your data is securely stored at a datacenter located in Germany. Access to this database is only available
            to a limited
            number of people who are legally bound to protect your data.
        </p>

        <h3>Your Rights as a User Concerning Your Personal Data:</h3>
        <p>
            We want to ensure you are fully aware of all your data
            protection rights. Every user is entitled to the following:
        </p>
        <ul>
            <li>
                <strong>The right to access:</strong> You can request us to send you
                your personal data via a communication channel of your choice. If
                applicable, you are responsible for paying all corresponding fees.
            </li>
            <li>
                <strong>The right to rectification:</strong> You can request that we
                correct any information you believe is inaccurate or incomplete.
            </li>
            <li>
                <strong>The right to erasure:</strong> You can request that we erase
                your personal data.
            </li>
            <li>
                <strong>The right to object to processing:</strong> You can object to
                the processing of your personal data. Some or all of the services might
                become unavailable, depending on the conditions.
            </li>
            <li>
                <strong>The right to data portability:</strong> You can request that we
                transfer the data we have collected to another organization. If
                applicable, you are responsible for paying all corresponding fees.
            </li>
        </ul>
        <p>
            If you make a request, we have one month to respond to you. If you would
            like to exercise any of these rights, please contact us at our email:
            contact@kortz.app
        </p>

        <h3>Changes to Our Privacy Policy:</h3>
        <p>
            We keep our privacy policy under regular review and places any
            updates on this web page. This privacy policy was last updated on
            02 February 2024.
        </p>

        <h3>How to Contact Us:</h3>
        <p>
            If you have any questions about our privacy policy, the data we
            hold on you, or you would like to exercise one of your data protection
            rights, please do not hesitate to contact us.
        </p>
        <p>Email us at: contact@kortz.app</p>
    </main>
);

export default PolicyPage;
