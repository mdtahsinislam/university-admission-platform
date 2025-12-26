
// //C:\Web-Development\MyNextjs Journey\tripgraphy\components\CompareModal.tsx
// export default function CompareModal({ universities }: any) {
//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
//       <table className="bg-white p-6">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>GPA</th>
//             <th>IELTS</th>
//             <th>Tuition</th>
//           </tr>
//         </thead>
//         <tbody>
//           {universities.map((u: any) => (
//             <tr key={u.id}>
//               <td>{u.name}</td>
//               <td>{u.min_gpa}</td>
//               <td>{u.min_ielts}</td>
//               <td>${u.tuition}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



"use client";

export default function ComparisonModal({
  universities,
  onClose
}: any) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-5xl p-6 relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          University Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Criteria</th>
                {universities.map((uni: any) => (
                  <th key={uni.id} className="border p-2">
                    {uni.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2 font-semibold">
                  GPA Requirement
                </td>
                {universities.map((uni: any) => (
                  <td key={uni.id} className="border p-2">
                    {uni.min_gpa}
                  </td>
                ))}
              </tr>

              <tr className="bg-gray-50">
                <td className="border p-2 font-semibold">
                  IELTS Requirement
                </td>
                {universities.map((uni: any) => (
                  <td key={uni.id} className="border p-2">
                    {uni.min_ielts}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="border p-2 font-semibold">
                  Tuition Fee ($)
                </td>
                {universities.map((uni: any) => (
                  <td key={uni.id} className="border p-2">
                    {uni.tuition}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
