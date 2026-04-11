import { Card } from "../components/Card";
import { Foods } from "../components/Foods";
import { Hero } from "../components/Hero";

import { Navbar } from "../components/Navbar";




export function Home() {
    return (
        <div>

            <div>
                <Navbar />
                <Hero />
                <Card />

                <Foods />

            </div>
        </div>

    )
}