import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Myuser = () => {
    //reading data from redux store
    let alluser = useSelector(state => state.Userlist); //getting the val from redux
    //saving the data from input to useState
    let [fullname, pickname] =  useState("");

    //cannot use useDispathc directly. We hav to create an object and then use it
    const dispatch = useDispatch(); 

    const save = () =>{
        //creating object to send to redux
        let mydata = {username:fullname, type:"adduser"};//username can be anything. "type" should remain same
        //using dispatch to save data to redux store
        dispatch(mydata);
        console.log(mydata);
        pickname("")
    }

    //function to remove the data from redux store using index as passed parameter
    const deluser = (index) =>{
        let mydata = {userindex:index, type:"removeuser"};//username can be anything. "type" should remain same
        dispatch(mydata);
    }


    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Manage User : {alluser.length}</h3>
                    <p>
                        Enter Full Name : <input type="text" className="m-3" value={fullname} onChange={obj=>pickname(obj.target.value)}/>
                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                    </p>
                </div>
            </div>

            <div className="row mt-5 text-center">
                {
                    alluser.map((fullname, index) => {
                        return (
                            <div className="col-xl-2 mb-4" key={index}>
                                <p className="p-3 "> {fullname} <br/></p>
                                <button onClick={obj=>deluser( index )} className="btn btn-danger btn-sm"> Delete </button>
                                
                            </div>
                        )
                    })
                }
            </div>

        </div>


    )
}

export default Myuser;