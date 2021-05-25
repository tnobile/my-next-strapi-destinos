import MyNav from "./MyNav";

const Layout = ({ children, categories }) => (
    <div> 
        <MyNav categories={categories}/>
        <div className='container'>
            {children}
        </div>
    </div>
)
export default Layout;