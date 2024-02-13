/* eslint-disable react/prop-types */
export default function LefttNewsCard({ dt }) {
  // console.log(dt);
  const { title, description, publishedAt, urlToImage,author } = dt;
  return (
    <>
      {description && urlToImage ? (
        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{description}</p>
            <p className="mt-5 text-base text-[#5C5955]">{publishedAt}</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src={urlToImage} alt="thumb" />
            {author && <p className="mt-5 text-base text-[#5C5955]">
              Illustration: {author}
            </p>}
            
          </div>
        </div>
      ) :
      
       (  <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
            {title}
          </h3>
        </a>
       {urlToImage && <img className="w-full" src={urlToImage} alt="thumb" />} 

        <p className="text-base text-[#292219]">
         {description}
        </p>
        <p className="mt-5 text-base text-[#94908C]">{publishedAt}</p>
      </div>
    </div>) }
    </>
  );
}
