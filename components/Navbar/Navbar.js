import Link from "next/link";
import { motion } from "framer-motion"

export default function Navbar(props) {
    const logo = props.logo

    return (
        <div className="navbar bg-gray-100 px-4 fixed z-50">
            <div className="flex-1">
                <Link href={'/'}><img src={logo.image.url} alt={logo.title} className='h-20' /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-black">
                        <a href="https://www.charleescomfortkitchen.com/" target='_blank'>Charlees Comfort Kitchen</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}