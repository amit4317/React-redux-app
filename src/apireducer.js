const Apilist = (state, action) =>{
    let data = Object.assign([], state);

    if(action.type === "saveblog"){
        data =  action.blogdata;
    }

    return(data);
}

export default Apilist;

/*const Userlist = (state=[], action) =>{ //sate is same as UI componennt

    //if nothing exits data = []
    //copy obj(state) to the empty arr
    let data = Object.assign([], state);

    // data = ['Alex','Bikash','Nilam'];

    //checking if type=adduser and store thr data. 
    if(action.type === "adduser"){//dont reuse "adduser" same name anywhere in reducer 
        data.push( action.username );
    }

    if(action.type === "removeuser"){//dont reuse "adduser" same name anywhere in reducer 
        data.splice( action.userindex, 1 );
    }
    return(data);
    */