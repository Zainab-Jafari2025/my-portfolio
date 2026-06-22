import TypingText from "./TypingText";
function Header({ theme }) {
  return (
    <>
      <header className="text-center py-24">
        <h1
          className={`text-6xl font-bold ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          Hi, I'm <span className="text-violet-500"> Zainab 👋</span>
        </h1>
        <TypingText/>
        <p
          className={`mt-6 text-2xl ${
            theme === "dark" ? "text-gray-300" : "text-slate-900"
          }`}
        >
          WELCOME TO MY PORTFOLIO
        </p>
        <p className="text-violet-400 italic mt-6 text-xl">Never give up!</p>
      </header>
    </>
  );
}
export default Header;
