import { NextRequest, NextResponse } from "next/server";
import { submitToFormstack, FormSubmission } from "@/lib/formstack";
import redis from "@/lib/redis";

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

    // Check cache for rate limiting (simple example)
    const cacheKey = `form_submission_${body.email}`;
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(
        { error: "Please wait a moment before submitting again" },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
          },
        },
      );
    }

    // Submit to Formstack
    const result = await submitToFormstack(body);

    // Cache the submission for 1 minute to avoid repeated test-submits
    await redis.setex(cacheKey, 60, "submitted");

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
