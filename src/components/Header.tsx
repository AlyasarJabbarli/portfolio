import React from 'react'
import HyperButton from './HyperButton.tsx'

export default function Header() {
    return (
        <header className="">
            <div className="flex justify-between p-8">
                <div>
                    <h1>
                        <HyperButton to="/home" text="Pierre.io" />
                    </h1>
                </div>
                <div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <HyperButton to="/about" text="About" />
                            </li>
                            <li>
                                <HyperButton to="/resume" text="Resume" />
                            </li>
                            <li>
                                <HyperButton to="/work" text="Work" />
                            </li>
                            <li>
                                <HyperButton to="/journal" text="Journal" />
                            </li>
                            <li>
                                <HyperButton to="/contact" text="Contact" />
                            </li>
                            <li>
                                <HyperButton to="/start" text="Start a project" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
