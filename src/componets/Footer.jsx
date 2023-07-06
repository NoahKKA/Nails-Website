import { Instagram, Facebook } from "react-bootstrap-icons";
import logo from "../assets/images/abby.png";

function Footer() {
    return (
        <footer class="bg-gray-900 text-white py-20">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center justify-between">
                    <div class="w-full md:w-1/4 mb-4 md:mb-0">
                        <img src={logo} alt="Company Logo" class="h-10" />
                    </div>
                    <div class="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 class="text-lg mb-2">Follow us on Instagram</h3>
                        <ul class="flex space-x-4">
                            <li>
                                <a
                                    href="https://www.instagram.com/grrr_abby/"
                                    class="text-gray-300 hover:text-white"
                                    target="_blank"
                                >
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-gray-300 hover:text-white"
                                >
                                    <Facebook />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/2">
                        <p class="text-sm">
                            &copy; 2023 Nails by Abby. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
