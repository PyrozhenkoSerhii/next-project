import Link from 'next/link';

const Navbar = () => (
    <div>
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Next.js Project</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/product/catalog">
                                <a className="nav-link">Catalog</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>

);

export default Navbar;