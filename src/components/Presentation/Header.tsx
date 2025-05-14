import Button from "../Button";
import ItemHeader from "../ItemHeader";

export default function Header() {
  return (
    <div className="flex flex-row items-center w-[95%] h-[10%] text-white py-5">
      <div className="w-[40%] text-center text-orange-primary text-2xl font-kanit font-bold tracking-widest">
        CARENT
      </div>
      <div className="w-[60%] text-black flex flex-row justify-between px-10 font-montserrat">
        <nav className="flex flex-row justify-between items-center w-[50%]">
          <ItemHeader value="Home" />
          <ItemHeader value="About" />
          <ItemHeader value="Booking" />
          <ItemHeader value="Cars" />
          <ItemHeader value="Contacts" />
        </nav>

        <div className="mr-15">
          <Button height="2rem" fontSize=".7rem" buttonName="Login | Sign Up" />
        </div>
      </div>
    </div>
  );
}
