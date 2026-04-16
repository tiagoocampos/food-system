import { Search } from "lucide-react";
import { Hamburguer } from "../pages/Hamburguer";


export function Foods() {
    return (
        <div className="flex flex-col justify-center text-center px-4 py-6">

            <h1 className="text-2xl sm:text-[20px] text-gray-500 mb-4">
                Conheça nossos lanches
            </h1>


            <div className="relative w-[95%] max-w-2xl mx-auto">

                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                />

                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto rounded-xl p-4 sm:p-5 w-full max-w-7xl mt-4">

                <div className="flex mx-auto w-70 md:w-full md:hover:scale-[1.09] duration-500 shadow-md bg-red-200 rounded-xl flex-col">
                    <img
                        src="/hamb-1.jpg"
                        alt="hamburguer"
                        className="w-70 md:w-full rounded-t-xl aspect-4/3 object-cover"
                    />
                    <div className="flex flex-col items-center justify-center p-3">
                        <h1 className="font-bold mt-2 text-gray-800">Hamburguer Gourmet</h1>
                        <p className="text-gray-600 mt-3 text-sm">Hamburguer gourmet especial</p>
                        <a href="../pages/Hamburguer" className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</a>

                    </div>
                </div>

                <div className="flex w-70 mx-auto md:w-full md:hover:scale-[1.09] duration-500 shadow-md bg-red-200 rounded-xl flex-col">
                    <img
                        src="/pizza1.jpg"
                        alt="pizza"
                        className="md:w-full w-70 rounded-t-xl aspect-4/3 object-cover"
                    />
                    <div className="flex flex-col items-center justify-center p-3">
                        <h1 className="font-bold mt-2 text-gray-800">Pizza especial</h1>
                        <p className="text-gray-600 mt-3 text-sm">Conheça nossas deliciosas pizzas</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex w-70 mx-auto md:w-full md:hover:scale-[1.09] duration-500 shadow-md bg-red-200 rounded-xl flex-col">
                    <img
                        src="/batata.jpg"
                        alt="Batata frita"
                        className="w-70 md:w-full rounded-t-xl aspect-4/3 object-cover"
                    />
                    <div className="flex flex-col items-center justify-center p-3">
                        <h1 className="font-bold mt-2 text-gray-800">Batata Frita</h1>
                        <p className="text-gray-600 mt-3 text-sm">Batata frita crocante e saborosa</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex w-70 mx-auto md:w-full md:hover:scale-[1.09] duration-500 shadow-md bg-red-200 rounded-xl flex-col">
                    <img
                        src="/coxinha.jpg"
                        alt="Coxinha"
                        className="w-70 md:w-full rounded-t-xl aspect-4/3 object-cover"
                    />
                    <div className="flex flex-col text-center items-center justify-center p-3">
                        <h1 className="font-bold mt-2 text-gray-800">Coxinhas</h1>
                        <p className="text-gray-600 mt-3 text-sm">Experimente nossas deliciosas coxinhas</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

            </div>
        </div>
    );
}