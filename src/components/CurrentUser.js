import React from "react";

const CurrentUser = () => {
  return (
    <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="shadow-xl rounded-full border-none absolute -m-20 -ml-20 lg:-ml-16 max-w-[150px]"
                alt="biopic"
              />
            </div>
          </div>
          <div className="w-full text-center mt-20">
            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  3,360
                </span>
                <span className="text-sm text-slate-400">Views</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  2,454
                </span>
                <span className="text-sm text-slate-400">Purchases</span>
              </div>

              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  564
                </span>
                <span className="text-sm text-slate-400">Click-Throughs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
            Scott Capista
          </h3>
          <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
            Happy Town, Rhode Island
          </div>
        </div>
        <div className="mt-6 py-6 border-t border-slate-200 text-center">
          <div className="flex flex-wrap text-slate-700 text-sm justify-center">
            scott@streammeup.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
