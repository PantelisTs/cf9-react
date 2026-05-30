import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";
import {Toaster} from "sonner";

const RouterLayout = () => {
    return (
        <>
            <div>
                <Header/>
                <main className="Container mx-auto min-h-[95vh] pt-36">
                    <Outlet/>
                </main>
                <Footer/>
                <Toaster/>
            </div>
        </>

    )
}
export default RouterLayout;