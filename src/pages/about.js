import React from 'react';
import './about.css';
import Menu from "./components/menu";

const About = () => {

    return (<div className="about-section">
        <Menu title="About"/>
        <div className="content">
            <section>
                <h3>Memory and Repetition</h3>
                <p>
                    Ever wondered why you can remember a telephone number for years but struggle with a random
                    seven-digit number? Our app understands the science behind it – the transition from short-term
                    to long-term memory through repetition. Objects need to be repeated, and our app ensures this
                    crucial process, making the learning journey more effective.
                </p>
            </section>
            <section>
                <h3>Forgetting Curve</h3>
                <p>
                    Delve into the <a href={"https://en.wikipedia.org/wiki/Forgetting_curve"}>forgetting curve</a>,
                    revealing that newly acquired knowledge diminishes without
                    conscious review. Hermann Ebbinghaus' premise emphasizes that each repetition increases the
                    optimal interval before the next one is needed. Our app aligns with this philosophy, providing a
                    structured approach to reinforce learning for near-perfect retention.
                </p>
            </section>
            <section>
                <h3>Spacing Effect and Study Sessions</h3>
                <p>
                    The <a href={"https://en.wikipedia.org/wiki/Spacing_effect"}>spacing</a> effect highlights the
                    power of spaced-out study sessions, and our app takes full
                    advantage. It harnesses the effectiveness of spaced repetition, surpassing massed presentation
                    or "cramming". Cepeda et al.'s study (2006) demonstrated that spaced practice consistently
                    outperformed massed practice in memory tasks, a principle embedded in our app's design.
                </p>
            </section>
            <section>
                <h3>Testing Effect</h3>
                <p>
                    The <a href={"https://en.wikipedia.org/wiki/Testing_effect"}>testing effect</a>, also known as
                    retrieval practice, is a cornerstone of our app. By dedicating
                    part of the learning period to retrieving information, our app maximizes long-term memory.
                    Repeated testing has proven to outperform repeated studying, and the app employs spaced
                    repetition to enhance the testing effect, creating lasting connections between items for
                    improved memory retention.
                </p>
            </section>
            <section>
                <h3>Feedback and Desirable Difficulty</h3>
                <p>
                    Getting feedback is pivotal, and our app seamlessly integrates it. Determining a <a
                    href={"https://en.wikipedia.org/wiki/Desirable_difficulty"}>desirable
                    difficulty</a> level for tests, combined with feedback, ensures an optimal learning experience.
                    Accessing your knowledge, our app tailors the learning process, surpassing passive studying or
                    testing without feedback. The app adapts by increasing the complexity of challenges as you
                    progress through the learning
                    journey, ensuring a tailored and focused
                    language learning experience.
                </p>
            </section>
            <section>
                <h3>Spaced Repetition Mechanism</h3>
                <p>
                    Our app employs a customized implementation of the <a
                    href={"https://en.wikipedia.org/wiki/Leitner_system"}>Leitner System</a>, a proven <a
                    href={"https://en.wikipedia.org/wiki/Spaced_repetition"}> spaced repetition</a>
                    mechanism, ensuring optimal learning. It integrates seamlessly with your diverse learning
                    resources, becoming a valuable ally in your language learning journey.
                </p>
            </section>
            <section>
                <h3>Building Your Own Library</h3>
                <p>
                    We aim to develop a user-friendly library user experience, simplifying the card creation process for
                    you. Our goal is to promote users in crafting their own cards, discouraging dependence on
                    pre-existing ones.
                    Learning superfluous information can contribute to retrieval-induced forgetting,
                    as explained <a href={"https://en.wikipedia.org/wiki/Retrieval-induced_forgetting"}>here</a>.
                    Your mission is to curate relevant content with the assistance of language apps, books, videos,
                    daily experiences, and more. This approach ensures that the app delivers a concentrated and
                    personalized language learning experience.
                </p>
            </section>
            <section>
                <p>
                    Say goodbye to forgetting and embrace the power of spaced repetition with our mobile app. Start
                    your language learning journey with us, and witness the transformation of your long-term memory.
                    Elevate your learning, remember better, and shine in language skills with our app by your side.
                </p>
            </section>
        </div>
    </div>);
};

export default About;
