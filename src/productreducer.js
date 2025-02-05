const Productlist = (state = [], action) =>{
    let data = Object.assign([], state);

    // (action.type === "saveproduct" ? data.push(action.pinfo):"")
    if(action.type === "saveproduct"){
        data.push( action.pinfo )
    }

    if(action.type === "removeproduct"){
        data.splice(action.pindex, 1);
    }
    return(data);
}

export default Productlist;