import Link from "next/link";
import { motion } from "framer-motion"

export default function Navbar(props) {
    const logo = props.logo
    console.log(logo.image.url)
    return (
        <div className="navbar bg-gray-100 px-4">
            <div className="flex-1">
                <Link href={'/'}><img src={logo.image.url} alt={logo.title} className='h-20' /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-black">
                        <motion.button
                            className="btn glass"
                            whileHover={{ scale: 1.1 }}
                        >
                            <a href="https://charlees-heat-at-home.square.site/" target='_blank'>Order Now</a>
                        </motion.button>
                    </li>
                </ul>
            </div>
        </div>
    )
}