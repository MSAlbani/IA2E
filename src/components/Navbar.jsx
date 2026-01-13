


export default function Navbar() {

    const lesLiens = [
        { id: 'accueil', label: 'Accueil' },
        { id: 'apropos', label: 'A propos' },
        { id: 'formation', label: 'Formations' },
        { id: 'contact', label: 'Contact' },
        { id: 'avantages', label: 'Nos atouts' }
    ]




    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
                <div className=" flex justify-between items-center">
                    <div>
                        <h1 className="">IA2E</h1>
                    </div>
                    <div>
                        {lesLiens.map((lien, index) => (

                            <button className={` btn m-2 hover:bg-sky-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300`} key={index}>
                                {lien.label}
                            </button>

                        ))}
                    </div>

                </div>

            </nav>
        </>
    )
}