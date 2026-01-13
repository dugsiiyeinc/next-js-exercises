import { NextRequest, NextResponse } from "next/server";
interface UserDetailPageProps{
    params:{
        username:string
    }
}       
export const GET=async(request:NextRequest, {params}:UserDetailPageProps)=>{
    const {username}=await params;
    return NextResponse.json({
        message:`user fetched successfully ${username}`,
        data:{
            username:username,
        }
    })
}
