import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="my-8 mx-0 text-center flex flex-col justify-center items-center">
      <img
        src={logoImg}
        alt="The quiz app logo."
        className="w-40 h-40 rounded-3xl drop-shadow-md"
      />
      <h1 className="m-0 py-2 font-rubik bold text-4xl textShadow-lg tracking-wider uppercase bg-gradient-to-r from-white from-40% to-paleOrange to-60%">
        ReactQuiz
      </h1>
    </header>
  );
}
