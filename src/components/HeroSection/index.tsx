import TypewriterEffect from "../TypewriterEffect";

const HeroSection = () => {
  const strings = [
    "",
    "Hello",
    "Bonjour",
    "Hola",
    "Hallo",
    "Ciao",
    "Привет",
    "你好",
    "مرحبا",
    "こんにちは",
    "안녕하세요",
  ];
  return (
    <section>
      <div className={"prose m-auto block"}>
        <div
          className={
            "lg:text-3xl p-5 md:text-2xl text-center font-bold k bg-clip-text  text-transparent bg-primary-gradient"
          }
        >
          <TypewriterEffect strings={strings} />
        </div>

        <p className={"lg:text-3xl p-5 md:text-2xl text-center font-bold"}>
          Ajutăm brandurile să facă diferența.
        </p>
        <div className={"lg:text-2xl p-5 md:text-xl text-center font-bold"}>
          <p>Oferim soluții personalizate</p>
          <p> pentru a te ajuta să devii</p>
          <p> memorabil în mediul online.</p>
        </div>
        <div className={"lg:text-3xl p-5 md:text-2xl text-center font-bold"}>
          Ai o idee?{" "}
          <span
            className={"bg-clip-text  text-transparent bg-primary-gradient"}
          >
            Hai s-o transformăm în gigantul de mâine!
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
