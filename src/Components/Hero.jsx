import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="flex-1">
      <section className="w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center p-4 space-y-4 text-center ">
            <div className="space-y-2">
              <h1 className="text-lg font-semibold text-slate-700 sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to RightBoard
              </h1>
              <p className="mx-auto text-slate-800 max-w-[700px]">
                Your Ultimate WorkSpace! Anytime,Anywhere.
              </p>
            </div>
            <div className="space-y-4">
              <Link
                className="inline-flex items-center justify-center h-10 px-8 mx-4 text-sm font-medium text-gray-900 transition-all duration-200 border rounded-sm hover:text-white hover:bg-gray-900"
                to="/draw"
              >
                Get Started
              </Link>
              <a
                className="inline-flex items-center justify-center h-10 px-8 font-medium border rounded-sm text-slate-700 hover:text-white hover:bg-gray-900"
                href="https://tldraw.dev/docs/editor"
              >
                <span className="text-sm">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
