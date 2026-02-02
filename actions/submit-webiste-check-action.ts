"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitWebsiteCheck(data: { website: string, email: string }) {
  try {
    const { error } = await resend.emails.send({
      from: "Website Formular <webform@jankroesche.de>",
      to: "jan@jankroesche.de",
      subject: "Website Check Anfrage",
      html: 
      `<div>
        <h3>Website Check</h3>
        <p>
            <strong>URL:</strong> ${data.website}<br />
            <strong>Mail:</strong> ${data.email}
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
