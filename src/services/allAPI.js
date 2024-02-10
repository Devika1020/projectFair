import { commonAPI } from "./commonAPI";
import SERVER_URL from "./serverUrl";

// register API 
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}
// login API
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

// add-projectapi

export const addProjectAPI =async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

// home-projectapi
export const homeProjectAPI =async()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-project`,"","")
}

// allproject
export const getallProjectAPI =async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-project`,"",reqHeader)
}

export const getUserProjectAPI =async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-project`,"",reqHeader)
}

export const updateUserProfileAPI =async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/user/edit`,reqBody,reqHeader)
}