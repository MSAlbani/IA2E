import { motion } from "motion/react"

export default function StatsBar() {

    const resultats = [
        { filiere: 'Agriculture', taux: '75%' },
        { filiere: 'Eaux et forêt', taux: '75%' },
        { filiere: 'Environnement', taux: '75%' },
        { filiere: 'Elévage', taux: '75%' },
    ]
    return (
        <section className="py-12 bg-[#2D5A27]">
            <div className="max-w-7xl mx-auto px-6">
                {/* <h1 className="text-center font-bold text-2xl text-white mb-5">Nos résultats du BAC 2025</h1> */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {
                        resultats.map((resultat, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center" key={index}
                            >
                                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{resultat.taux}</p>
                                <p className="text-[#A8C5A3] text-sm">{resultat.filiere}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}