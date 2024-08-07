function error(msg='Something went wrong',status=5000){
    const e=new Error(msg)
    e.staus=status
    return e
}

module.exports=error;
