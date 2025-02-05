import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Myproduct = () =>{
    let[pdetails, setDetails] = useState({});

    let pickvalue = (obj) =>{
        pdetails[obj.target.name] = obj.target.value;
        setDetails(pdetails);
    }

    let dispatch = useDispatch()


    const save = (obj) =>{
        obj.preventDefault();
        let mydate = {type: "saveproduct", pinfo : pdetails};
        dispatch( mydate );

        obj.target.reset(); //clear the form
        alert("Product sent to store");
        setDetails([]);
    }

    const deletepro = (index) =>{
        let mydata = { type:"removeproduct", pindex: index}
        dispatch(mydata);
    }


    let allproduct = useSelector( state=>state.Productlist)

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Manage Product </h3>
                    <form onSubmit={save}>
                        <p>
                            <input type="text" className="m-3" placeholder="Product name" onChange={pickvalue} name="pname"/>
                        
                            <input type="text" className="m-3" placeholder="Product prince" onChange={pickvalue} name="price"/>
                        
                            <input type="text" className="m-3" placeholder="Product quantity" onChange={pickvalue} name="qty"/>
                            <button className="btn btn-primary"> Save </button>
                        </p>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12 mb-4">
                    <h3 className="text-center"> Available products in store : {allproduct.length} </h3>
                </div>
                {
                    allproduct.map((product, index)=>{
                        return(
                            <div className="mb-4 col-xl-3" key={index}>
                                <h5 className="text-primary"> {product.pname} </h5>
                                <p> Rs. {product.price} </p>
                                <p> In Stock : {product.qty} </p>
                                <button onClick={obj=>deletepro( index )} className="btn btn-danger btn-sm"> Delete </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myproduct;