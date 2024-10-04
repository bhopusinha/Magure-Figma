import { useHttpMethodContext } from "../../context/HttpContextProvider";


const useTestimonial = ()=>{
    
    const {get} = useHttpMethodContext();

    const getTestimonial= async ()=>{
        const response = await get('/api/testi/');

        return response;
    }


    return {getTestimonial}

}


export default useTestimonial;