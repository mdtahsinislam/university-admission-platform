

// //C:\Web-Development\MyNextjs Journey\tripgraphy\app\page.tsx

// //C:\Web-Development\MyNextjs Journey\tripgraphy\app\page.tsx


// //C:\Web-Development\MyNextjs Journey\tripgraphy\app\page.tsx
// 'use client'

// import { motion } from 'framer-motion'
// //import SearchBar from '../SearchBar'
// import SearchBar from '../components/SearchBar'  // Correct path
// export default function Hero() {
//   return (
//     <section
//       className="h-screen bg-cover bg-center flex items-center justify-center relative"
//       style={{ backgroundImage: "url('/images/pexels-pixabay-267885.jpg')" }}
//     >
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative z-10 text-center px-4">
//         <motion.h1
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
//         >
//           Find Your Dream University
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="max-w-xl mx-auto"
//         >
//           <SearchBar />
//         </motion.div>
//       </div>
//     </section>
//   )
// }



'use client'
import Hero from "@/components/Hero/Hero";

export default function HomePage() {
  return <Hero />;
}
