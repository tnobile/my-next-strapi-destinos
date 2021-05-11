import Navbar from "./Navbar";

const Layout = ({ children }) => (
    <dvi>
        <Navbar />
        <div className='main-container container'>
            {children}
        </div>
    </dvi>
)
export default Layout;