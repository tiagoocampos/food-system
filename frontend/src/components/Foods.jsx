import { InputHome } from "./InputHome";

export function Foods() {
    return (
        <div className="flex flex-col justify-center text-center px-4 py-6">
            <h1 className="text-2xl sm:text-[20px] text-gray-500 mb-4">Conheça nossos lanches</h1>
            <InputHome />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto rounded-xl p-4 sm:p-5 w-full max-w-screen-xl mt-4">

                <div className="flex shadow-xl bg-red-200 rounded-xl flex-col">
                    <img
                        src="/hamb-1.jpg"
                        alt="hamburguer"
                        className="w-full rounded-t-xl aspect-4/3 object-cover"
                    />
                    <div className="flex flex-col items-center justify-center p-3">
                        <h1 className="font-bold mt-2">Hamburguer Gourmet</h1>
                        <p className="text-gray-600 mt-3 text-sm">Hamburguer gourmet especial</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex shadow-xl bg-red-200 rounded-xl flex-col">
                    <img
                        src="/pizza1.jpg"
                        alt="pizza"
                        className="w-full rounded-t-xl aspect-[4/3] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center p-3">
                        <h1 className="font-bold mt-2">Pizza especial</h1>
                        <p className="text-gray-600 mt-3 text-sm">Conheça nossas deliciosas pizzas</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex shadow-xl bg-red-200 rounded-xl flex-col">
                    <img
                        src="/batata.jpg"
                        alt="Batata frita"
                        className="w-full rounded-t-xl aspect-[4/3] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center p-3">
                        <h1 className="font-bold mt-2">Batata Frita</h1>
                        <p className="text-gray-600 mt-3 text-sm">Batata frita crocante e saborosa</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex shadow-xl bg-red-200 rounded-xl flex-col">
                    <img
                        src="/coxinha.jpg"
                        alt="Coxinha"
                        className="w-full rounded-t-xl aspect-[4/3] object-cover"
                    />
                    <div className="flex flex-col text-center items-center justify-center p-3">
                        <h1 className="font-bold mt-2">Coxinhas</h1>
                        <p className="text-gray-600 mt-3 text-sm">Experimente nossas deliciosas coxinhas</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-4 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

            </div>
        </div>
    )
}