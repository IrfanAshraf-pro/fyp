import React from "react";

const AdminTutorRequestRow = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-2 bg-gray-400 rounded-sm">
      <p className="w-2/12 text-xl md:w-5/12 text-primary">Ali</p>
      <p className="text-xl md:w-4/12 text-primary">3.8</p>
      <p className="text-xl md:w-4/12 text-primary">7</p>
      <div className="flex gap-1 sm:flex-row">
        <button className="flex items-center justify-center p-1 rounded-lg bg-main w-fit sm:p-2 hover:bg-raisinBlack">
          <svg
            fill="#fff"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
            className="w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>cancel2</title>{" "}
              <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>{" "}
            </g>
          </svg>
        </button>
        <button className="flex items-center justify-center p-1 rounded-lg bg-main w-fit sm:p-2 hover:bg-raisinBlack">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
            className="w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clip-path="url(#clip0_429_11249)">
                {" "}
                <path
                  d="M20 7.00018L10 17.0002L5 12.0002"
                  stroke="#fff"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_429_11249">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminTutorRequestRow;
