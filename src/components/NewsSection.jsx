import React from "react";

function NewsSection(){
    return(
    <>
     <div className="flex flex-col  items-center md:gap-9 ">

        {/* Heading Section */}
        <div className="flex flex-col items-center ">

            {/* Tittle */}
            <div className="  text-[rgba(221,51,51,1)] font-semibold  md:text-[13px] md:leading-6 md:tracking-[1.69px]   md:w-[164.22PX] md:h-[18px]">
               DENTAL PRACTICE
            </div>

            {/* Heading */}
            <div className=" md:text-center text-[rgba(30,45,120,1)] md: md:h-[70px] md:font-semibold md:text-[52px] md:leading-[60.01px]">
               Read Latest News
            </div>

            {/* Tag Line */}
            <div className=" text-center text-[rgba(138,138,138,1)] md:w-[815.31px]  md:leading-8 md:font-normal md:text-[19px]">
                In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.
            </div>
        </div>
        <div className=" flex justify-center   md:w-[1300px] md:h-[480.66px]  " >
        <div className=" flex flex-col  md:gap-3  md:w-[433.33px] md:h-[556px] ">
            <img src="/src/assets/news1.png" alt="" className=" rounded-md md:h-[254.7px] md:w-[413.33px] " />
            <p className=" text-[rgba(221,51,51,1)]  md:h-[20px] md:font-semibold md:text-[20px] md:tracking-[1.69px] md:leading-6">17th November 2020,Pediatric</p>
            <h6 className=" text-[rgba(30,45,120,1)] md:w-[368.95px]  md:font-semibold md:text-[27px] md:leading-[34.99px]   ">
               All about invisalign
            </h6>
            <p className=" text-[rgba(138,138,138,1)] md:w-[394.75px]  md:font-normal md:text-[15px] leading-6">
             Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>
            <p className=" text-[rgba(30,45,120,1)] md:font-semibold md:text-xs md:leading-6 md:tracking-[2.4px]">
                READ MORE
            </p>
        </div>

        <div className=" flex flex-col  md:gap-3  md:w-[433.33px] md:h-[556px] ">
            <img src="/src/assets/news2.png" alt="" className=" rounded-md md:h-[254.7px] md:w-[413.33px] " />
            <p className=" text-[rgba(221,51,51,1)]  md:h-[20px] md:font-semibold md:text-[20px] md:tracking-[1.69px] md:leading-6">17th November 2020,Pediatric</p>
            <h6 className=" text-[rgba(30,45,120,1)] md:w-[368.95px]  md:font-semibold md:text-[27px] md:leading-[34.99px]   ">
             Braces for teens
            </h6>
            <p className=" text-[rgba(138,138,138,1)] md:w-[394.75px]  md:font-normal md:text-[15px] leading-6">
             Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>
            <p className=" text-[rgba(30,45,120,1)] md:font-semibold md:text-xs md:leading-6 md:tracking-[2.4px]">
                READ MORE
            </p>
        </div>
         <div className=" flex flex-col  md:gap-3  md:w-[433.33px] md:h-[556px] ">
            <img src="/src/assets/news3.png" alt="" className=" rounded-md md:h-[254.7px] md:w-[413.33px] " />
            <p className=" text-[rgba(221,51,51,1)]  md:h-[20px] md:font-semibold md:text-[20px] md:tracking-[1.69px] md:leading-6">17th November 2020,Pediatric</p>
            <h6 className=" text-[rgba(30,45,120,1)] md:w-[368.95px]  md:font-semibold md:text-[27px] md:leading-[34.99px]   ">
              Dental association
            </h6>
            <p className=" text-[rgba(138,138,138,1)] md:w-[394.75px]  md:font-normal md:text-[15px] leading-6">
             Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>
            <p className=" text-[rgba(30,45,120,1)] md:font-semibold md:text-xs md:leading-6 md:tracking-[2.4px]">
                READ MORE
            </p>
        </div>
        
        </div>


        

        


        </div>

       
    </>
    );
}
export default NewsSection;