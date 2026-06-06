function Navbar({full_name}) {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-5 bg-slate-900 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-violet-500">{full_name}</h2>
        <ul className="flex gap-8 text-white">
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
