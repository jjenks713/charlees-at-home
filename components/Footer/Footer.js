import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover" href="https://charlees-heat-at-home.square.site/?location=11ed9914965a442ea7d7ac1f6bbba828" target='_blank'>Order Now</a>
                <a className="link link-hover" href="mailto:charleescomfortkitchen@gmail.com">Contact</a>
                <a className="link link-hover" href="https://www.charleescomfortkitchen.com/" target='_blank'>Charlees Comfort Kitchen</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/charleescomfortkitchen/" target='_blank'>
                        <InstagramIcon />
                    </a>
                    <a href="https://www.facebook.com/CharleesComfortKitchen" target='_blank'>
                        <FacebookIcon />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Charlees Heat at Home</p>
            </div>
        </footer>
    )
}