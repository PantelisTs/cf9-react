import Header from "./Header.tsx";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;

}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <main className="Container mx-auto min-h-[vh95]">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout;