import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import {Outlet} from "react-router-dom"

const Layout = () => {

    return (
        <>
            <Header>
            </Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer>
            </Footer>
        </>
    )
}

export default Layout