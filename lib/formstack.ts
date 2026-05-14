import axios from "axios";

const FORMSTACK_API_URL = process.env.FORMSTACK_API_URL;
const FORMSTACK_ACCESS_TOKEN = process.env.FORMSTACK_ACCESS_TOKEN;
const FORMSTACK_FORM_ID = process.env.FORMSTACK_FORM_ID;

const FORMSTACK_FIELD_IDS = {
  name: "195312671",
  businessName: "195312672",
  clubType: "195312673",
  location: "195312882",
  email: "195312883",
  mobileNumber: "195312884",
  message: "195312885",
} as const;

export interface FormSubmission {
  name: string;
  businessName: string;
  clubType: string;
  location: string;
  email: string;
  mobileNumber: string;
  message?: string;
}

export async function submitToFormstack(data: FormSubmission) {
  if (!FORMSTACK_API_URL || !FORMSTACK_ACCESS_TOKEN || !FORMSTACK_FORM_ID) {
    throw new Error("Missing Formstack environment configuration");
  }

  try {
    const formData = new FormData();

    // Define field mappings for optimization
    const fieldMappings = [
      { id: FORMSTACK_FIELD_IDS.name, value: data.name },
      { id: FORMSTACK_FIELD_IDS.businessName, value: data.businessName },
      { id: FORMSTACK_FIELD_IDS.clubType, value: data.clubType },
      { id: FORMSTACK_FIELD_IDS.location, value: data.location },
      { id: FORMSTACK_FIELD_IDS.email, value: data.email },
      { id: FORMSTACK_FIELD_IDS.mobileNumber, value: data.mobileNumber },
      { id: FORMSTACK_FIELD_IDS.message, value: data.message || "" },
    ];

    // Append fields using a loop for efficiency
    for (const { id, value } of fieldMappings) {
      formData.append(`field_${id}`, value);
    }

    const response = await axios.post(
      `${FORMSTACK_API_URL}/form/${FORMSTACK_FORM_ID}/submission.json`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${FORMSTACK_ACCESS_TOKEN}`,
          // FormData automatically sets Content-Type to multipart/form-data
        },
      },
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Formstack error:", error.response?.data);
    } else {
      console.error(error);
    }

    throw error;
  }
}
