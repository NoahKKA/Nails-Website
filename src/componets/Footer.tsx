import { Instagram } from "react-bootstrap-icons";
import logo from "../assets/images/logo.png";
import React from "react";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-cyan-300 via-green-300 to-cyan-300 text-black py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <img
                            ref="/"
                            src={logo}
                            alt="Company Logo"
                            className="h-20"
                        />
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg mb-2">Follow us on Instagram</h3>
                        <ul className="flex space-x-4 ">
                            <li>
                                <a
                                    href="https://www.instagram.com/nail.abby.lv/"
                                    className="text-black hover:text-white"
                                    target="_blank"
                                >
                                    <Instagram />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-1/4">
                        <div>
                            <h5>Operating Hours</h5>
                        </div>
                        <div>Weekdays: 08:00-22:00</div>
                        <div>Weekends: 08:00-12:00</div>
                    </div>
                    <div className="md:w-1/4">
                        <p className="text-sm">
                            &copy; 2023 Nails by Abby. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
