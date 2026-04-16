import { Card } from "../components/Card";
import { Category } from "../components/Category";
import { Foods } from "../components/Foods";
import { Footer } from "../components/footer";
import { Hero } from "../components/Hero";

import { Navbar } from "../components/Navbar";




export function Home() {
    return (
        <div className="min-h-screen flex flex-col">


            <div className="fixed z-50 w-full top-0">
                <Navbar />
            </div>
            <main className="flex-1 mt-20">
                <Hero />
                <Card />
                {/* <Foods /> */}
                <Category />
            </main>

            <Footer />


        </div>

    )
}