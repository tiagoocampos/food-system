import { InputHome } from "./InputHome";



export function Foods() {



    return (
        <div className=" flex bg-gray-200 flex-col text-center">
            <h1 className="text-3xl text-red-700">Conheça nossos lanches</h1>
            <InputHome />
            <div className=" flex gap-20 mx-auto bg-gray-200 rounded-xl p-5 w-300">
                <div className="flex shadow-xl bg-red-200 h-90 rounded-xl flex-col">
                    <img
                        src="/hamb-1.jpg"
                        alt="hamburguer"
                        className="w-62.5 rounded-xl h-50 object-cover "
                    />

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold mt-3">Hamburguer Gourmet</h1>
                        <p className="text-gray-600 mt-5 text-sm">Hamburguer gourmet especial</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-5 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex shadow-xl bg-red-200 h-90 rounded-xl flex-col">
                    <img
                        src="/pizza1.jpg"
                        alt="pizza"
                        className="w-62.5 rounded-xl h-50 object-cover "
                    />

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold mt-3">Pizza especial</h1>
                        <p className="text-gray-600 mt-5 text-sm">Conheça nossas deliciosas pizzas</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-5 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex shadow-xl bg-red-200 h-90 rounded-xl flex-col">
                    <img
                        src="/batata.jpg"
                        alt="Batata frita"
                        className="w-62.5 rounded-xl h-50 object-cover "
                    />

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold mt-3">Batata Frita</h1>
                        <p className="text-gray-600 mt-5 text-sm">Batata frita crocante e saborosa</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-5 text-white bg-gray-900">Ver</button>
                    </div>
                </div>

                <div className="flex shadow-xl bg-red-200 h-90 rounded-xl flex-col">
                    <img
                        src="/coxinha.jpg"
                        alt="Coxinha"
                        className="w-62.5 rounded-xl h-50 object-cover "
                    />

                    <div className="flex flex-col text-center items-center justify-center">
                        <h1 className="font-bold mt-3">Coxinhas</h1>
                        <p className="text-gray-600 mt-5 text-sm">Experimente nossas deliciosas coxinhas</p>
                        <button className="p-2 cursor-pointer rounded-[20px] duration-500 hover:bg-gray-950 w-25 mt-5 text-white bg-gray-900">Ver</button>
                    </div>
                </div>



            </div>
        </div>
    )
}