import { Leaf } from "lucide-react"
import logo from "../assets/logo.png"
export default function Footer() {
    return (
        <footer className="py-12 bg-[#1E3D1B]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        {/* <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <Leaf className="w-5 h-5 text-white" />
                        </div> */}
                        <div className="w-10 h-10 rounded-full flex justify-center items-center">
                            <img src={logo} alt="Logo" className="relative" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">IA2E</h3>
                            <p className="text-xs text-[#A8C5A3]">Institut d'Agriculture, d'Élevage et d'Environnement</p>
                        </div>
                    </div>

                    <p className="text-[#A8C5A3] text-sm">
                        © {new Date().getFullYear()} IA2E. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    )
}