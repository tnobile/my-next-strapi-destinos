import Nav from "./Nav";

const Layout = ({ children, categories }) => (
    <div>
        <Nav categories={categories}/>
        <div className='container'>
            {children}
        </div>
    </div>
)
export default Layout;