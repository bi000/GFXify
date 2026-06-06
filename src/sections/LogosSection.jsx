import react from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';
const LogosSection = () => {
 return(
    <section  className="py-10 px-0 relative section-spacing">
                <motion.div
                  className="text-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Logos
                    </span>
                  </h2>
                  <p className="text-gray-400 text-lg">Showcase of our best work</p>
                </motion.div>
        <div className="max-w-8xl mx-0 w-full  h-[80px] rounded-md">
            <video autoPlay loop muted className="w-full h-auto rounded-lg mb-10 rounded-md">
                <source src="videos/Logos3.mp4" type="video/mp4" />
                Your browser does not support the video tag.    
            </video>
            </div>
    </section>
 )   
}
export default LogosSection;