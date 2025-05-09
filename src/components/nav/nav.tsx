import Link from "next/link"

export default function NavBar(){
    return(
        <nav className="fixed z-50 top-0 left-0 flex w-full">
            <div className="container px-section-x py-4 mx-auto flex text-white">
                <div className="flex-1 text-2xl font-semi-bold">
                    <span className="text-secondary">Biraj</span> Singh.
                </div>
                <div className="flex">
                    <NavItem to="#" label="Home" />
                    <NavItem to="#" label="About" />
                    <NavItem to="#" label="Media" />
                    <NavItem to="#" label="Projects" />
                    <NavItem to="#" label="Contact" />
                </div>
            </div>
        </nav>
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