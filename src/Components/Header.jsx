import { GiWorld } from "react-icons/gi";
const Header = () => {
  return (
    <header className="flex justify-center items-center  w-full bg-[#F55A5A] h-14">
      <GiWorld className="text-white size-6 mr-2" />
      <h1 className="font-inter font-medium text-white">my travel journal.</h1>
    </header>
  );
};

export default Header;
