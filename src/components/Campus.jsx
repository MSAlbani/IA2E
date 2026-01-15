import { MapPin } from "lucide-react"
import { motion } from "motion/react"
import image from '../assets/item5.jpg'
import image1 from "../assets/item1.jpg"
import image2 from "../assets/item2.jpg"
import image3 from "../assets/item8.jpg"
import image4 from "../assets/item4.jpg"
import image5 from "../assets/item7.jpg"

export default function Campus() {

    const campusImages = [
        image, image1, image2, image3, image4, image5
    ];
    return (
        <section id="campus" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center rounded-full gap-2 px-4 py-2 bg-[#4A7C43]/10 mb-6">
                        <MapPin className="w-4 h-4 text-[#4A7C43]" />
                        <span className="text-sm font-medium text-[#4A7C43]">Notre campus</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2D5A27] mb-4">
                        Un cadre d'exception
                    </h2>
                    <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
                        Des espaces de nature au service de votre apprentissage
                    </p>

                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {campusImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 row-span-2' : ''
                                }`}
                        >
                            <img
                                src={image}
                                alt={`Campus IA2E ${index + 1}`}
                                className={`w-full object-cover ${index === 0 ? 'h-96' : 'h-44'}`}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#2D5A27]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}