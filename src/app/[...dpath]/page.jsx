import React from "react";
import {linkGc} from "next/dist/client/app-link-gc";

const page = ({params}) => {
    console.log(params)
    return(
        <>
        <h1>Catch All Path</h1>
            <ul>
                {params.dpath.map((data)=>{
                    return(  //return is must
                        <li>{data}</li>
                        )
                    console.log(data)
                })}
            </ul>
        </>
    )

}
export default page;