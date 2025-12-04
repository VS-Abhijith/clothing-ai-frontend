const API_URL = "https://clothing-ai-business.onrender.com";  
// Replace with your Render backend URL

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`);
  return res.json();
}

export async function apiPost(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}
