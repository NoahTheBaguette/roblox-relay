export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz2geTtIiT_G3UikkxrxNzS2T6ufZtWd3K3BAKREBZDz6sFKLkV88tC6I-zuLcGaJT-/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send('Relay error: ' + err.message);
  }
}
