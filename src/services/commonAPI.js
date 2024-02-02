import axios from "axios";

export const commonAPI =async (httpRequest,url,reqBody,reqHeader)=>{
    const reConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reConfig).then((result)=>{
        return result
    }).catch((reason)=>{
        return reason
    })
}