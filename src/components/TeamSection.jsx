import React from "react";

function TeamSection(){
    return (
        <>
        <div className="flex flex-col  md:gap-9 ">

        {/* Heading Section */}
        <div className="flex flex-col items-center ">

            {/* Tittle */}
            <div className="  text-[rgba(221,51,51,1)] font-semibold  md:text-[13px] md:leading-6 md:tracking-[1.69px]   md:w-[164.22PX] md:h-[18px]">
                THE ALLSMILES TEAM 
            </div>

            {/* Heading */}
            <div className=" md:text-center text-[rgba(30,45,120,1)] md: md:h-[70px] md:font-semibold md:text-[52px] md:leading-[60.01px]">
               Meet Our Experts
            </div>

            {/* Tag Line */}
            <div className=" text-center text-[rgba(138,138,138,1)] md:w-[815.31px]  md:leading-8 md:font-normal md:text-[19px]">
                An delicata inimicus sea, vis equidem oporteat conclusion mundi et. Nec malis dolor fabellas ex, eu nec falli iuvaret. Per elitr eloquentiam an esse.
            </div>
        </div>

        {/* Doctors Info */}
        <div className="flex justify-center gap-2">
            <div className="md:w-[287.5px] md:h-[369.23px]">
                <img src="/src/assets/dr1.png" alt="" className="md:w-[287.5px] md:h-[289.58px]" />
                <div className=" flex flex-col  items-center md:w-[287.5px] md:h-[49.66px]">
                    <h3 className=" text-[rgba(30,45,120,1)] md:w-[130.4px] md:h-[31px]">Howard Holmes</h3>
                    <p className=" text-[rgba(221,51,51,1)] md:w-[130.26px] md:h-[18px]">ESTETIC DENTIST </p>
                </div>
            </div>
             <div className="md:w-[287.5px] md:h-[369.23px]">
                <img src="/src/assets/dr2.png" alt="" className="md:w-[287.5px] md:h-[289.58px]" />
                <div className=" flex flex-col  items-center  md:w-[287.5px] md:h-[49.66px] text-center">
                    <h3 className=" text-[rgba(30,45,120,1)] md:w-[130.4px] md:h-[31px]">Ella Thompson</h3>
                    <p className=" text-[rgba(221,51,51,1)] md:w-[160.26px] md:h-[18px]">DENTAL TECHNICIAN  </p>
                </div>
            </div>
             <div className="md:w-[287.5px] md:h-[369.23px]">
                <img src="/src/assets/dr3.png" alt="" className="md:w-[287.5px] md:h-[289.58px]" />
                <div className=" flex flex-col  items-center md:w-[287.5px] md:h-[49.66px] text-center">
                    <h3 className=" text-[rgba(30,45,120,1)] md:w-[130.4px] md:h-[31px]">Vincent Cooper</h3>
                    <p className=" text-[rgba(221,51,51,1)] md:w-[130.26px] md:h-[18px]">ESTETIC DENTIST </p>
                </div>
            </div>
             <div className="md:w-[287.5px] md:h-[369.23px]">
                <img src="/src/assets/dr4.png" alt="" className="md:w-[287.5px] md:h-[289.58px]" />
                <div className=" flex flex-col  items-center md:w-[287.5px] md:h-[49.66px] text-center">
                    <h3 className=" text-[rgba(30,45,120,1)] md:w-[130.4px] md:h-[31px]">Howard Holmes</h3>
                    <p className=" text-[rgba(221,51,51,1)] md:w-[160.26px] md:h-[18px]">DENTAL TECHNICIAN  </p>
                </div>
            </div>
        </div>
       </div>
        </>
    );
}

export default TeamSection;