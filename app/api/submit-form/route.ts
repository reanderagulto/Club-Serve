import { NextRequest, NextResponse } from "next/server";
import { submitToFormstack, FormSubmission } from "@/lib/formstack";

export async function POST(request: NextRequest) {
  try {
    const body: FormSubmission = await request.json();

    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Submit to Formstack
    const result = await submitToFormstack(body);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
