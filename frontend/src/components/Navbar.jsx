import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Label } from "../components/ui/label.jsx"
import { Input } from "../components/ui/input.jsx"
import { Button } from "./ui/button.jsx"
import { useState } from "react"


export function Navbar() {

    const [user, setUser] = useState(null)

    function login() {
        const userData = { name: "tiago" }

        localStorage.setItem("user", JSON.stringify(userData))
        setUser(userData)
    }

    function logout() {
        setUser(null)
    }

    return (
        <nav>
            <div>
                <div className="flex items-center justify-between bg-red-600 p-4">
                    <h1 className="font-bold text-2xl text-white">Dev<span className="font-bold text-gray-950">Food</span></h1>
                    {user ? (
                        <ul className="flex gap-5 text-white items-center">
                            <li><a href="">Home</a></li>
                            <li><p>Olá, {user.name}</p></li>

                            <li className=""><Button onClick={logout} className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer">Sair</Button></li>
                        </ul>
                    ) : (
                        <ul className="flex gap-5 text-white items-center">
                            <li><a href="">Home</a></li>
                            <li>
                                <div >
                                    <Sheet>
                                        <SheetTrigger className="cursor-pointer rounded-[10px] ">Login</SheetTrigger>
                                        <SheetContent >
                                            <SheetHeader>
                                                <SheetTitle>Login</SheetTitle>
                                                <SheetDescription>Faça login na sua conta.</SheetDescription>
                                            </SheetHeader>
                                            <div className="flex flex-col  rounded-[10px] p-5 w-[95%] bg-white mx-auto gap-5">


                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Email</Label>
                                                    <Input id="" type="email" className="shadow-md" />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Senha</Label>
                                                    <Input id="" type="password" className="shadow-md" />
                                                </div>

                                                <Button variant="ghost" className="border-none p-2 text-gray-800 cursor-pointer">Esqueceu sua senha?</Button>
                                                <Button onClick={login} className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer">Fazer login</Button>

                                            </div>

                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </li>

                            <li className="">
                                <div >
                                    <Sheet>
                                        <SheetTrigger className="cursor-pointer bg-red-700 rounded-[10px] p-2 hover:bg-red-900">Criar conta</SheetTrigger>
                                        <SheetContent >
                                            <SheetHeader>
                                                <SheetTitle>Crie sua conta</SheetTitle>
                                                <SheetDescription>Siga os passos abaixo para criar seu acesso.</SheetDescription>
                                            </SheetHeader>
                                            <div className="flex flex-col  rounded-[10px]  p-5 w-[95%] bg-white mx-auto gap-5">
                                                <div className="flex flex-col gap-2 ">
                                                    <Label htmlFor="">Nome</Label>
                                                    <Input id="" className="shadow-md" />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Sobrenome</Label>
                                                    <Input id="" className="shadow-md" />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Email</Label>
                                                    <Input id="" type="email" className="shadow-md" />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Senha</Label>
                                                    <Input id="" type="password" className="shadow-md" />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Confirmar senha</Label>
                                                    <Input id="" type="password" className="shadow-md" />
                                                </div>

                                            </div>
                                            <SheetFooter>
                                                <Button className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer">Criar conta</Button>
                                            </SheetFooter>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </li>
                        </ul>
                    )}

                </div>
            </div>
        </nav>
    )
}