import PropTypes from "prop-types";
export default function Navbar({logo, text}) {
    return (
        <nav className="text-white bg-gradient-to-r from-cyan-950 to-cyan-500 shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo}  alt="logo" className={"h-10 rounded-full"}/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{text}</span>
                </a>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}