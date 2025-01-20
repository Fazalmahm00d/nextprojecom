import axios from "axios";

export async function getCartByIdData(isEmail){
    console.log("get cart func called")
        try{
            
            const response=await fetch(`https://projectecombackend.onrender.com/cart/${isEmail}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            });
            const data=await response.json()
            console.log(data,"from use query func");
            return data
        }
        catch (error) {
            console.log(error)
        }
    }
export  async function sendToMongoDB(newCartItem){
        try{
            const response= await axios.post(`https://projectecombackend.onrender.com/cart/new`,newCartItem);
            console.log(response.data,"send to mongodb func")
            return response.data
        }
        catch(error)
        {
            console.error("err:",error)
        }
    } 

export  async function getWishByIdData(isEmail) {
        try{
            const response=await axios.get(`https://projectecombackend.onrender.com/wishlist/${isEmail}`);
            console.log(response,"wish response")
            return response.data
        }
        catch(error){
            console.log(error)
        }
    }

    export async function sendToWish(newWishItem){
        
        try{
            const response= await axios.post("https://projectecombackend.onrender.com/wishlist/new",newWishItem);
            return response.data
        }
        catch(error)
        {
            console.error("err:",error)
        }
    } 

    export async function deleteItem(obj){

        const response=await axios.delete(`https://projectecombackend.onrender.com/cart/delete/${obj.isEmail}/items/${obj.id}`);
        console.log(response);
        return response
    }
   export  async function deleteWishItem(obj){
        const response=await axios.delete(`https://projectecombackend.onrender.com/wishlist/delete/${obj.isEmail}/items/${obj.id}`);
        console.log(response);

    }

 export async function authFirebase(obj){
        try{
        const res=await axios.post(obj.URL,obj.data);
        console.log(res)
        return res
        }
        catch(err){
            console.log(err)
        }
        
}