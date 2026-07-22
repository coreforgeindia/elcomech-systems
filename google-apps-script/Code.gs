/**
 * Google Apps Script for Elcomech Systems Website Forms
 * Spreadsheet ID: 1EchZ4zP3HOI_vNFtz9EZF0LYdT7xeKWyS9oOct2hYKA
 * Script ID: 1JhChjkAupW1YCnfDrjf3P4M_HzKXjrcX7d1psqYs0fLMgP5tH1DAPj-A
 * 
 * Instructions:
 * 1. Open Google Sheet: https://docs.google.com/spreadsheets/d/1EchZ4zP3HOI_vNFtz9EZF0LYdT7xeKWyS9oOct2hYKA/edit
 * 2. Click Extensions > Apps Script
 * 3. Replace all code in Code.gs with this file's code.
 * 4. Click Deploy > New deployment.
 * 5. Select type: Web App.
 * 6. Set "Execute as": "Me".
 * 7. Set "Who has access": "Anyone".
 * 8. Click Deploy, authorize permissions, and copy the Web App URL.
 * 9. Paste the Web App URL into .env.local as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 */

const SPREADSHEET_ID = "1EchZ4zP3HOI_vNFtz9EZF0LYdT7xeKWyS9oOct2hYKA";
const BCC_EMAILS = "info@coreforgeindia.com, info@elcomechsystems.com";

function doPost(e) {
  try {
    const contents = e.postData ? e.postData.contents : null;
    if (!contents) {
      return responseJSON({ status: "error", message: "No post data received" });
    }

    const data = JSON.parse(contents);
    const formType = data.formType || "get_quote";

    if (formType === "get_quote") {
      return handleGetQuote(data);
    } else if (formType === "ict_fct_project") {
      return handleIctFctProject(data);
    } else {
      return responseJSON({ status: "error", message: "Unknown form type: " + formType });
    }
  } catch (err) {
    return responseJSON({ status: "error", message: err.toString() });
  }
}

function doGet(e) {
  return responseJSON({
    status: "success",
    message: "Elcomech Systems Apps Script Web App is running."
  });
}

function handleGetQuote(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName("Get Quote");
  if (!sheet) {
    sheet = ss.insertSheet("Get Quote");
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Email",
      "Phone",
      "Company",
      "Product Interest",
      "Estimated Quantity",
      "Expected Timeline",
      "Project Details",
      "Mail Sent",
      "What's the issue"
    ]);
    sheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#0055D4").setFontColor("#FFFFFF");
  }

  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const name = data.name || "";
  const email = data.email || "";
  const phone = data.phone || "";
  const company = data.company || "N/A";
  const interest = data.interest || "N/A";
  const quantity = data.quantity || "N/A";
  const timeline = data.timeline || "N/A";
  const message = data.message || "";

  let mailSent = "No";
  let mailIssue = "";

  try {
    if (email) {
      const subject = "Thank you for contacting Elcomech Systems - Quote Request Received";
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6; border: 1px solid #e0e0e0; padding: 24px; border-radius: 8px;">
          <div style="background-color: #0055D4; padding: 16px; text-align: center; border-radius: 6px 6px 0 0; color: #fff;">
            <h2 style="margin:0; font-size: 22px;">ELCOMECH SYSTEMS</h2>
            <p style="margin:4px 0 0; font-size: 13px; opacity: 0.9;">Precision Testing & Industrial Automation Solutions</p>
          </div>
          <div style="padding: 20px 0;">
            <p>Dear <strong>${escapeHtml(name)}</strong>,</p>
            <p>Thank you for reaching out to <strong>Elcomech Systems</strong>! We have got your request and will reply back in the meantime.</p>
            
            <div style="background-color: #f8f9fa; border-left: 4px solid #0055D4; padding: 16px; margin: 20px 0; border-radius: 4px;">
              <h3 style="margin-top:0; color: #0055D4; font-size: 16px;">Summary of Your Quote Request</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #666; width: 140px;"><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;"><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;"><strong>Phone:</strong></td><td>${escapeHtml(phone)}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;"><strong>Company:</strong></td><td>${escapeHtml(company)}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;"><strong>Product:</strong></td><td>${escapeHtml(interest)}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;"><strong>Quantity:</strong></td><td>${escapeHtml(quantity)}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;"><strong>Timeline:</strong></td><td>${escapeHtml(timeline)}</td></tr>
                <tr><td style="padding: 6px 0; color: #666; vertical-align: top;"><strong>Details:</strong></td><td>${escapeHtml(message)}</td></tr>
              </table>
            </div>

            <p style="font-size: 13px; color: #666;">Our engineering team is reviewing your requirements and will get back to you shortly.</p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888; text-align: center;">Elcomech Systems · Bengaluru - 560091, Karnataka, India</p>
          </div>
        </div>
      `;

      MailApp.sendEmail({
        to: email,
        bcc: BCC_EMAILS,
        subject: subject,
        htmlBody: htmlBody
      });

      mailSent = "Yes";
      mailIssue = "None";
    } else {
      mailSent = "No";
      mailIssue = "No recipient email address provided";
    }
  } catch (err) {
    mailSent = "No";
    mailIssue = err.toString();
  }

  sheet.appendRow([
    timestamp,
    name,
    email,
    phone,
    company,
    interest,
    quantity,
    timeline,
    message,
    mailSent,
    mailIssue
  ]);

  return responseJSON({ status: "success", mailSent: mailSent, mailIssue: mailIssue });
}

function handleIctFctProject(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName("ICT FCT Project");
  if (!sheet) {
    sheet = ss.insertSheet("ICT FCT Project");
    sheet.appendRow([
      "Timestamp",
      "Customer Name",
      "Project Name",
      "Email",
      "Phone",
      "Company",
      "Gerber Data",
      "CAD Data",
      "Test Points File",
      "Bottom 100mil",
      "Bottom 75mil",
      "Bottom 50mil",
      "Top 100mil",
      "Top 75mil",
      "Top 50mil",
      "Wiring Needed",
      "Wiring Details",
      "Tester Type",
      "Cable Type",
      "Fixture Type",
      "Manual Type",
      "Interface Panel",
      "Interface Blocks",
      "Extras",
      "Connector Side",
      "Connector Connect Method",
      "PCB Orientation",
      "Vacuum Pressure",
      "Multi Panel",
      "Mail Sent",
      "What's the issue"
    ]);
    sheet.getRange(1, 1, 1, 31).setFontWeight("bold").setBackground("#0055D4").setFontColor("#FFFFFF");
  }

  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const step1 = data.step1 || {};
  const step3 = data.step3 || {};
  const step4 = data.step4 || {};
  const step5 = data.step5 || {};
  const step6 = data.step6 || {};

  const customerName = step1.customerName || "";
  const projectName = step1.projectName || "";
  const email = step1.email || "";
  const phone = step1.phone || "";
  const company = step1.company || "N/A";

  const gerberUploaded = data.gerberUploaded ? "Uploaded" : "Pending";
  const cadUploaded = data.cadUploaded ? "Uploaded" : "Pending";
  const testPointsUploaded = data.testPointsUploaded ? "Uploaded" : "Pending";

  const bottom100 = step3.bottom100 || "0";
  const bottom75 = step3.bottom75 || "0";
  const bottom50 = step3.bottom50 || "0";
  const top100 = step3.top100 || "0";
  const top75 = step3.top75 || "0";
  const top50 = step3.top50 || "0";

  const wiringNeeded = step4.wiringNeeded || "no";
  const wiringDetails = step4.wiringDetails || "N/A";
  const testerType = step4.testerType || "N/A";
  const cableType = step4.cableType || "N/A";

  const fixtureType = step5.fixtureType || "manual";
  const manualType = step5.manualType || "N/A";
  const interfacePanel = step5.interfacePanel || "no";
  const interfaceBlocks = Array.isArray(step5.interfaceBlocks) ? step5.interfaceBlocks.join(", ") : (step5.interfaceBlocks || "None");

  const extras = Array.isArray(step6.extras) ? step6.extras.join(", ") : (step6.extras || "None");
  const connectorSide = step6.connectorSide || "none";
  const connectorConnect = step6.connectorConnect || "none";
  const pcbOrientation = step6.pcbOrientation || "N/A";
  const vacuumPressure = step6.vacuumPressure || "N/A";
  const multiPanel = step6.multiPanel || "no";

  let mailSent = "No";
  let mailIssue = "";

  try {
    if (email) {
      const subject = `ICT/FCT Fixture Project Request - ${projectName} (${customerName})`;
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #333; line-height: 1.6; border: 1px solid #e0e0e0; padding: 24px; border-radius: 8px;">
          <div style="background-color: #0055D4; padding: 16px; text-align: center; border-radius: 6px 6px 0 0; color: #fff;">
            <h2 style="margin:0; font-size: 22px;">ELCOMECH SYSTEMS</h2>
            <p style="margin:4px 0 0; font-size: 13px; opacity: 0.9;">ICT / FCT Fixture Project Confirmation</p>
          </div>
          <div style="padding: 20px 0;">
            <p>Dear <strong>${escapeHtml(customerName)}</strong>,</p>
            <p>Thank you for submitting your <strong>ICT / FCT Fixture Project</strong> request to <strong>Elcomech Systems</strong>!</p>
            <p>We got your request and will reply back in the meantime.</p>
            
            <div style="background-color: #f8f9fa; border-left: 4px solid #0055D4; padding: 16px; margin: 20px 0; border-radius: 4px;">
              <h3 style="margin-top:0; color: #0055D4; font-size: 16px;">Project Summary</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 5px 0; color: #666; width: 160px;"><strong>Customer Name:</strong></td><td>${escapeHtml(customerName)}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Project Name:</strong></td><td>${escapeHtml(projectName)}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Phone:</strong></td><td>${escapeHtml(phone)}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Company:</strong></td><td>${escapeHtml(company)}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Fixture Type:</strong></td><td>${escapeHtml(fixtureType.toUpperCase())} ${manualType !== 'N/A' ? '(' + escapeHtml(manualType) + ')' : ''}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Cable Type:</strong></td><td>${escapeHtml(cableType)}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Files Status:</strong></td><td>Gerber: ${gerberUploaded}, CAD: ${cadUploaded}, Test Points: ${testPointsUploaded}</td></tr>
                <tr><td style="padding: 5px 0; color: #666;"><strong>Extras:</strong></td><td>${escapeHtml(extras)}</td></tr>
              </table>
            </div>

            <p style="font-size: 13px; color: #666;">If you have any CAD/Gerber zip files or additional documentation, feel free to reply directly to this email.</p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888; text-align: center;">Elcomech Systems · Bengaluru - 560091, Karnataka, India</p>
          </div>
        </div>
      `;

      MailApp.sendEmail({
        to: email,
        bcc: BCC_EMAILS,
        subject: subject,
        htmlBody: htmlBody
      });

      mailSent = "Yes";
      mailIssue = "None";
    } else {
      mailSent = "No";
      mailIssue = "No recipient email address provided";
    }
  } catch (err) {
    mailSent = "No";
    mailIssue = err.toString();
  }

  sheet.appendRow([
    timestamp,
    customerName,
    projectName,
    email,
    phone,
    company,
    gerberUploaded,
    cadUploaded,
    testPointsUploaded,
    bottom100,
    bottom75,
    bottom50,
    top100,
    top75,
    top50,
    wiringNeeded,
    wiringDetails,
    testerType,
    cableType,
    fixtureType,
    manualType,
    interfacePanel,
    interfaceBlocks,
    extras,
    connectorSide,
    connectorConnect,
    pcbOrientation,
    vacuumPressure,
    multiPanel,
    mailSent,
    mailIssue
  ]);

  return responseJSON({ status: "success", mailSent: mailSent, mailIssue: mailIssue });
}

function responseJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
