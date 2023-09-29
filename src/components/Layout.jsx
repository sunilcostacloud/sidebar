import Sidebar from "./Sidebar"

const Layout = (props) => {
    // console.log("layoutprops", props)
    return (
        <div style={{ display: "flex" }}>
            <Sidebar history={props.history} />
            <div style={{ maxWidth: '800px' }}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout