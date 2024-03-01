
const logout= async(req,res)=>{
    res.send({message:"Logout"});
}

const login= async(req,res)=>{
    res.send({message:"Login"});
}

const signup= async(req,res)=>{
    res.send({message:"signup"});
}


module.exports={logout,login,signup};
