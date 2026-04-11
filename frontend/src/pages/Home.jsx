import { Card } from "../components/Card";
import { Foods } from "../components/Foods";
import { Hero } from "../components/Hero";

import { Navbar } from "../components/Navbar";




export function Home() {
    return (
        <div>

            <div>
                <div className="fixed w-full">
                    <Navbar />
                </div>
                <Hero />
                <Card />

                <Foods />

            </div>
        </div>

    )
}