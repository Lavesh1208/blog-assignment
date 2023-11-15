import Link from "next/link";

const Header = () => {
	return (
		<header className="header">
			<Link href="/" className="logo">
				Blog Post
			</Link>
			<nav className="nav">
				<Link href="/">Home</Link>
				<Link href="/posts">Posts</Link>
				<Link href="/search">Search</Link>
			</nav>
		</header>
	);
};

export default Header;
