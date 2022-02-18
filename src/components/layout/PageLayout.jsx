import Navbar from "../navbar/Navbar"

const PageLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default PageLayout
