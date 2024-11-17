function CheckOutForm(){
    return(
        <form class="flex" action="">
        <div class="px-20">
            <h3 class="font-semibold text-4xl mb-10">Billing details</h3>
            <div class="flex flex-col gap-6">
                <div class="flex gap-8 flex-row justify-between">
                    <div class="flex flex-col gap-4">
                    <label class="font-medium" for="firstname">First Name</label>
                    <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="firstname" type="text" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <label class="font-medium" for="lastname">Last Name</label>
                        <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="lastname" type="text"/>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="company">Company Name (Optional)</label>
                    <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="company" type="text" />
                </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="region">Country / Region</label>
                    <select class="border rounded-lg p-4 border-[#9F9F9F]" id="region">
                    <option value="india" selected="">India</option>
                    <option value="us">US</option>
                    <option value="uk">UK</option>
                </select>
                </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="street">Street address</label>
                    <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="street" type="text" />
                </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="city">Town / City</label>
                    <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="city" type="text" />
                </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="province">Province</label>
                    <select class="border rounded-lg p-4 border-[#9F9F9F]" id="province">
                    <option value="india" selected="">India</option>
                    <option value="us">US</option>
                    <option value="uk">UK</option>
                    </select>
                </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="zip">ZIP code</label>
                    <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="zip" type="text" />
                 </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="phone">Phone</label>
                    <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="phone" type="text" />
                </div>
                <div class="flex flex-col gap-4">
                    <label class="font-medium" for="email">Email address</label>
                    <input class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="email" type="text" />
                </div>
                <div class="flex flex-col gap-4 mt-6">
                    <input placeholder="Additional information" class="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="additional" type="text" />
                </div>
            </div>
        </div>
        <div class="px-10 mt-12">
            <div class="w-full flex flex-col gap-6 border-b-[#D9D9D9] border-b pb-10">
                <div class="text-2xl font-medium flex justify-between">
                    <p>Product</p>
                    <p>Subtotal</p>
                </div>
                <div class="max-h-[40vh] overflow-y-auto flex flex-col gap-6"></div>
                <div class="flex justify-between">
                    <p>Subtotal</p>
                    <p class="font-light">Rs. 0</p>
                </div>
                <div class="flex justify-between">
                    <p>Total</p>
                    <p class="font-bold text-2xl text-[#B88E2F]">Rs. 0</p>
                </div>
            </div>
            <div class="text-[#9F9F9F] py-4">
                <div class="group mb-3">
                    <label class="inline-flex cursor-pointer items-center gap-3 mb-3 duration-300 " for="bank">
                        <input class="peer sr-only" type="radio" name="payment" id="bank"/>
                        <span class="w-3 h-3 border border-[#9F9F9F] rounded-full peer-checked:bg-black peer-checked:border-black"></span>Direct Bank Transfer</label>
                        <p class="hidden">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
                <div class="group">
                    <label class="inline-flex cursor-pointer items-center gap-3 mb-3 duration-300 " for="cash">
                        <input class="peer sr-only" type="radio" name="payment" id="cash"/>
                        <span class="w-3 h-3 border border-[#9F9F9F] rounded-full peer-checked:bg-black peer-checked:border-black"></span>Cash On Delivery</label>
                        <p class="hidden">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
            </div>
            <p class="mb-8">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
            <div class="w-full text-center">
                <button class="text-xl border border-black hover:bg-black hover:text-white duration-300 rounded-lg py-3 w-1/2 lg:px-20" >Place order</button>
            </div>
        </div>
    </form>
    )
}

export default CheckOutForm;