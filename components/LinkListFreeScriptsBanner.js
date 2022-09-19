
import Image from "next/image";
import CallToAction from "./Elements/CallToAction";
export default function LinkListFreeScriptsBanner({ data }) {
  return (
    <main className="main-padding font-main-regular flex flex-col lg:flex-row main-padding-vertical gap-x-20">
      <div className="w-full lg:w-1/2 pt-20 flex items-center justify-center">
        <div className="imageContainer relative w-full md:w-[1400px] lg:w-[1600px] cursor-pointer">
          <Image
            src={data.image1}
            alt="media_references"
            layout="fill"
            className="image_"
            priority
          />
          <CallToAction
          text="Valorant Cheats"
          link={data.link1}
          arrowdirect={true}
          additionalCSS={"mt-10"}
        />
        </div>
      </div>
      <div className="w-full lg:w-1/2 pt-20 flex items-center justify-center">
        <div className="imageContainer relative w-full md:w-[1400px] lg:w-[1600px] cursor-pointer">
          <Image
            src={data.image2}
            alt="media_references"
            layout="fill"
            className="image_"
            priority
          />
          <CallToAction
          text="GTA V / FiveM / Grand 5 RP Cheats"
          link={data.link2}
          arrowdirect={true}
          additionalCSS={"mt-10"}
        />
        </div>
      </div>
    </main>
  );
}
