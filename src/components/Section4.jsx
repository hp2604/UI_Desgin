import React from "react";

function Section4(){
    return (
    <>
    <div className="flex flex-col    md:gap-9 ">

        {/* Heading Section */}
        <div className="flex flex-col items-center ">

            {/* Tittle */}
            <div className="  text-[rgba(221,51,51,1)] font-semibold  md:text-[13px] md:leading-6 md:tracking-[1.69px]   md:w-[147.07px] md:h-[18px]">
                 OUR DEAR CLIENTS
            </div>

            {/* Heading */}
            <div className=" md:text-center text-[rgba(30,45,120,1)] md: md:h-[70px] md:font-semibold md:text-[52px] md:leading-[60.01px]">
                What People Say
            </div>

            {/* Tag Line */}
            <div className="text-[rgba(138,138,138,1)] md:w-[705.56px]  md:leading-8 md:font-normal md:text-[19px]">
                In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.
            </div>
        </div>

        {/* Reviews */}
        <div className="flex justify-center ">
            <div className="flex flex-col items-center md:w-[380px] md:h-[506.98px] ">
                <img src="/src/assets/user1.png" alt=""  className="  md:w-[140px] md:h-[140px]"/>
                <div className="md:w-[380px] ">
                    <h4 className=" text-center text-[rgba(30,45,120,1)] font-semibold   md:h-[45px] md:text-[27px] leading-[34.99px] " >Quick, easy & reliable</h4>
                </div>
                <div  className="text-[rgba(138,138,138,1)] text-center md:w-[368px] md:font-normal md:text-[15px] md:leading-6">
                    Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.
                </div>
            </div>
             <div className="flex flex-col items-center md:w-[380px] md:h-[506.98px] ">
                <img src="/src/assets/user2.png" alt=""  className="  md:w-[140px] md:h-[140px]"/>
                <div className="md:w-[380px] ">
                    <h4 className=" text-center text-[rgba(30,45,120,1)] font-semibold   md:h-[45px] md:text-[27px] leading-[34.99px] " >The best clinic in town</h4>
                </div>
                <div  className="text-[rgba(138,138,138,1)] text-center md:w-[368px] md:font-normal md:text-[15px] md:leading-6">
                 Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.
                </div>
            </div>
             <div className="flex flex-col items-center md:w-[380px] md:h-[506.98px] ">
                <img src="/src/assets/user3.png" alt=""  className="  md:w-[140px] md:h-[140px]"/>
                <div className="md:w-[380px] ">
                    <h4 className=" text-center text-[rgba(30,45,120,1)] font-semibold   md:h-[45px] md:text-[27px] leading-[34.99px] " >The true professionals</h4>
                </div>
                <div  className="text-[rgba(138,138,138,1)] text-center md:w-[368px] md:font-normal md:text-[15px] md:leading-6">
                   Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.
                </div>
            </div>

        </div>
    </div>
    </>
    );
}

export default Section4;