import NavBar from "@/components/nav/nav";

export default function Layout({children}: {children: React.ReactNode}){
    return(
        <>  
            <NavBar />
            {children}
        </>
    )
}