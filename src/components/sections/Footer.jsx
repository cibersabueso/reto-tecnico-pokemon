const Footer = ({ credits }) => {
  const { year, author } = credits;
  return (
    <footer className="mt-auto bg-zinc-800 shadow shadow-zinc-500/50">
      <nav className="py-6">
        <div className="flex flex-col gap-4 container mx-auto px-8 md:px-4">
          <ul className="flex justify-center gap-4 md:gap-6">
            <li className="flex">
             
            </li>
            <li className="flex">
             
            </li>
          </ul>
          
        </div>
      </nav>
    </footer>
  );
}

export default Footer;