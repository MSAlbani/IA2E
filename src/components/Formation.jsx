import { ArrowRight, Bird, Globe, GraduationCap, Sprout, TreePine } from "lucide-react"
import { motion } from "motion/react"
export default function Formation() {

    const formations = [
        {
            icon: Sprout,
            title: "Agriculture Durable",
            description: "Formation complète aux techniques agricoles modernes et respectueuses de l'environnement.",
            duration: "3 ans"
        },
        {
            icon: Bird,
            title: "Élevage & Bien-être Animal",
            description: "Apprenez les meilleures pratiques d'élevage éthique et de gestion des exploitations.",
            duration: "2 ans"
        },
        {
            icon: Globe,
            title: "Gestion Environnementale",
            description: "Devenez acteur du changement avec notre programme de protection de l'environnement.",
            duration: "3 ans"
        },
        {
            icon: TreePine,
            title: "Agroforesterie",
            description: "Combinez agriculture et foresterie pour des systèmes productifs et durables.",
            duration: "2 ans"
        }
    ]
    return (
        <section className="py-24 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 py-2 px-4 bg-[#2D5A27]/10 rounded-full mb-6">
                        <GraduationCap className="w-4 h-4 text-[#2D5A27]" />
                        <span className="text-sm font-medium text-[#2D5A27]">Nos formations</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2D5A27] mb-4">
                        Des parcours d'excellence
                    </h2>
                    <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
                        Découvrez nos formations conçues pour vous préparer aux métiers de demain
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {
                        formations.map((formation, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2D5A27]/10"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-linear-to-br from-[#2D5A27] to-[#4A7C43] rounded-2xl flex items-center justify-center shrink-0">
                                        <formation.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-[#2D5A27]">{formation.title}</h3>
                                            <span className="px-3 py-1 bg-[#8B7355]/10 rounded-full text-xs font-medium text-[#8B7355]">
                                                {formation.duration}
                                            </span>
                                        </div>
                                        <p className="text-[#5A5A5A] leading-relaxed">{formation.description}</p>
                                        <button className="mt-4 text-[#2D5A27] font-medium flex items-center gap-2 group">
                                            En savoir plus
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}