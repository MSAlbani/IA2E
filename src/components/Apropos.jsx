import { motion } from "motion/react"
import { GraduationCap, Leaf, Users } from "lucide-react"
export default function Apropos() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B7355]/10 rounded-full mb-6">
                            <Users className="w-4 h-4 text-[#8B7355]" />
                            <span className="text-sm font-medium text-[#8B7355]">Notre histoire</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#2D5A27] mb-6">
                            Une école engagée pour la planète
                        </h2>

                        <p className="text-lg text-[#5A5A5A] leading-relaxed mb-6">
                            Depuis plus de 10 ans, l'IA2E forme les professionnels de l'agriculture,
                            de l'élevage et de l'environnement. Notre mission : transmettre un savoir-faire
                            d'excellence tout en respectant notre planète.
                        </p>

                        <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8">
                            Situés au cœur d'un campus de 50 hectares, nous offrons un environnement
                            d'apprentissage unique où théorie et pratique se conjuguent au quotidien.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-[#4A7C43]/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Leaf className="w-5 h-5 text-[#2D5A27]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#2D5A27]">Pratique terrain</h4>
                                    <p className="text-sm text-[#8B7355]">Apprentissage concret</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-[#4A7C43]/20 rounded-lg flex items-center justify-center shrink-0">
                                    <GraduationCap className="w-5 h-5 text-[#2D5A27]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#2D5A27]">Diplômes reconnus</h4>
                                    <p className="text-sm text-[#8B7355]">Formation certifiée</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                src="../public/sortie.jpg"
                                alt="Étudiants en formation"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover"
                            />
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                src="../public/classe.jpg"
                                alt="Campus nature"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                            />
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                src="../public/plantation.jpg"
                                alt="Travaux pratiques"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover"
                            />
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                src="../public/elevage.jpg"
                                alt="Élevage"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                            />
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}