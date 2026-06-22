function Navbar({ full_name, theme }) {
  return (
    <>
      <nav
        className={`flex justify-between items-center px-8 py-5 border-b
  ${
    theme === "dark"
      ? "bg-slate-900 border-slate-800"
      : "bg-white border-gray-300"
  }`}
      >
        <h2 className="text-2xl font-bold text-violet-500 ml-28">{full_name}</h2>
        <ul
          className={`flex gap-8 ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
