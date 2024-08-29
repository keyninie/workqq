export async function GET(request) {
  // ตัวอย่างการรับค่าจาก query string
  const { searchParams } = new URL(request.url);
  const redStatus = searchParams.get('red') || 'off';
  const greenStatus = searchParams.get('green') || 'off';

  // คุณสามารถเก็บสถานะไฟใน database หรือ state ของโปรเจคก็ได้
  // ในกรณีนี้เราจะตอบกลับสถานะที่ได้รับมา
  return new Response(JSON.stringify({ red: redStatus, green: greenStatus }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { red, green } = await request.json();

  // ส่งสถานะไฟไปยัง Raspberry Pi Pico ผ่าน HTTP request หรือ WebSocket
  // ในตัวอย่างนี้เราจะแค่ตอบกลับสถานะที่ได้รับมา
  return new Response(JSON.stringify({ red, green }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function toggleLED(redStatus, greenStatus) {
  const response = await fetch('/api/toggleLight', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ red: redStatus, green: greenStatus }),
  });

  const result = await response.json();
  console.log('Current LED Status:', result);
}

// ตัวอย่างการเรียกใช้ API
toggleLED('on', 'off');

