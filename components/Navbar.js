import Link from "next/link";

const links = [
    { path: '/', name: 'Metaforfoza'},
    { path: '/', name: 'Home Staging'},
    { path: '/', name: 'Cennik'},
    { path: '/', name: 'Kontakt'}
]

function Navbar() {
    const navItems = links.map((link) => <Link key={link.path} href={link.path}><a className="px-5">{link.name}</a></Link>);

  return (
    <nav className="hidden md:col-start-5 md:row-start-1 md:col-span-8 md:grid">
    <div className="justify-self-end self-center mr-10 text-lg text-blue-dark ">{navItems}</div>
    </nav>
  );
}

export default Navbar;
