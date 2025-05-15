import Button from "../Button";
import ItemHeader from "../ItemHeader";
import Logo from "../Logo";

export default function Header() {
  return (
    <div className="flex flex-row items-center w-[95%] h-[10%] text-white py-5">
      <Logo />
      <div className="w-[60%] text-black flex flex-row justify-between px-10 font-montserrat">
        <nav className="flex flex-row justify-between items-center w-[50%]">
          <ItemHeader value="Home" />
          <ItemHeader value="About" />
          <ItemHeader value="Booking" />
          <ItemHeader value="Cars" />
          <ItemHeader value="Contacts" />
        </nav>

        <div className="mr-15">
          <Button
            height="2.2rem"
            width="8rem"
            fontSize=".8rem"
            buttonName="Login | Sign Up"
          />
        </div>
      </div>
    </div>
  );
}
