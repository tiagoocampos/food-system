import { useState } from "react";
import { Foods } from "./Foods";
import { Button } from "./ui/button";
import { Hamburger } from "lucide-react";

export function Category() {
    const [mostrarFoods, setMostrarFoods] = useState(false);

    return (
        <div className="flex gap-10 justify-center items-center mx-auto flex-col">
            <h1>Categorias</h1>

            <Button
                className="bg-red-600 cursor-pointer hover:bg-red-400"
                onClick={() => setMostrarFoods(true)}
            >
                <Hamburger /> Lanches
            </Button>


            {mostrarFoods && (
                <div
                    className="fixed w-80 md:w-full inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setMostrarFoods(false)}
                >
                    <div
                        className="bg-white rounded-xl w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto p-4 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botão fechar */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                            onClick={() => setMostrarFoods(false)}
                        >
                            ✕
                        </button>

                        <Foods />
                    </div>
                </div>
            )}
        </div>
    );
}