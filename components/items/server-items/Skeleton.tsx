import { FaImage } from "react-icons/fa";

export const SkeletonHeader = () => {
  return (
    <div className="relative w-full space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
      <div className="h-36 w-full rounded-lg bg-neutral-600"></div>
    </div>
  );
};

export const SkeletonSlide = () => {
  return (
    <div className="relative w-full space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
      <div className=" h-[600px] w-full rounded-lg bg-neutral-600 text-[100px] flex justify-center items-center">
        <FaImage />
      </div>
    </div>
  );
};

export const SkeletonShortIntro = () => {
  return (
    <div className="relative w-full space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
      <div className="flex gap-2 py-5 p:px-0 d:px-5 d:flex-row p:flex-col">
        <div className=" flex-[45%] h-[500px]">
          <FaImage />
        </div>
        <div className=" flex-[55%] p:px-0 d:px-10">
          <div className="h-36 w-full rounded-lg bg-neutral-600"></div>
          <div className="space-y-3">
            <div className="h-5 w-8/12 rounded-full bg-neutral-600"></div>
            <div className="space-y-1">
              <div className="h-4 w-full rounded-full bg-neutral-600 shadow"></div>
              <div className="h-4 w-full rounded-full bg-neutral-600 shadow"></div>
              <div className="h-4 w-full rounded-full bg-neutral-600 shadow"></div>
              <div className="h-4 w-7/12 rounded-full bg-neutral-600 shadow"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-16 rounded-full bg-neutral-600"></div>
              <div className="h-5 w-12 rounded-full bg-neutral-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------- custom  -----------------------------------------------
