import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const maxFee = searchParams.get("maxFee");

  const { data } = await supabase
    .from("universities")
    .select("*")
    .lte("tuition", Number(maxFee));

  return NextResponse.json(data);
}
