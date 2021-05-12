import Nav from "./Nav";

const Layout = ({ children, categories }) => (
    <dvi>
        <Nav categories={categories}/>
        <div className='container'>
            {children}
        </div>
    </dvi>
)
export default Layout;