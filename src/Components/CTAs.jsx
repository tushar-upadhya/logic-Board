import { ImportIcon, LockIcon, VariableIcon } from "./Home";

const CTA = () => {
  return (
    <section className="text-slate-700">
      <div className="max-w-screen-xl px-4 mx-auto mb-0 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-lg mx-auto text-center ">
          <h2 className="text-3xl font-bold sm:text-4xl text-slate-700">
            Key Features
          </h2>

          <p className="mt-4 text-slate-400">
            Explore the amazing features that make our app stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="items-center justify-center block p-8 transition shadow-xl rounded-xl"
            href="#"
          >
            <VariableIcon className="w-10 h-10 text-slate-700" />

            <h2 className="mt-4 text-xl font-bold text-slate-500">
              Customizable Workspace
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Customize your workspace to fit your team's needs and enhance
              productivity.
            </p>
          </a>

          <a className="block p-8 transition shadow-xl rounded-xl " href="#">
            <ImportIcon className="w-10 h-10 text-slate-700" />

            <h2 className="mt-4 text-xl font-bold text-slate-500">
              Easy Integrations
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Integrate with your favorite tools and boost your productivity.
            </p>
          </a>

          <a className="block p-8 transition shadow-xl rounded-xl" href="#">
            <LockIcon className="w-10 h-10 text-slate-700" />

            <h2 className="mt-4 text-xl font-bold text-gray-500">
              Secure & Reliable
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              We prioritize your data security and system reliability.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
