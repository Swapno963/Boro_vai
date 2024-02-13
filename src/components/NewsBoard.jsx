/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import useNewsQuery from "../hooks/useNewsQuery";
import LefttNewsCard from "./LefttNewsCard";
import RightNewCard from "./RightNewCard";
import { NewsDataContext } from "../context";
import LeftTop from "./LeftTop";
import RightTop from "./RightTop";

export default function NewsBoard() {
  const {addData,nData} = useContext(NewsDataContext)
    

    const { newsData, error, loading } = useNewsQuery();

  const leftData = [];
  const rightData = [];
  const imgData = [];



  const rithtTop = '';
  const rightOther=''


  nData?.map(dt=>{
    if(dt.urlToImage !== null && dt.title !== null && dt.content !== null){
      leftData.push(dt)
    }
    else{
      rightData.push(dt)
    }
  })


  // new locig
   // new logic
   const leftTop= leftData[0];
   const leftSecond =leftData[1];
   const rightTop = leftData[2];
   const Other =leftData.slice(3);
    Other.concat(rightData)


  // console.log('leftTop',leftTop);
  // console.log('leftSecond',leftSecond);
  // console.log('leftOther',Other);

  // deviding array
  let midpointIndex = Math.ceil(Other.length / 2);

// Split the array into two parts
let firstHalf = Other.slice(0, midpointIndex);
let secondHalf = Other.slice(midpointIndex);

// console.log(firstHalf);  
// console.log(secondHalf); 
  // console.log('firstHalf :', firstHalf);
  // console.log('secondHalf :', secondHalf);
  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
           
             <LeftTop leftTop={leftTop} leftSecond={leftSecond}/>

            {firstHalf.map((data,index)=>(
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="col-span-12 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                  {data?.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">
                  {data?.description}
                </p>
                <p className="mt-5 text-base text-[#94908C]">{
                
                new Date(data?.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' })
                }</p>
              </div>
            </div>
            ))}
          </div>

          {/* side short */}
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
             
              <RightTop rightTop={rightTop} />
              {
                secondHalf.map((data,index)=>(
                  <div key={index} className="col-span-12 md:col-span-8">
                  <div className="col-span-12 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                       {data?.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                  {data?.description  || data?.content }
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">{
                
                new Date(data?.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' })
                }</p>
                  </div>
                </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
