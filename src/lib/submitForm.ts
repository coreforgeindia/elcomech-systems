/**
 * Helper to submit form data to Google Apps Script Web App
 */

export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  mailSent?: string;
  mailIssue?: string;
}

export async function submitToGoogleScript(data: Record<string, any>): Promise<FormSubmissionResult> {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.warn(
      'NEXT_PUBLIC_GOOGLE_SCRIPT_URL environment variable is not defined. Form payload logged:',
      data
    );
    // Return success in local preview mode if URL is not configured yet
    return {
      success: true,
      message: 'Logged locally (No Google Script Web App URL configured)',
    };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const json = await response.json();
      return {
        success: json.status === 'success',
        message: json.message,
        mailSent: json.mailSent,
        mailIssue: json.mailIssue,
      };
    }

    return { success: true };
  } catch (err: any) {
    console.warn('CORS or network error on fetch, retrying with no-cors fallback:', err);
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      return { success: true };
    } catch (e: any) {
      console.error('Failed to submit form:', e);
      return {
        success: false,
        message: e.message || 'Submission failed. Please try again.',
      };
    }
  }
}
