// 'use client'
// import { useEffect, useState } from 'react'
// import UniversityCard from './UniversityCard'


// export default function SearchBar() {
// const [tuition, setTuition] = useState(50000)
// const [data, setData] = useState<any[]>([])


// useEffect(() => {
// fetch(`/api/universities?tuition=${tuition}`)
// .then(res => res.json())
// .then(setData)
// }, [tuition])


// return (
// <div>
// <input type="range" min={5000} max={50000}
// value={tuition} onChange={e => setTuition(+e.target.value)} />


// <div className="grid grid-cols-3 gap-4 mt-6">
// {data.map(u => <UniversityCard key={u.id} uni={u} />)}
// </div>
// </div>
// )
// }


//C:\Web-Development\MyNextjs Journey\tripgraphy\components\SearchBar.tsx
"use client";
import { useState } from "react";

export default function SearchBar({ onChange }: any) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg">
      <select onChange={e => onChange("country", e.target.value)}>
        <option value="">Country</option>
        <option>USA</option>
        <option>UK</option>
        <option>Canada</option>
       
      </select>

      <select onChange={e => onChange("degree", e.target.value)}>
        <option value="">Degree</option>
        <option>Bachelor</option>
        <option>Master</option>
      </select>
    </div>
  );
}
