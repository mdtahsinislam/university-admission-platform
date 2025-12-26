// 'use client'
// export default function ApplyForm() {
// async function submit(e:any){
// e.preventDefault()
// const form = Object.fromEntries(new FormData(e.target))
// await fetch('/api/apply',{method:'POST',body:JSON.stringify(form)})
// }
// return (
// <form onSubmit={submit} className="p-6">
// <input name="university_id" placeholder="University ID" />
// <input name="name" placeholder="Name" />
// <input name="email" />
// <input name="gpa" />
// <input name="ielts" />
// <button>Apply</button>
// </form>
// )
// }


//C:\Web-Development\MyNextjs Journey\tripgraphy\components\ApplyForm.tsx

//C:\Web-Development\MyNextjs Journey\tripgraphy\components\ApplyForm.tsx
// "use client";
// import { useState } from "react";

// export default function ApplyForm({ universityId }: any) {
//   const [gpa, setGpa] = useState("");
//   const [ielts, setIelts] = useState("");

//   const submit = async () => {
//     const res = await fetch("/api/apply", {
//       method: "POST",
//       body: JSON.stringify({ universityId, gpa, ielts }),
//     });

//     if (!res.ok) alert("Not Eligible");
//     else alert("Application Submitted");
//   };

//   return (
//     <div>
//       <input placeholder="GPA" onChange={e => setGpa(e.target.value)} />
//       <input placeholder="IELTS" onChange={e => setIelts(e.target.value)} />
//       <button onClick={submit}>Apply</button>
//     </div>
//   );
// }

//C:\Web-Development\MyNextjs Journey\tripgraphy\components\ApplyForm.tsx

// "use client";
// import { useState } from "react";

// export default function ApplyForm({ universityId }: any) {
//   const [step, setStep] = useState(1);

//   const [form, setForm] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     gpa: "",
//     ielts: ""
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submit = async () => {
//     const res = await fetch("/api/apply", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         universityId,
//         ...form
//       })
//     });

//     if (!res.ok) {
//       alert("❌ Not eligible based on GPA / IELTS");
//     } else {
//       alert("✅ Application Submitted Successfully");
//     }
//   };

//   return (
//     <>
//       {/* STEP 1 */}
//       {step === 1 && (
//         <div className="space-y-4">
//           <input
//             name="full_name"
//             placeholder="Full Name"
//             className="border p-2 w-full"
//             onChange={handleChange}
//           />
//           <input
//             name="email"
//             placeholder="Email"
//             className="border p-2 w-full"
//             onChange={handleChange}
//           />
//           <input
//             name="phone"
//             placeholder="Phone"
//             className="border p-2 w-full"
//             onChange={handleChange}
//           />

//           <button
//             onClick={() => setStep(2)}
//             className="bg-cyan-600 text-white px-4 py-2 rounded"
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* STEP 2 */}
//       {step === 2 && (
//         <div className="space-y-4">
//           <input
//             name="gpa"
//             placeholder="GPA"
//             className="border p-2 w-full"
//             onChange={handleChange}
//           />
//           <input
//             name="ielts"
//             placeholder="IELTS"
//             className="border p-2 w-full"
//             onChange={handleChange}
//           />

//           <div className="flex justify-between">
//             <button
//               onClick={() => setStep(1)}
//               className="border px-4 py-2 rounded"
//             >
//               Back
//             </button>
//             <button
//               onClick={submit}
//               className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//               Submit Application
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ApplyForm({ universityId }: any) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    gpa: "",
    ielts: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          universityId,
          ...form
        })
      });

      if (!res.ok) {
        toast.error("❌ Not eligible based on GPA / IELTS");
      } else {
        toast.success("✅ Application Submitted Successfully");
        // Reset form after successful submission
        setForm({
          full_name: "",
          email: "",
          phone: "",
          gpa: "",
          ielts: ""
        });
        setStep(1); // Back to step 1
      }
    } catch (error) {
      toast.error("❌ Something went wrong");
    }
  };

  return (
    <>
      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <input
            name="full_name"
            value={form.full_name}
            placeholder="Full Name"
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <input
            name="email"
            value={form.email}
            placeholder="Email"
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <input
            name="phone"
            value={form.phone}
            placeholder="Phone"
            className="border p-2 w-full"
            onChange={handleChange}
          />

          <button
            onClick={() => setStep(2)}
            className="bg-cyan-600 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <input
            name="gpa"
            value={form.gpa}
            placeholder="GPA"
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <input
            name="ielts"
            value={form.ielts}
            placeholder="IELTS"
            className="border p-2 w-full"
            onChange={handleChange}
          />

          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="border px-4 py-2 rounded"
            >
              Back
            </button>
            <button
              onClick={submit}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit Application
            </button>
          </div>
        </div>
      )}
    </>
  );
}
