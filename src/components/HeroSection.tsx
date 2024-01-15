export default function HeroPage() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 bg-gradient-to-tr from-blue-700 via-blue-700 to-blue-400 bg-opacity-75">
      <div className="container flex flex-col items-center space-y-4 text-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Deezey
          </span>{" "}
          marketspace.
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-200">
          Discover the benefits of our products that are designed to enhance
          your productivity.
        </p>
      </div>
    </section>
  );
}
