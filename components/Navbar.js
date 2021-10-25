import Link from "next/link";

const links = [
    { path: '/offer', name: 'Oferta'},
    { path: '/portfolio', name: 'Projekty'},
    { path: '/contact', name: 'Kontakt'}
]

function Navbar() {
    const navItems = links.map((link) => <Link key={link.path} className="px-5" href={link.path}>{link.name}</Link>);

  return (
    <nav className="grid grid-cols-2 bg-pink-light p-3 font-sans">
      <Link href="/">
        <a className="p-2 mr-4">
          <span className="text-xl text-blue-dark font-bold uppercase tracking-wide">Moja strona</span>
        </a>
      </Link>
      <button className="p-3 text-pink ml-auto hover:text-blue outline-none hover:bg-pink rounded lg:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    <div className="hidden lg:grid justify-self-end self-center mr-10 text-lg text-blue-dark">{navItems}</div>
    </nav>
  );
}

export default Navbar;
