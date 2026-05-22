import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";

const RouterLayout = () => {
    return (
        <>
            <div>
                <Header/>
                <main className="Container mx-auto min-h-[95vh] pt-36">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>

    )
}
export default RouterLayout;