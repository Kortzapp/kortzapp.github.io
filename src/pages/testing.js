import React from 'react';
import './about.css';
import Menu from "./components/menu";

const Testing = () => {

    return (
        <div className="about-section">
            <Menu title="Testing"/>
            <div className="content">
                <section>
                    <h3>Why</h3>
                    <p>
                        The purpose of this closed testing is to identify possible issues within the application, gather initial feedback and define the ways to improve and move forward
                    </p>
                </section>
                <section>
                    <h3>When</h3>
                    <p>
                        The closed testing will continue for two weeks up to the end of March'24. The start date to be announced in the channel. That's an officiall part required by Google Play. You can still start using the app right after your registration as a tester
                    </p>
                </section>
                <section>
                    <h3>How</h3>
                    <p>
                        In order to participate you would have to send a blank email with a subject "become a tester" to this address: <a href='mailto:contact@kortz.app'>contact@kortz.app</a> <br/>
                        Give us some time to process your request, as this is not automated
                    </p>
                </section>
                <section>
                    <h3>Requirements</h3>
                    <p>
                        Android OS, Google account
                    </p>
                </section>
                <section>
                    <h3>Benefits</h3>
                    <p>
                        You will be granted unlimited access to all the features we have and will have in the future. All your progress with cards will also be preserved after the testing period (unless you explicitly ask us to remove it)
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Testing;
