import React, { useState } from 'react'

const Counters = () => {
  const [lifepointsOption, setLifePointsOption] = useState(20);

  const [dropdownOpen, setdropdownOpen] = useState(true);
  const [optionMenuState, setOptionMenuState] = useState(false);


  return (
    <div className='border border-slate-900 w-full mt-3 p-2 flex justify-center'>

        <div className="relative">
          <button
            onClick={() => setdropdownOpen(!dropdownOpen)}
            className="text-white mx-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          >
            Counters:
            {dropdownOpen ? (
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37 18L25 30L13 18"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 30L25 18L37 30"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <div className="bg-white w-32 rounded absolute top-10 left-9 flex justify-center items-center">
            <div
              className="divide-y divide-slate-100 rounded border-2 border-white w-full"
              hidden={dropdownOpen}
            >
              <button
                onClick={() => (setLifePointsOption(20))}
                className={
                  lifepointsOption === 20
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                +1/+1
              </button>

              <button
                onClick={() => (setLifePointsOption(30))}
                className={
                  lifepointsOption === 30
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                +0/+1
              </button>

              <button
                onClick={() => (setLifePointsOption(40))}
                className={
                  lifepointsOption === 40
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                +0/+2
              </button>

              <button
                onClick={() => (setLifePointsOption(50))}
                className={
                  lifepointsOption === 40
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                +1/+0
              </button>

              <button
                onClick={() => (setLifePointsOption(50))}
                className={
                  lifepointsOption === 40
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                +1/+2
              </button>

              <button
                onClick={() => (setLifePointsOption(50))}
                className={
                  lifepointsOption === 40
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                +2/+0
              </button>

              <button
                onClick={() => (setLifePointsOption(50))}
                className={
                  lifepointsOption === 40
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                +2/+2
              </button>
            </div>
          </div>
        </div>

      </div>

  )
}

export default Counters