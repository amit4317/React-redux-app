import { useSelector } from "react-redux";

const Mydashboard = () => {

    let alluser = useSelector(state => state.Userlist); //getting the val from redux
    let allproduct = useSelector(state => state.Productlist); //getting the val from redux
    let allapi = useSelector(state => state.Apilist); //getting the val from redux

    return (
        <div className="container mt-4">
            <div className="row mb-5">
                <div className="col-xl-12 text-center">
                    <h1> React Redux Dashboard </h1>

                </div>
            </div>
            <div className="row text-center">
                <div className="col-xl-4">
                    <div className="p-4 bg-light text-primary">
                        <h3> {alluser.length} Users in Store </h3>
                        {
                            alluser.slice(0, 4).map((fullname, index)=>{
                                return(
                                    <p key={index}> {fullname} </p>
                                )
                            })
                        }
                    </div>

                </div>
                
                <div className="col-xl-4">
                    <div className="p-4 bg-light text-primary">
                        <h3> {allproduct.length} Products in Store </h3>
                        {
                           allproduct.slice(0, 4).map((product, index)=>{
                            return(
                                <p key={index}> {product.pname} </p>
                            )
                           })
                        }
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="p-4 bg-light text-primary">
                        <h3> {allapi.length} APIs in Store </h3>
                        {
                            allapi.slice(0, 3).map((blog, index)=>{
                                return(
                                    <p> {blog.body.slice(0, 100 )}... </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mydashboard;