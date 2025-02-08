import { IoMdPin } from "react-icons/io";

const Entry = (props) => {
  return (
    <div className="flex border-gray-200 pb-8 border-b-2">
      <img
        className="w-1/3 rounded-lg shrink-0 object-cover overflow-hidden mt-8"
        src={props.img.src}
        alt={props.img.alt}
      />

      <div className="ml-5 mr-5 m-auto">
        <IoMdPin className="size-4 text-[#F55A5A] inline" />
        <span className="font-inter font-normal tracking-widest ">
          {props.country}
        </span>
        <a href={props.googleMapsLink} target="_blank">
          <span className="text-gray-400 underline font-inter ml-3 font-normal">
            View on Google Maps
          </span>
        </a>
        <h1
          className="font-inter font-bold text-2xl text-[#2B283A] mb-4 mt-2
        "
        >
          {props.title}
        </h1>
        <h2 className="font-inter font-bold text-sm mb-2.5">{props.dates}</h2>
        <p className="font-inter font-normal font-sm text-[#2B283A]">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Entry;
