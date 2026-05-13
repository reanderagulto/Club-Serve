import axios from "axios";

const FORMSTACK_API_URL = process.env.FORMSTACK_API_URL;
const FORMSTACK_ACCESS_TOKEN = process.env.FORMSTACK_ACCESS_TOKEN;

export interface FormSubmission {
  // Define the form fields based on your Formstack form
  name: string;
  email: string;
  message?: string;
}

export async function submitToFormstack(data: FormSubmission) {
  try {
    const response = await axios.post(
      `${FORMSTACK_API_URL}/form/${process.env.FORMSTACK_FORM_ID}/submission.json`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${FORMSTACK_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Formstack submission error:", error);
    throw new Error("Failed to submit form");
  }
}
