const API_URL = "https://clothing-ai-backend.onrender.com";

export async function apiGet(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  return res.json();
}

export async function apiPost(endpoint, data) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
