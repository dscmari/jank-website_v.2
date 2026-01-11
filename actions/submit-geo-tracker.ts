"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitGeoTracker(formData: FormData) {
  // Bestelldaten
  const promptNr = formData.get("promptNr");
  const promptsText = formData.get("promptsText");

  // Rechnungsanschrift
  const company = formData.get("company");
  const anrede = formData.get("anrede");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  // Adresse
  const street = formData.get("street");
  const plz = formData.get("plz");
  const city = formData.get("city");
  const country = formData.get("country");

  // Kontakt & Steuer
  const email = formData.get("email");
  const invoiceEmail = formData.get("invoiceEmail"); // Korrigiert von 'invoiceEemail'
  const usstID = formData.get("usstID");

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mariannoekel@gmail.com",
      subject: "Webinar Anfrage",
      html: `<div style="font-family: sans-serif; line-height: 1.5; color: #333;">
  <h2 style="color: #bc002d;">Neue Bestellung: GEO Tracker</h2>
  
  <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">Bestelldetails</h3>
  <p>
    <strong>Anzahl Prompts:</strong> ${promptNr}<br />
    <strong>Eingegebene Prompts:</strong><br />
    <span style="white-space: pre-wrap; font-style: italic;">${promptsText}</span>
  </p>

  <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">Rechnungsanschrift</h3>
  <p>
    <strong>Firma:</strong> ${company || "Nicht angegeben"}<br />
    <strong>Anrede:</strong> ${anrede === "male" ? "Herr" : "Frau"}<br />
    <strong>Name:</strong> ${firstName} ${lastName}<br />
    <strong>Straße:</strong> ${street}<br />
    <strong>PLZ / Ort:</strong> ${plz} ${city}<br />
    <strong>Land:</strong> ${country}
  </p>

  <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">Kontakt & Steuern</h3>
  <p>
    <strong>E-Mail:</strong> ${email}<br />
    <strong>E-Mail für Rechnung:</strong> ${
      invoiceEmail || "Wie Kontakt-Mail"
    }<br />
    <strong>Umsatzsteuer-ID:</strong> ${usstID}
  </p>
</div>
    `,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Resend Error:", error);
    // Hier keinen Wert zurückgeben, sondern den Fehler für das System bestehen lassen
    throw new Error("Mail-Versand fehlgeschlagen");
  }

  redirect("/danke");
}
