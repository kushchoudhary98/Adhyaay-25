<<<<<<< HEAD
import React, { useState } from "react";

import Spline from "@splinetool/react-spline";
import { Loader2 } from "lucide-react";

export default function Merch() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gray-700 px-6 py-10 text-white">
     
      
      {/* Details Section */}
      <div className="relative z-10 md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <h1 className="font-bold font-mono text-cyan-500 text-2xl md:text-4xl">Adhyaay-25 T-Shirt</h1>
        <p className="text-lg md:text-xl">Exclusive Fest Merchandise - Limited Edition</p>
        <p className="text-sm md:text-base">Price: <span className="font-semibold">₹499</span></p>
        <p className="text-sm md:text-base">Available Sizes: S, M, L, XL, XXL</p>
        <p className="italic text-gray-300">"Wear the spirit of Adhyaay-25 and make history!"</p>
      </div>

      {/* Spline Model Section */}
      <div className="relative z-10 md:w-1/2 w-full flex items-center justify-center">
        {loading && (
          <div className="absolute flex items-center justify-center w-full h-full bg-gray-800/80">
            <Loader2 className="animate-spin text-white w-10 h-10" />
          </div>
        )}
        <div className="w-full max-w-[500px] h-[600px] flex items-center justify-center">
          <Spline 
            scene="https://prod.spline.design/eioFOwKyu0T7k23M/scene.splinecode" 
            className={`w-full h-full ${loading ? 'hidden' : 'block'}`}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
=======
>>>>>>> ec10bbdf253220def8b2d36a481233c0e74e23b6
