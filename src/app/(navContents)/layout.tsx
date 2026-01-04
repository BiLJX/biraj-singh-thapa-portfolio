import NavBar from "@/components/nav/nav";
import Footer from "@/components/footer/footer";

export default function Layout({children}: {children: React.ReactNode}){
    return(
        <>  
            <NavBar />
            {children}
            <Footer />
        </>
    )
}