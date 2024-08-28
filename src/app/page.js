"use client";  // Add this at the top

export default function Home() {
  const toggleLight = async (lightId, action) => {
    try {
      const res = await fetch('/api/toggleLight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lightId, action }),
      });

      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error toggling light:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 left-0 w-full bg-gray-200 dark:bg-zinc-800 p-4 z-20">
        <div className="flex justify-center">
          <h1 className="text-xl font-bold">raspberry pi pico</h1>
        </div>
      </nav>

      <div className="mt-20 grid grid-cols-2 gap-4">
        <div className="w-40 h-40 bg-blue-500 flex flex-col items-center justify-center">
          <p className="text-white mb-2">ไฟแดง</p>
          <button
            onClick={() => toggleLight(1, 'toggle')}
            className="bg-white text-blue-500 px-2 py-1 rounded"
          >
            เปิด/ปิด
          </button>
        </div>
        <div className="w-40 h-40 bg-red-500 flex flex-col items-center justify-center">
          <p className="text-white mb-2">ไฟเขียว</p>
          <button
            onClick={() => toggleLight(2, 'toggle')}
            className="bg-white text-red-500 px-2 py-1 rounded"
          >
            เปิด/ปิด
          </button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-4">
        <div className="w-60 h-60 bg-green-500 flex flex-col items-center justify-center">
          <p className="text-white mb-2">Box 3</p>
          <button
            onClick={() => toggleLight(3, 'toggle')}
            className="bg-white text-green-500 px-2 py-1 rounded"
          >
            เปิด/ปิด
          </button>
        </div>
        <div className="w-60 h-60 bg-yellow-500 flex flex-col items-center justify-center">
          <p className="text-white mb-2">Box 4</p>
          <button
            onClick={() => toggleLight(4, 'toggle')}
            className="bg-white text-yellow-500 px-2 py-1 rounded"
          >
            เปิด/ปิด
          </button>
        </div>
        <div className="w-60 h-60 bg-yellow-500 flex flex-col items-center justify-center">
          <p className="text-white mb-2">Box 4</p>
          <button
            onClick={() => toggleLight(4, 'toggle')}
            className="bg-white text-yellow-500 px-2 py-1 rounded"
          >
            เปิด/ปิด
          </button>
        </div>
        <div className="w-60 h-60 bg-yellow-500 flex flex-col items-center justify-center">
          <p className="text-white mb-2">Box 4</p>
          <button
            onClick={() => toggleLight(4, 'toggle')}
            className="bg-white text-yellow-500 px-2 py-1 rounded"
          >
            เปิด/ปิด
          </button>
        </div>
      </div>
    </main>
  );
}
