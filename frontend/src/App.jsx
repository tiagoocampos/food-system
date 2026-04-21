import { Home } from "./pages/Home"
import { Toaster } from "@/components/ui/sonner"
import AppRoutes from "./Routes"




function App() {


  return (
    <div className="bg-gray-50">
      <Toaster />
      <AppRoutes />
    </div>
  )
}

export default App
