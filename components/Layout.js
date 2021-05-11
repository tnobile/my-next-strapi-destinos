import Nav from "./Nav";

const Layout = ({ children, categories }) => (
    <dvi>
        <Nav categories={categories}/>
        <div className='main-container container'>
            {children}
        </div>
    </dvi>
)
export default Layout;