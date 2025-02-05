import { useState } from "react";

const Mybook = () => {
    let [allbook, setBook] = useState([]);
    let [newbook, pickBook] = useState("")

    const save = () => {
        setBook(allbook = [...allbook, newbook]);
        pickBook("");
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Manage Book : {allbook.length}</h3>
                    <p>
                        React Loose the current  state if you go to other componenet
                    </p>
                    <p>
                        Enter Book Nme : <input type="text" className="m-3"
                            value={newbook} onChange={obj => pickBook(obj.target.value)} />
                        <button onClick={save} className="btn btn-primary m-3"> Save </button>
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                {
                    allbook.map((bookname, index) => {
                        return (
                            <div className="col-xl-2 mb-4" key={index}>
                                <p className="p-3 bg-info text-white text-center"> {bookname} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Mybook;