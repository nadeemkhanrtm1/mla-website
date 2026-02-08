import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = (await request.json()) as Record<string, string>;
    const {
      name,
      email,
      phone,
      message,
      query,
    } = body;

    // Use environment variables for credentials (more secure)
    const credentials = {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID || "utility-ridge-476415-h4",
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      universe_domain: "googleapis.com"
    };

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    const safeFormat = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID || "1emke4NAGU_Y6kcVDdYchurwYXhXsVxH6wf14nXjCvp8";

    const row = [
      safeFormat(),
      name,
      email,
      phone,
      query,
      message,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { majorDimension: "ROWS", values: [row] },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
