import Header from "./Header.tsx";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
    addClasses?: string;

}

const Layout = ({children, addClasses}: LayoutProps) => {
    return (
        <>
            <div className={addClasses}>
                <Header/>
                <main className="Container mx-auto min-h-[95vh]">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout;