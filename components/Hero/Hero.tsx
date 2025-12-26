
// // //C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\page.tsx
// // const Hero =()=>{
// //     return (
// //         <div>
// //        provide image section 
// //         </div>
// //     )
// // }
// // export default Hero


// // C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\page.tsx
// // C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\page.tsx



// ///C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\Hero.tsx
// "use client";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div className="relative h-screen w-full">
      
//       {/* Background Image */}
//       <Image
//         src="/images/pexels-pixabay-267885.jpg"
//         alt="A beautiful wooden pier and resort over calm ocean water at sunset."
//         fill
//         className=""
//         priority
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10"></div>

//       {/* Hero Content */}
//       {/* <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center mt-12">
//         <h1 className="text-3xl mt-32 md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
//           Discover Your Tropical Escape
//         </h1> */}
//         <div className="relative z-20 flex flex-col items-center justify-start h-full text-white px-4 text-left pt-32">
//   <h1 className="text-3xl md:text-5xl lg:text-8xl font-extrabold tracking-tight mt-80 drop-shadow-lg">
//     Discover Your Tropical Escape
//   </h1>


//         <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-3xl drop-shadow-md">
//           Journey to breathtaking destinations and create memories that last a lifetime.
//         </p>

//         <button
//           className="bg-teal-500 hover:bg-teal-600 transition duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-xl uppercase tracking-wider"
//           onClick={() => console.log("Explore button clicked")}
//         >
//           Start Exploring Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;




//****************GPTTTTT now use */

// 'use client'
// import { motion } from 'framer-motion'
// import SearchBar from '../SearchBar'


// export default function Hero() {
// return (
// <section className="h-screen bg-cover bg-center flex items-center justify-center">
// <div className="text-center">
// <motion.h1
// initial={{ y: 50, opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
// className="text-6xl font-bold"
// >
// Find Your Dream University
// </motion.h1>
// <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
// <SearchBar />
// </motion.div>
// </div>
// </section>
// )
// }





////gpt22222222
// "use client";
// import { motion } from "framer-motion";
// import SearchBar from "../SearchBar";

// export default function Hero() {
//   return (
//     <div className="h-screen bg-cover bg-center flex items-center justify-center">
//       <motion.div
//         initial={{ y: 80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="text-center"
//       >
//         <h1 className="text-6xl font-bold text-white mb-6">
//           Find Your Dream University
//         </h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <SearchBar />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }





//C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\Hero.tsx
'use client'

import { motion } from 'framer-motion'
import SearchBar from '../SearchBar'

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/images/pexels-pixabay-267885.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Find Your Dream University
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-xl mx-auto"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  )
}
