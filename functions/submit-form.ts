import type { ExportedHandler } from "@cloudflare/workers-types";

export interface Env {
  FORMSTACK_API_URL: string;
  FORMSTACK_ACCESS_TOKEN: string;
  FORMSTACK_FORM_ID: string;
}

interface FormSubmission {
  name: string;
  businessName: string;
  clubType: string;
  location: string;
  email: string;
  mobileNumber: string;
  message?: string;
}

const FORMSTACK_FIELD_IDS = {
  name: "195312671",
  businessName: "195312672",
  clubType: "195312673",
  location: "195312882",
  email: "195312883",
  mobileNumber: "195312884",
  message: "195312885",
} as const;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const body: FormSubmission = await request.json();

      // Validation
      if (!body.name || !body.email) {
        return new Response(
          JSON.stringify({ error: "Name and email are required" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      // Check environment variables
      if (
        !env.FORMSTACK_API_URL ||
        !env.FORMSTACK_ACCESS_TOKEN ||
        !env.FORMSTACK_FORM_ID
      ) {
        throw new Error("Missing Formstack environment configuration");
      }

      // Prepare FormData for Formstack
      const formData = new FormData();

      const fieldMappings = [
        { id: FORMSTACK_FIELD_IDS.name, value: body.name },
        { id: FORMSTACK_FIELD_IDS.businessName, value: body.businessName },
        { id: FORMSTACK_FIELD_IDS.clubType, value: body.clubType },
        { id: FORMSTACK_FIELD_IDS.location, value: body.location },
        { id: FORMSTACK_FIELD_IDS.email, value: body.email },
        { id: FORMSTACK_FIELD_IDS.mobileNumber, value: body.mobileNumber },
        { id: FORMSTACK_FIELD_IDS.message, value: body.message || "" },
      ];

      for (const { id, value } of fieldMappings) {
        formData.append(`field_${id}`, value);
      }

      // Submit to Formstack
      const response = await fetch(
        `${env.FORMSTACK_API_URL}/form/${env.FORMSTACK_FORM_ID}/submission`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.FORMSTACK_ACCESS_TOKEN}`,
          },
          body: formData,
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Formstack error:", errorText);
        return new Response(
          JSON.stringify({
            error: "Failed to submit form to Formstack",
            details: errorText,
          }),
          {
            status: response.status,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      const result = await response.json();

      return new Response(JSON.stringify({ success: true, data: result }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("Worker error:", error);
      return new Response(
        JSON.stringify({
          error: "Internal server error",
          message: error instanceof Error ? error.message : "Unknown error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
} satisfies ExportedHandler<Env>;
