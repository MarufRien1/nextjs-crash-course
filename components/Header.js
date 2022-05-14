import headerStyles from "../styles/Header.module.css"
const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}><span>Maruf&apos;s</span> Portfolio</h1>
			<p className={headerStyles.description}>This is a test site</p>

		</div>
	)
}

export default Header;