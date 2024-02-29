import React from 'react';
import './about.css';
import Menu from "./components/menu";

const Stage = () => {

    return (
        <div className="about-section">
            <Menu title="Stage"/>
            <div className="content">
                <section>
                    <h3>Current Development Stage</h3>
                    <p>
                        We are currently in the development and internal-testing stage (including this webpage).
                        <h4>What you can already do with it</h4>
                        <ul>
                            <li>
                                create your own cards
                            </li>
                            <li>
                                get challenged based on our spaced repetition algorithm with 4 challenge levels
                            </li>
                            <li>
                                store your progress securely in the cloud
                            </li>
                        </ul>
                        <h4>A few other features</h4>
                        <ul>
                            <li>
                                minimalistic and neat user interface
                            </li>
                            <li>
                                easy to navigate library
                            </li>
                            <li>
                                well tuned spaced repetition implementation
                            </li>
                            <li>
                                multiple language pairs
                            </li>
                        </ul>
                        <h4>New features to expect</h4>
                        <ul>
                            <li>
                                new challenge levels
                            </li>
                            <li>
                                translation suggestions
                            </li>
                            <li>
                                words suggestions
                            </li>
                            <li>
                                fine-tuning learning experience
                            </li>
                            <li>
                                flexible cards sharing options
                            </li>
                            <li>
                                context-rich words repetition
                            </li>
                            <li>
                                creating cards from external sources (camera, browser, sound record, etc...)
                            </li>
                            <li>
                                high quality pronunciation
                            </li>
                        </ul>
                    </p>
                </section>

                <section>
                    <h4>The existing challenge levels</h4>
                    <ul>
                        <li>match 4 words with their 4 translations</li>
                        <li>match a word with its translation out of 4 options</li>
                        <li>match a word with its original out of 4 options</li>
                        <li>type in missing characters into original word with translation visible</li>
                    </ul>
                    <h4>More challenge levels to expect</h4>
                    <ul>
                        <li>pick missing characters into original word with translation visible</li>
                        <li>fill in missing original word in a sentence with visible translation</li>
                        <li>pick missing original words out of 4 options to fill in gaps in a text</li>
                        <li><a href={"https://en.wikipedia.org/wiki/Cloze_test"}>Cloze Deletion Test</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Stage;
