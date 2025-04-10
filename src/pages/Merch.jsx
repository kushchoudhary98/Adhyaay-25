import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { Loader2 } from "lucide-react";

export default function Merch() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="relative md:w-[80vw] w-[90vw] md:h-[90vh] h-[80vh] translate-y-[5vh] overflow-hidden flex flex-col md:flex-row bg-[#ffffff06] backdrop-blur-3xl rounded-4xl z-30">
        <div className="text-white w-full md:mt-5 flex items-center justify-center md:p-20 p-5">
          <div className="text-3xl font-bold w-fit flex justify-center flex-col p-5 md:p-20 rounded-4xl">
            <div className="text-[20px] md:text-2xl ">The<br /> <span className="text-6xl md:text-9xl font-extrabold font-marker">Official TShirt</span><br/> of Adhyaay'25</div>
          </div>
        </div>

        {/* Spline Model Section */}
        <div className="absolute bottom-0 z-10 w-full h-[100vh] translate-y-[20%] md:translate-y-0 md:h-[80vh] flex justify-center items-center">
          {loading && (
            <div className="absolute flex items-center justify-center w-full h-full bg-gray-800/80">
              <Loader2 className="animate-spin text-white w-10 h-10" />
            </div>
          )}
          <div className="w-full h-full scale-[0.65] md:scale-100 flex items-center justify-center">
            <Spline
              scene="https://prod.spline.design/eioFOwKyu0T7k23M/scene.splinecode"
              className={`w-full h-full ${loading ? "hidden" : "block"}`}
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}