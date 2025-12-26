

// //C:\Web-Development\MyNextjs Journey\tripgraphy\app\api\apply\route.ts
// import { supabase } from "@/lib/supabase";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { universityId, gpa, ielts } = await req.json();

//   const { data: uni } = await supabase
//     .from("universities")
//     .select("*")
//     .eq("id", universityId)
//     .single();

//   if (gpa < uni.min_gpa || ielts < uni.min_ielts) {
//     return new NextResponse("Not Eligible", { status: 400 });
//   }

//   await supabase.from("applications").insert({
//     university_id: universityId,
//     gpa,
//     ielts,
//   });

//   return NextResponse.json({ success: true });
// }




import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    universityId,
    full_name,
    email,
    phone,
    gpa,
    ielts,
  } = await req.json();

  // 1️⃣ Get university requirements from SQL
  const { data: uni, error } = await supabase
    .from("universities")
    .select("min_gpa, min_ielts")
    .eq("id", universityId)
    .single();

  if (error || !uni) {
    return new NextResponse("University not found", { status: 404 });
  }

  // 2️⃣ STRICT validation (assignment MUST)
  if (Number(gpa) < uni.min_gpa || Number(ielts) < uni.min_ielts) {
    return new NextResponse("Not Eligible", { status: 400 });
  }

  // 3️⃣ Save application to SQL
  const { error: insertError } = await supabase
    .from("applications")
    .insert({
      university_id: universityId,
      full_name,
      email,
      phone,
      gpa,
      ielts,
    });

  if (insertError) {
    return new NextResponse("Application failed", { status: 500 });
  }

  return NextResponse.json({ success: true });
}
