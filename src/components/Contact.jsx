import { Mail, MapPin, Phone, CheckCircle, Send, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        sujet: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        // setSent(true)
        console.log(formData)
    }
    return (
        <section id="contact" className="py-24 bg-linear-to-br from-[#2D5A27] to-[#1E3D1B]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Mail className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Contactez-nous</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl text-white font-bold mb-6">Parlons de votre avenir</h2>

                        <p className="text-lg text-[#A8C5A3] leading-relaxed mb-10">
                            Vous avez des questions sur nos formations ? Notre équipe est à votre
                            disposition pour vous accompagner dans votre projet.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <p className="text-white font-medium">Adresse</p>
                                    <p className="text-[#A8C5A3]">Cité chinoise</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Téléphone</p>
                                    <p className="text-[#A8C5A3]">(+227) 96 09 71 59 / 90 66 58 25</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Email</p>
                                    <p className="text-[#A8C5A3]">contact@ia2e.edu</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-8">
                            <h3 className="text-2xl font-bold text-[#2D5A27] mb-6">Envoyez-nous un message</h3>


                            {
                                sent ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-[#4A7C43]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-[#2D5A27]" />
                                        </div>
                                        <h4 className="text-xl font-bold text-[#2D5A27] mb-2">Message envoyé !</h4>
                                        <p className="text-[#5A5A5A]">Nous vous répondrons dans les plus brefs délais.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label htmlFor="nom" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2D5A27] font-medium">Nom complet</label>
                                            <input
                                                id="nom"
                                                value={formData.nom}
                                                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                                required
                                                className="flex h-9 w-full border bg-transparent px-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 border-[#2D5A27]/20 focus:border-[#2D5A27] rounded-xl py-6"
                                                placeholder="Votre nom"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2D5A27] font-medium">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="flex h-9 w-full border bg-transparent px-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 border-[#2D5A27]/20 focus:border-[#2D5A27] rounded-xl py-6"
                                                placeholder="votre@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="sujet" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2D5A27] font-medium">Sujet</label>
                                            <input
                                                id="sujet"
                                                value={formData.sujet}
                                                onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                                                required
                                                className="flex h-9 w-full border bg-transparent px-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 border-[#2D5A27]/20 focus:border-[#2D5A27] rounded-xl py-6"
                                                placeholder="Objet de votre message"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="text-sm leading-none peer-disabled:cursor-not-allowed
                                             peer-disabled:opacity-70 text-[#2D5A27] font-medium">Message</label>
                                            <textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                                className="flex w-full border bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground
                                                 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed
                                                  disabled:opacity-50 md:text-sm mt-2 border-[#2D5A27]/20 focus:border-[#2D5A27] rounded-xl min-h-32"
                                                placeholder="Votre message..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={sending}
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors 
                                            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
                                             disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 px-4 w-full
                                              bg-[#2D5A27] hover:bg-[#1E3D1B] text-white py-6 rounded-xl text-lg font-medium"
                                        >
                                            {sending ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Envoyer le message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}