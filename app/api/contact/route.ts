import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Initialize Google Sheets API
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toISOString(), name, email, subject, message]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
} 