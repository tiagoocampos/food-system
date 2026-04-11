import { Card } from "../components/Card";
import { Foods } from "../components/Foods";
import { InputHome } from "../components/InputHome";
import { Navbar } from "../components/Navbar";




export function Home() {
    return (
        <div>

            <div>
                <Navbar />
                <Card />
                <InputHome />
                <Foods />

            </div>
        </div>

    )
}