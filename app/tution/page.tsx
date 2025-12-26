

// //*****Tuition & Eligibility */
// //C:\Web-Development\MyNextjs Journey\tripgraphy\app\tution\page.tsx

// //C:\Web-Development\MyNextjs Journey\tripgraphy\app\tution\page.tsx

// //C:\Web-Development\MyNextjs Journey\tripgraphy\app\tution\page.tsx
// const Tution=()=>{
//     return(
//         <div>Tuition & Eligibility</div>
//     )
// }
// export default  Tution  


//////chat gpttt
// "use client";
// import { useEffect, useState } from "react";
// import UniversityCard from "@/components/UniversityCard";

// export default function TutionPage() {
//   const [universities, setUniversities] = useState([]);
//   const [maxFee, setMaxFee] = useState(50000);
//   const [gpa, setGpa] = useState(0);
//   const [ielts, setIelts] = useState(0);

//   useEffect(() => {
//     fetch(`/api/universities?maxFee=${maxFee}`)
//       .then(res => res.json())
//       .then(setUniversities);
//   }, [maxFee]);

//   return (
//     <div className="max-w-7xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Tuition & Eligibility</h1>

//       <label>Max Tuition: ${maxFee}</label>
//       <input
//         type="range"
//         min={5000}
//         max={50000}
//         value={maxFee}
//         onChange={e => setMaxFee(Number(e.target.value))}
//         className="w-full"
//       />

//       <div className="flex gap-4 my-4">
//         <input placeholder="GPA" onChange={e => setGpa(Number(e.target.value))} />
//         <input placeholder="IELTS" onChange={e => setIelts(Number(e.target.value))} />
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {universities.map((uni: any) => (
//           <UniversityCard key={uni.id} uni={uni} gpa={gpa} ielts={ielts} />
//         ))}
//       </div>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import UniversityCard from "@/components/UniversityCard";
import ComparisonModal from "@/components/ComparisonModal";

export default function TutionPage() {
  const [universities, setUniversities] = useState<any[]>([]);
  const [maxFee, setMaxFee] = useState(50000);
  const [gpa, setGpa] = useState(0);
  const [ielts, setIelts] = useState(0);

  const [selected, setSelected] = useState<any[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  useEffect(() => {
    fetch(`/api/universities?maxFee=${maxFee}`)
      .then(res => res.json())
      .then(setUniversities);
  }, [maxFee]);

  const toggleCompare = (uni: any) => {
    setSelected(prev => {
      const exists = prev.find((u: any) => u.id === uni.id);
      if (exists) {
        return prev.filter((u: any) => u.id !== uni.id);
      }
      if (prev.length < 3) {
        return [...prev, uni];
      }
      return prev;
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-3">
        Tuition & Eligibility Comparison
      </h1>
       <h2>Compare universities side by side based on GPA, IELTS, and tuition fees.</h2>

      {/* Filters */}
      <label className="font-semibold">
        Max Tuition: ${maxFee}
      </label>
      <input
        type="range"
        min={5000}
        max={50000}
        value={maxFee}
        onChange={e => setMaxFee(Number(e.target.value))}
        className="w-full my-4"
      />

      <div className="flex gap-4 mb-6">
        <input
          className="border p-2"
          placeholder="Your GPA"
          onChange={e => setGpa(Number(e.target.value))}
        />
        <input
          className="border p-2"
          placeholder="Your IELTS"
          onChange={e => setIelts(Number(e.target.value))}
        />
      </div>

      {/* University Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {universities.map((uni: any) => (
          <UniversityCard
            key={uni.id}
            uni={uni}
            gpa={gpa}
            ielts={ielts}
            selected={!!selected.find(u => u.id === uni.id)}
            onCompare={toggleCompare}
          />
        ))}
      </div>

      {/* Compare Button */}
      {selected.length >= 2 && (
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setShowCompare(true)}
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Compare Now ({selected.length})
          </button>
        </div>
      )}

      {/* Modal */}
      {showCompare && (
        <ComparisonModal
          universities={selected}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}
