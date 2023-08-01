function Navbar() {
  return (
    <nav className=" h-20 flex justify-between items-center ">
      <h1 className=" text-xl">Fuhidy</h1>
      <ul className="flex gap-4 items-center">
        <li><a href="#home">Hello</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#service">Services</a></li>
        <li className=" bg-primary text-background py-2 px-4 rounded-3xl"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
