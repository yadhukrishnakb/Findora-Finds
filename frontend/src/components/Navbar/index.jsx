import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

import "./index.css"

const Navbar = ({ searchInput, setSearchInput }) => {
    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div className="navbar-container">
            <div className="navbar">

                <img
                    src="https://res.cloudinary.com/dvzcnvazm/image/upload/v1787906969/brand_logo_type_2-removebg-preview_baxhfm.png"
                    alt="findora-finds-logo"
                    className="navbar-logo"
                />

                <div className="navbar-socials">

                    <a
                        href="https://www.instagram.com/findorafinds.online/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaSquareInstagram />
                    </a>

                    <a
                        href="https://in.pinterest.com/thefindorafinds_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaPinterest />
                    </a>

                </div>

            </div>

            <div className="search-container">
                <input
                    type="text"
                    value={searchInput}
                    onChange={onChangeSearchInput}
                    placeholder="Search products..."
                />
            </div>
        </div>
    )
}

export default Navbar