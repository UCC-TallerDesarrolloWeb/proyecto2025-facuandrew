import Header from "./components/Header"
import Footer from "./components/Footer"
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