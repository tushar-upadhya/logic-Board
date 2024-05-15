import { Link } from "react-router-dom";
import fav from "../../public/fav.ico";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      // cleanup the event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`mx-auto flex h-[4.5rem] w-full max-w-[1344px] items-center px-5 sm:px-10 sticky top-0 z-50 ${
        isScrolled ? "backdrop-filter backdrop-blur-md  bg-opacity-30" : ""
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src={fav} alt="logo" width={60} height={60} />
      </Link>
    </header>
  );
};

export default Header;
