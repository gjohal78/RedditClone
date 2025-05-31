// src/app/api/proxy/route.js
import axios from 'axios';

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Forward the request to your backend
    const { data } = await axios.post('http://localhost:5454/ai/chat', { prompt });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error in proxying request', error: error.message }), { status: 500 });
  }
}
