import {
    Sheet,
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
import { toast } from "sonner";
import { Spinner } from "../components/ui/spinner.jsx";
import { Menu } from "lucide-react"


export function Navbar() {

    const [user, setUser] = useState(null)
    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [loading, setLoading] = useState(false)
    const [mobileView, setMobileView] = useState("menu") // "menu" | "login" | "register"

    const login = async () => {
        if (emailLogin === "") {
            toast.error("Preencha o campo de email", { position: "top-center" })
            return
        }
        if (passwordLogin === "") {
            toast.error("Preencha o campo de senha", { position: "top-center" })
            return
        }
        setLoading(true)
        try {
            const res = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: emailLogin, senha: passwordLogin })
            })
            const data = await res.json()
            if (!res.ok) {
                toast.error(data.message, { position: "top-center" })
                return
            }
            setUser(data.user)
            toast.success(data.message, { position: "top-center" })
        } catch (error) {
            console.error("Erro ao realizar login", error)
            toast.error("Erro ao realizar login", { position: "top-center" })
        } finally {
            setLoading(false)
            setEmailLogin("")
            setPasswordLogin("")
        }
    }

    function logout() {
        setUser(null)
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            login()
        }
    }

    const [nomeRegister, setNomeRegister] = useState(null)
    const [emailRegister, setEmailRegister] = useState(null)
    const [senhaRegister, setSenhaRegister] = useState(null)
    const [confirmarSenhaRegister, setConfirmarSenhaRegister] = useState(null)
    const [nomeSpan, setNomeSpan] = useState("Campo obrigatório")

    const register = async () => {
        if (nomeRegister === "" || emailRegister === "" || senhaRegister === "") {
            toast.error("Preencha todos os campos corretamente", { position: "top-center" })
            return
        }
        setLoading(true)
        try {
            const res = await fetch("http://localhost:3000/users/register", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: nomeRegister, email: emailRegister, senha: senhaRegister })
            })
            const data = await res.json()
            if (!res.ok) {
                toast.error(data.message, { position: "top-center" })
            }
            data && toast.success(data.message, { position: "top-center" })
        } catch (error) {
            console.error("Erro ao registrar usuário", error)
            toast.error("Erro ao registrar usuário", { position: "top-center" })
        } finally {
            setLoading(false)
            setNomeRegister("")
            setEmailRegister("")
            setSenhaRegister("")
            setConfirmarSenhaRegister("")
        }
    }
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <div className=" h-20 flex justify-center items-center bg-gray-900/95 backdrop-blur-[5px] w-full z-30 shadow-[0px_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex w-[90%] items-center justify-between  px-4 py-3">


                    <h1 className="font-bold text-3xl text-red-600" style={{ fontFamily: 'Bangers' }}>Dev<span style={{ fontFamily: 'Bangers' }} className="font-bold text-white">Food!</span>
                    </h1>


                    <ul className="hidden sm:flex gap-5 text-white items-center">
                        {user ? (
                            <>
                                <li><a href="" className="text-red-600">Home</a></li>
                                <li><p className="text-red-600">Olá, {user.nome}</p></li>
                                <li>
                                    <Button onClick={logout} className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer">
                                        Sair
                                    </Button>
                                </li>
                            </>
                        ) : (
                            <>
                                {/* <li><a className="bg-red-600 inline-flex p-2 rounded-[12px]" href="">Home</a></li> */}


                                <li>
                                    <Sheet>
                                        <SheetTrigger className="cursor-pointer text-red-600 font-medium tracking-wide rounded-[12px] p-2 hover:text-red-400">criar conta</SheetTrigger>
                                        <SheetContent className="w-[90%] sm:max-w-md px-4 sm:px-6">
                                            <SheetHeader>
                                                <SheetTitle>Crie sua conta</SheetTitle>
                                                <SheetDescription>Siga os passos abaixo para criar seu acesso.</SheetDescription>
                                            </SheetHeader>
                                            <div className="flex flex-col rounded-[10px] p-5 w-full bg-white mx-auto gap-5 mt-4">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Nome completo</Label>
                                                    <Input value={nomeRegister} onChange={(e) => setNomeRegister(e.target.value)} className="shadow-md text-base" />
                                                    <span className="text-center text-sm text-red-600"></span>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Email</Label>
                                                    <Input value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} type="email" className="shadow-md text-base" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Senha</Label>
                                                    <Input value={senhaRegister} onChange={(e) => setSenhaRegister(e.target.value)} type="password" className="shadow-md text-base" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Confirmar senha</Label>
                                                    <Input value={confirmarSenhaRegister} onChange={(e) => setConfirmarSenhaRegister(e.target.value)} type="password" className="shadow-md text-base" />
                                                </div>
                                                {loading && <div className="mx-auto"><Spinner /></div>}
                                            </div>
                                            <SheetFooter className="px-4 sm:px-0 mt-4">
                                                <Button onClick={register} className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer w-full">Criar conta</Button>
                                            </SheetFooter>
                                        </SheetContent>
                                    </Sheet>
                                </li>

                                <li>
                                    <Sheet>
                                        <SheetTrigger className="cursor-pointer rounded-[12px] font-medium bg-red-600 p-2">Login</SheetTrigger>
                                        <SheetContent className="w-[90%] sm:max-w-md px-4 sm:px-6">
                                            <SheetHeader>
                                                <SheetTitle>Login</SheetTitle>
                                                <SheetDescription>Faça login na sua conta.</SheetDescription>
                                            </SheetHeader>
                                            <div className="flex flex-col rounded-[10px] p-5 w-full bg-white mx-auto gap-5 mt-4">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Email</Label>
                                                    <Input onKeyDown={handleKeyDown} value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} type="email" className="shadow-md text-base" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Senha</Label>
                                                    <Input onKeyDown={handleKeyDown} value={passwordLogin} id="passwordLogin" onChange={(e) => setPasswordLogin(e.target.value)} type="password" className="shadow-md text-base" />
                                                </div>
                                                {loading && <div className="mx-auto"><Spinner /></div>}
                                                <Button variant="ghost" className="border-none p-2 text-gray-800 cursor-pointer">Esqueceu sua senha?</Button>
                                                <Button onClick={login} className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer w-full">Fazer login</Button>
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </li>



                            </>
                        )}
                    </ul>


                    <div className="sm:hidden">
                        <Sheet open={open} onOpenChange={(value) => { setOpen(value); if (value) setMobileView("menu") }}>
                            <SheetTrigger asChild>

                                <Menu className={`text-white duration-500 ${open ? "rotate-90" : ""}`} />
                            </SheetTrigger>

                            <SheetContent side="right" className="w-[75%] max-w-xs px-0">


                                {mobileView === "menu" && (
                                    <>
                                        <SheetHeader className="px-5 pb-2">
                                            <SheetTitle className="text-left text-xl text-red-600" style={{ fontFamily: 'Bangers' }}>
                                                Dev<span style={{ fontFamily: 'Bangers' }} className="text-gray-950">Food!</span>
                                            </SheetTitle>
                                        </SheetHeader>

                                        <div className="flex flex-col mt-4">
                                            {user ? (
                                                <>
                                                    <p className="px-5 py-3 text-red-600 font-medium border-b border-gray-100">Olá, {user.name}</p>
                                                    <a href="" className="px-5 py-4 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50">Home</a>
                                                    <button
                                                        onClick={logout}
                                                        className="px-5 py-4 text-left text-red-600 font-medium hover:bg-gray-50"
                                                    >
                                                        Sair
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <a href="" className="px-5 py-4 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50">
                                                        Home
                                                    </a>
                                                    <button
                                                        onClick={() => setMobileView("login")}
                                                        className="px-5 py-4 text-left text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50"
                                                    >
                                                        Login
                                                    </button>
                                                    <button
                                                        onClick={() => setMobileView("register")}
                                                        className="px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-50"
                                                    >
                                                        Criar conta
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </>
                                )}


                                {mobileView === "login" && (
                                    <>
                                        <SheetHeader className="px-5 pb-2">
                                            <button
                                                onClick={() => setMobileView("menu")}
                                                className="text-sm text-red-600 text-left mb-1 hover:underline"
                                            >
                                                ← Voltar
                                            </button>
                                            <SheetTitle className="text-left">Login</SheetTitle>
                                            <SheetDescription className="text-left">Faça login na sua conta.</SheetDescription>
                                        </SheetHeader>
                                        <div className="flex flex-col rounded-[10px] p-5 w-full bg-white mx-auto gap-5 mt-2">
                                            <div className="flex flex-col gap-2">
                                                <Label>Email</Label>
                                                <Input onKeyDown={handleKeyDown} value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} type="email" className="shadow-md text-base" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Senha</Label>
                                                <Input onKeyDown={handleKeyDown} value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} type="password" className="shadow-md text-base" />
                                            </div>
                                            {loading && <div className="mx-auto"><Spinner /></div>}
                                            <Button variant="ghost" className="border-none p-2 text-gray-800 cursor-pointer text-sm">Esqueceu sua senha?</Button>
                                            <Button onClick={login} className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer w-full">Fazer login</Button>
                                        </div>
                                    </>
                                )}


                                {mobileView === "register" && (
                                    <>
                                        <SheetHeader className="px-5 pb-2">
                                            <button
                                                onClick={() => setMobileView("menu")}
                                                className="text-sm text-red-600 text-left mb-1 hover:underline"
                                            >
                                                ← Voltar
                                            </button>
                                            <SheetTitle className="text-left">Crie sua conta</SheetTitle>
                                            <SheetDescription className="text-left">Siga os passos abaixo para criar seu acesso.</SheetDescription>
                                        </SheetHeader>
                                        <div className="flex flex-col rounded-[10px] p-5 w-full bg-white mx-auto gap-4 mt-2 overflow-y-auto max-h-[75vh]">
                                            <div className="flex flex-col gap-2">
                                                <Label>Nome completo</Label>
                                                <Input value={nomeRegister} onChange={(e) => setNomeRegister(e.target.value)} className="shadow-md text-base" />
                                                <span className="text-center text-sm text-red-600"></span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Email</Label>
                                                <Input value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} type="email" className="shadow-md text-base" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Senha</Label>
                                                <Input value={senhaRegister} onChange={(e) => setSenhaRegister(e.target.value)} type="password" className="shadow-md text-base" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Confirmar senha</Label>
                                                <Input value={confirmarSenhaRegister} onChange={(e) => setConfirmarSenhaRegister(e.target.value)} type="password" className="shadow-md text-base" />
                                            </div>
                                            {loading && <div className="mx-auto"><Spinner /></div>}
                                            <Button onClick={register} className="bg-red-700 p-2 rounded-[10px] text-white hover:bg-red-900 cursor-pointer w-full mt-2">Criar conta</Button>
                                        </div>
                                    </>
                                )}

                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </nav>
    )
}