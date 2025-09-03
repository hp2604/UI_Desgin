import React from "react";

function Section2(){
    return ( 
    <>
    <div className=" flex m-auto  md:w-[1300px] md:h-[556px] md:mt-6 " >
        <div className="md:w-[433.33px] md:h-[556px] ">
            <img src="/src/assests/img-1.png" alt="" className=" rounded-md md:h-[254.7px] md:w-[413.33px] " />
            <h6 className=" text-[rgba(30,45,120,1)] md:w-[368.95px] md:h-[79.98px]  md:font-semibold md:text-[27px] md:leading-[34.99px]   ">
                Pick the dentist that fits all your needs the best
            </h6>
            <p className=" text-[rgba(138,138,138,1)] md:w-[394.75px] md:h-[95px] md:font-normal md:text-[15px] leading-6">
               Lorem ipsum dolor sit amet, eu duo ferri labor. Mea ex modo reque senserit, et sed hinc dolor, scaevola sum salutandi expetendis vix ne. Eros dicat his sum mel quod mundi consequat sum. 
            </p>
            <p className=" text-[rgba(30,45,120,1)] md:font-semibold md:text-xs md:leading-6 md:tracking-[2.4px]">
                READ MORE
            </p>
        </div>
         <div className="md:w-[433.33px] md:h-[556px] ">
             <img src="/src/assests/img-2.png" alt="" className=" rounded-md md:h-[254.7px] md:w-[413.33px] " />
             <ul className=" text-[rgba(138,138,138,1)]  md:font-normal md:text-[15px] md:leading-6 ml-2.5 md:mt-2   ">
                <li className="md:leading-7">+ Professional dental services 24/7</li>
                <li className="md:leading-7">+ Oral hygiene advisory & assessment</li>
                <li className="md:leading-7">+ Oral and maxillofacial surgery</li>
                <li className="md:leading-7">+ Dental public health insurance</li>
                <li className="md:leading-7">+ Free online appointment booking</li>
                <li className="md:leading-7">+ Various cosmetic dentistry services</li>
                <li className="md:leading-7">+ Special care dentistry services</li>
             
             </ul>
         </div>
           <div className="md:w-[433.33px] md:h-[556px]  ">
            <img src="/src/assests/img-3.png" alt="" className="md:h-[480px] md:w-[433.33px]"/>
           </div>
    </div>

    <div className=" flex flex-col m-auto  md:w-[1300px] md:h-[265px]">
        <div className="flex">
            <div className="flex  md:w-[398.33px] md:h-[96px]" >
                <img src="/src/assests/img-4.png" alt="" />
                <div>
                     <h2> Root Canal Specialist</h2>
                     <p> Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                </div>
            </div>
            <div className="flex  md:w-[398.33px] md:h-[96px]" >
                <img src="/src/assests/img-4.png" alt="" />
                <div>
                     <h2> Root Canal Specialist</h2>
                     <p> Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                </div>
            </div>
            <div className="flex  md:w-[398.33px] md:h-[96px]" >
                <img src="/src/assests/img-4.png" alt="" />
                <div>
                     <h2> Root Canal Specialist</h2>
                     <p> Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                </div>
            </div>
            
        </div>
        <div></div>
    </div>
    </>
    );
}

export default Section2;