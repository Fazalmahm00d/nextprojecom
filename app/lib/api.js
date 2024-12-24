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
            // dispatch(dataAction.setCartArr(res.items));
            return data
        }
        catch (error) {
            console.log(error)
        }
    }
export  async function sendToMongoDB(newCartItem){
        try{
            // getCartsData();
            
            const response= await axios.post(`https://projectecombackend.onrender.com/cart/new`,newCartItem);
            // toast.success("Product added to cart")
            console.log(response.data,"send to mongodb func")
            return response.data
            // getCartsData()    
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
            // dispatch(dataAction.setWishArr(response.data.items))
            // if(response.data.message==="WishList not found"){
            //     console.log("inside 404")
            //     return
            // }
            // setIsWishItems(response.data.items)
        }
        catch(error){
            console.log(error)
        }
    }

    export async function sendToWish(newWishItem){
        
        try{
            
            const response= await axios.post("https://projectecombackend.onrender.com/wishlist/new",newWishItem);
            // if(response.status===201){
            //     toast.success("Product already exists in wishlist")
            // }else if(response.status===200){
            //     toast.success("Product added to wishlist")
            // }
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
        // toast.success("Item removed from cart");
        // getCartByIdData(isEmail)
    }
   export  async function deleteWishItem(obj){
        const response=await axios.delete(`https://projectecombackend.onrender.com/wishlist/delete/${obj.isEmail}/items/${obj.id}`);
        console.log(response);
        // toast.success("Item removed from wishlist");
        // getWishsData();

    }

 export async function authFirebase(obj){
        // setIsSendingReq(true);
        console.log("inside auth firebase func")
        try{
        const res=await axios.post(obj.URL,obj.data);
        console.log(res)
        return res
        }
        catch(err){
            console.log(err)
        }
        
}