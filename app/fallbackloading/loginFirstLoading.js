function LoginLoadingFirst(){
    return(
        <div className="flex w-full h-[100vh] p-10 bg-gray-50"> 
            <div className='relative w-[50%] h-full rounded-2xl overflow-hidden'>
                <div className="bg-gray-200 w-full h-full"></div>
                <div className='absolute left-0 bottom-0 z-50  p-10  =l font-bold'>
                    <div className='bg-gray-400 h-[2rem] w-[4rem]'></div>
                    <div className='bg-gray-400 h-[1rem] w-[2rem]'></div>
                </div>
            </div>
            <div  className='w-[50%] flex justify-center  items-center'>
                <div className='flex flex-col  justify-center items-center w-[60%]'>
                    <h1 className='bg-gray-200 mt-6 w-64 h-4'></h1>
                    <p className='mt-8 bg-gray-200 mt-6 w-1/2 h-12'></p>
                    <div className='mt-8 bg-gray-200  h-20 w-1/2 p-2 rounded-3xl flex justify-center '>
                         
                    </div>
                    
                    <div className="flex flex-col gap-3 w-full ">
                        <label className='mt-4 bg-gray-200 w-full h-8' htmlFor="email"></label>
                        <input className="text-md mt-4 px-8 py-3 rounded-3xl h-8 w-full" />
                        <label className='mt-4 bg-gray-200 w-full h-8' htmlFor="password"></label>
                        <input className="text-md mt-4 px-8 py-3 rounded-3xl h-8 w-full " />
                        <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                        
                        <div className="ml-2 bg-gray-200 h-16 w-1/3 mt-2"></div>
                        </div>
                        <div className="bg-gray-200 h-16 w-1/3 mt-2"></div>
                    </div>
                
                </div>
                </div>
            </div>

            </div>
    )
}

export default LoginLoadingFirst;