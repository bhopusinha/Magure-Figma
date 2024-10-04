import { useHttpMethodContext } from "../../context/HttpContextProvider"
import { tableType } from "../../types/table";



const useTable = ()=>{

    const {post} = useHttpMethodContext();


    const createTable = async (data:tableType,showLoader=true)=>{
        const response = await post(`/api/table/add`,data,showLoader)

        return response

    }



    return {createTable}

}


export default useTable;