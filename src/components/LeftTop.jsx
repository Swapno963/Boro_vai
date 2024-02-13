/* eslint-disable no-unused-vars */
export default function LeftTop({leftTop,leftSecond}) {
  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <a href="#">
            <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
              {leftTop?.title}
            </h3>
          </a>
          <p className="text-base text-[#5C5955]">
          {leftTop?.description  || leftTop?.content }
          </p>
          <p className="mt-5 text-base text-[#5C5955]">{
                
                new Date(leftTop?.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' })
                }</p>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <img className="w-full" src={leftTop?.urlToImage} alt="thumb" />
          <p className="mt-5 text-base text-[#5C5955]">
            Illustration:  {leftTop?.author}
          </p>
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
        <div className="col-span-12 md:col-span-6">
          <a href="">
            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
             {leftSecond?.title}
            </h3>
          </a>
          <p className="text-base text-[#292219]">
          {leftSecond?.description  || leftSecond?.content }
          </p>
          <p className="mt-5 text-base text-[#5C5955]">{
                
                new Date(leftSecond?.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' })
                }</p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <img className="w-full" src={leftSecond?.urlToImage} alt="thumb" />
        </div>
      </div>
    </>
  );
}
