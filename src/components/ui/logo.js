"use client";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Logo({ ultrasonic }) {
  const [showLogo, setShowLogo] = useState(ultrasonic === 0);

  useEffect(() => {
    setShowLogo(ultrasonic === 0);
  }, [ultrasonic]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-1000 ease-in-out">
      <Head>
        <title>IoT Logo Animation</title>
      </Head>
      {showLogo ? (
        <div className="flex flex-col items-center justify-center transition-opacity duration-1000 ease-in">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-75"></div>
            <div className="relative">
              <img
                src="/iot.png" // replace with your IoT logo path
                alt="IoT Logo"
                className="w-40 h-40 animate-bounce"
              />
            </div>
          </div>
          <h1 className="text-4xl text-white font-bold mt-6">IoT</h1>
        </div>
      ) : (
        <div className="opacity-0 transition-opacity duration-1000 ease-out"></div>
      )}
    </div>
  );
}
