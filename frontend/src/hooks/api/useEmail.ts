import { useHttpMethodContext } from "../../context/HttpContextProvider"
// import { mailType } from "../../types/mail";


const useEmail = ()=>{

    const {post} = useHttpMethodContext();

    const sendMail = async(email:string)=>{
            const response = await post('/api/send/mail',{email})

            return response;
    }



    return {sendMail};

}


export default useEmail;