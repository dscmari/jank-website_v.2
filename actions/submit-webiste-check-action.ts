"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitWebsiteCheck(formData: FormData) {
  const website = formData.get("website");
  const email = formData.get("email");

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mariannoekel@gmail.com",
      subject: "Website Check Anfrage",
      html: 
      `<div>
        <h3>Website Check</h3>
        <p>
            <strong>URL:</strong> ${website}<br />
            <strong>Mail:</strong> ${email}
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
