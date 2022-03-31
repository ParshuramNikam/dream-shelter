import Navbar from "../navbar/Navbar"

const PageLayout = ({children,userDetails,refreshPost,setRefreshPost }) => {
    return (
        <div>
            <Navbar userDetails={userDetails} setRefreshPost={setRefreshPost} refreshPost={refreshPost} />
            {children}
        </div>
    )
}

export default PageLayout
