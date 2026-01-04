"use client"
import Link from "next/link"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <>
            <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
                <div className="container mx-auto px-4 sm:px-section-x py-5 md:py-6 flex items-center text-white justify-between">
                    <div className="flex-1 text-xl sm:text-2xl font-semi-bold">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <span className="text-secondary">Biraj</span> Singh.
                        </Link>
                        
                    </div>
                    <div className="hidden md:flex">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/about" label="About" />
                        <NavItem to="#" label="Media" />
                        <NavItem to="#" label="Projects" />
                        <NavItem to="#" label="Contact" />
                    </div>
                    <button 
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)}>
                    <div className="fixed inset-0 bg-black/50" />
                    <div className="fixed top-16 right-0 w-64 h-full bg-primary shadow-lg">
                        <div className="flex flex-col p-6 space-y-4">
                            <MobileNavItem to="/" label="Home" onClick={() => setIsOpen(false)} />
                            <MobileNavItem to="/about" label="About" onClick={() => setIsOpen(false)} />
                            <MobileNavItem to="#" label="Media" onClick={() => setIsOpen(false)} />
                            <MobileNavItem to="#" label="Projects" onClick={() => setIsOpen(false)} />
                            <MobileNavItem to="#" label="Contact" onClick={() => setIsOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

interface Props{
    to: string;
    label: string;
}
function NavItem({to, label }: Props){
    return(
        <Link className="uppercase p-4 text-sm" href={to}>{label}</Link>
    )
}

interface MobileProps{
    to: string;
    label: string;
    onClick: () => void;
}
function MobileNavItem({to, label, onClick }: MobileProps){
    return(
        <Link 
            className="uppercase text-white text-lg py-3 border-b border-border/20 hover:text-secondary transition-colors" 
            href={to}
            onClick={onClick}
        >
            {label}
        </Link>
    )
}