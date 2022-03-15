import Navbar from "../navbar/Navbar"

const PageLayout = ({children,userDetails}) => {
    return (
        <div>
            <Navbar userDetails={userDetails}/>
            {children}
        </div>
    )
}

export default PageLayout
