import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGraduationCap } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto px-4 sm:px-section-x py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold">
                            <span className="text-secondary">Dr. Biraj</span> Singh Thapa
                        </h3>
                        <p className="text-sm md:text-base text-text-light">
                            Leading researcher in green hydrogen technology and sustainable energy solutions for Nepal.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2 text-sm md:text-base">
                            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                            <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
                            <Link href="/achievements" className="hover:text-secondary transition-colors">Achievements</Link>
                            <a href="https://ghlab.ku.edu.np/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                Green Hydrogen Lab
                            </a>
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Connect</h4>
                        <div className="flex gap-4 text-2xl">
                            <a href="https://www.linkedin.com/in/birajsinghthapa/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/birajsinghthapa" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="https://scholar.google.com/citations?user=birajsinghthapa" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                <FaGraduationCap />
                            </a>
                            <a href="mailto:biraj@ku.edu.np" className="hover:text-secondary transition-colors">
                                <FaEnvelope />
                            </a>
                        </div>
                        <p className="text-sm text-text-light">
                            Department of Mechanical Engineering<br />
                            Kathmandu University, Nepal
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-text-light">
                    <p>&copy; {new Date().getFullYear()} Dr. Biraj Singh Thapa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
