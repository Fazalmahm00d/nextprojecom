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
