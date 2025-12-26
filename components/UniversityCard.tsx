// export default function UniversityCard({ uni }: any) {
// return (
// <div className="border p-4 rounded">
// <h3>{uni.name}</h3>
// <p>Tuition: ${uni.tuition}</p>
// <p>Min GPA: {uni.min_gpa}</p>
// <p>IELTS: {uni.min_ielts}</p>
// </div>
// )
// }


//C:\Web-Development\MyNextjs Journey\tripgraphy\components\UniversityCard.tsx

//C:\Web-Development\MyNextjs Journey\tripgraphy\components\UniversityCard.tsx
// export default function UniversityCard({ uni, gpa, ielts, onCompare }: any) {
//   const eligible = gpa >= uni.min_gpa && ielts >= uni.min_ielts;

//   return (
//     <div className="border p-4 rounded-lg">
//       <h3 className="font-bold">{uni.name}</h3>
//       <p>${uni.tuition}</p>

//       {!eligible && (
//         <span className="text-red-500 font-semibold">
//           Not Eligible
//         </span>
//       )}

//       <input type="checkbox" onChange={() => onCompare(uni)} />
//     </div>
//   );
// }






// export default function UniversityCard({ uni, gpa, ielts, onCompare }: any) {
//   const eligible = gpa >= uni.min_gpa && ielts >= uni.min_ielts;

//   return (
//     <div className="border p-4 rounded-lg">
//       <h3 className="font-bold">{uni.name}</h3>
//       <p>Tuition: ${uni.tuition}</p>

//       {!eligible && (
//         <span className="text-red-500 font-semibold">
//           Not Eligible
//         </span>
//       )}

//       <input type="checkbox" onChange={() => onCompare?.(uni)} /> Compare
//     </div>
//   );
// }


// export default function UniversityCard({
//   uni,
//   gpa,
//   ielts,
//   selected,
//   onCompare
// }: any) {
//   const eligible = gpa >= uni.min_gpa && ielts >= uni.min_ielts;

//   return (
//     <div className="border p-4 rounded-lg shadow-sm">
//       <h3 className="font-bold text-lg">{uni.name}</h3>
//       <p className="text-sm">Tuition: ${uni.tuition}</p>

//       {!eligible && (
//         <span className="inline-block mt-2 text-red-500 font-semibold">
//           Not Eligible
//         </span>
//       )}

//       <div className="mt-4 flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={selected}
//           onChange={() => onCompare(uni)}
//         />
//         <span>Compare</span>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import ApplyModal from "./ApplyModal";

export default function UniversityCard({
  uni,
  gpa,
  ielts,
  selected,
  onCompare
}: any) {
  const [openApply, setOpenApply] = useState(false);
  const eligible = gpa >= uni.min_gpa && ielts >= uni.min_ielts;

  return (
    <>
      <div className="border p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg">{uni.name}</h3>
        <p>Tuition: ${uni.tuition}</p>

        {!eligible && (
          <span className="text-red-500 font-semibold block mt-2">
            Not Eligible
          </span>
        )}

        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selected}
              onChange={() => onCompare?.(uni)}
            />
            Compare
          </label>

          <button
            onClick={() => setOpenApply(true)}
            className="bg-cyan-600 text-white px-4 py-1 rounded"
          >
            Apply Now
          </button>
        </div>
      </div>

      {openApply && (
        <ApplyModal
          university={uni}
          onClose={() => setOpenApply(false)}
        />
      )}
    </>
  );
}
