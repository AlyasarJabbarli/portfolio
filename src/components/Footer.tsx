import React from 'react'
import HyperButton from './HyperButton.tsx'

export default function Footer() {
  return (
    <footer>
        <div className="flex justify-between p-8 fixed bottom-0 w-full">
            <div>
                <ul className="flex space-x-4">
                    <li>
                        <HyperButton to="/start" text="X" />
                    </li>
                    <li>
                        <HyperButton to="/start" text="Bluesky" />
                    </li>
                    <li>
                        <HyperButton to="/start" text="Telegram" />
                    </li>
                    <li>
                        <HyperButton to="/start" text="Spotify playlist" />
                    </li>
                    <li>
                        <HyperButton to="/start" text="Github" />
                    </li>
                    <li>
                        <HyperButton to="/start" text="LinkedIn" />
                    </li>
                    <li>
                        <HyperButton to="/start" text="Cosmos" />
                    </li>
                    <li>
                        <HyperButton to="/start" text="Letterboxd" />
                    </li>
                </ul>
            </div>
            <div>
                <HyperButton to="mailto:alyasar.jabbarli@gmail.com" text="alyasar.jabbarli@gmail.com" />
            </div>
        </div>
    </footer>
  )
}
