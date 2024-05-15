import { Link } from "react-router-dom";
import { socials } from "../utils/socialsUtils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>

              <ul className="font-medium text-gray-500 dark:text-gray-400">
                {socials.map((social, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={social.href}
                      target="_blank"
                      className="hover:font-bold text-slate-900 transition-all duration-300 dark:hover:text-[#FFA447]"
                    >
                      {social.icon()} {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex items-center justify-center text-black dark:text-gray-400">
          <span className="gap-4 text-sm">
            &#169; Copyright |{" "}
            <Link
              to="https://tusharupadhyay.vercel.app/"
              className="hover:font-bold transition-all text-gray-500 dark:text-gray-400  duration-300 dark:hover:text-[#FFA447] "
            >
              Tushar Upadhyay
            </Link>{" "}
            | {currentMonth}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
