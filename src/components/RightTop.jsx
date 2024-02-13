/* eslint-disable react/prop-types */
export default function RightTop({rightTop}) {
  return (
    <>
      <div className="col-span-12 mb-6 md:col-span-8">
        <img className="w-full" src={rightTop?.urlToImage} alt="thumb" />
        <div className="col-span-12 mt-6 md:col-span-4">
          <a href="#">
            <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
            {rightTop?.title}
            </h3>
          </a>
          <p className="text-base text-[#292219]">
          {rightTop?.description  || rightTop?.content }
          </p>
          <p className="mt-5 text-base text-[#94908C]">{
                
                new Date(rightTop?.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' })
                }</p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="col-span-12 md:col-span-4">
          <a href="#">
            <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
              Why is Uber selling its autonomous-vehicle division?
            </h3>
          </a>
          <p className="text-base text-[#292219]">
            Self-driving cars were meant to be its future
          </p>
          <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
        </div>
      </div>
    </>
  );
}
