import * as React from "react"
import Menu from "./components/menu";
import './about.css';
import {Link} from "gatsby";
import {Seo} from "../component/seo";

const IndexPage = () => {
    return (
        <main>
            <div className="about-section">
                <Menu title="Kortz"/>
                <div className="content">
                    <h1>
                        Spaced repetition flashcards app
                    </h1>
                    <section>
                        <p>
                            Learning new language requires a proper mix of tools. Our flashcards app, with a gamified
                            approach inspired by the Leitner System, is your ideal partner. Here's how it fits seamlessly into
                            your diverse learning resources:
                        </p>
                        <h3>Smart Memory Boost</h3>
                        Our app adds a playful touch to spaced repetition, drawing inspiration from the
                        Leitner System. As you engage with language apps, books, videos, and more, our app helps you
                        remember
                        important words. These are the words you handpick from daily life, online browsing, or
                        other apps because they matter to you

                        <h3>Flexible Learning</h3>
                        Whether you're using language apps, reading books, watching videos, or attending
                        classes, our app fits perfectly in. Create custom flashcards that match what you're studying,
                        making it your tailored learning tool

                        <h3>Steady Progress</h3>
                        Our app's take on the Leitner System keeps your review times organized

                        Language learning is like a puzzle, and our flashcards app is the missing piece. Elevate your
                        learning, remember better, and shine in language skills with our app by your side
                    </section>

                    <section>
                        <h2>What makes it unique</h2>
                        <ul>
                            <li>
                                Operates offline, excluding features that inherently require an internet connection
                                (such as: cards sharing, context learning)
                            </li>
                            <li>
                                Use across multiple devices without restrictions
                            </li>
                            <li>
                                Our spaced repetition approach stands out due to its unique combination of properties.
                                Learn more about it <Link to={"/about"}>here</Link>.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3><Link to="/stage">Current Development Stage</Link></h3>
                        <div>
                            You can always decide to quit, we will send you all your cards in a desirable format then.
                            Of course we don't want this to happen, therefore we try to provide the best support possible.
                        </div>
                    </section>
                </div>
                <div>
                    In case you have any questions, ideas, comments, feel free to contact us by email: <a href='mailto:contact@kortz.app'>contact@kortz.app</a>,
                    or join us on Telegram: <a href={"https://t.me/kortzapp"}>Kortz channel</a>
                </div>
            </div>
        </main>
    )
}

export default IndexPage

export const Head = () => (
    <Seo />
)
