// pages/api/submitForm.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const googleFormsURL =
    "https://docs.google.com/forms/u/7/d/e/1FAIpQLSdtdxgclUq1TzbMIDi4EeG0xGucFManUtlrkOJl7s51xCJkGw/formResponse";

  try {
    const googleFormsRes = await fetch(googleFormsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(req.body).toString(),
    });

    if (googleFormsRes.ok) {
      res.json({ success: true });
    } else {
      res
        .status(googleFormsRes.status)
        .json({ success: false, error: "Error submitting to Google Forms" });
    }
  } catch (error) {
    console.error("Error submitting to Google Forms:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
