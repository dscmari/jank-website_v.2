"use server"

import { redirect } from "next/navigation";


export async function submitForm(formData: FormData) {
  const apiKey = process.env.STATIC_FORMS_KEY!;
  
  formData.append('apiKey', apiKey);
  
  const response = await fetch('https://api.staticforms.dev/submit', {
    method: 'POST',
    body: formData,
  });
  
  const result = await response.json();
  console.log()
  
  //Workaround weil staticforms keinen boolean zurückschickt
  if (result.success === true || result.message.includes("successfully")) {
    redirect('/danke/');
  } else {
    throw new Error(result.message || 'Submission failed');
  }
}