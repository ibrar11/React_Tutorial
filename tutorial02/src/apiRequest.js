
const apiRequest = async (url='', optionObj=null, errMsg=null ) => {
        if((optionObj.method)==='GET'){
            try{
                const response = await fetch(url);
                const data = await response.json();
                if(!response.ok) throw Error();
                else return data;
            }catch(err){
                return errMsg;
             }
        }
        else{
            try{
                const response = await fetch(url);
                if(!response.ok) throw Error("Please! Reload the page");
                }catch(err){
                    errMsg =  err;
            }finally{
                    return errMsg;
            }
        }
}

export default apiRequest;