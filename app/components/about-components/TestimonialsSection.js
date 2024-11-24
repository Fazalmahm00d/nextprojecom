import Testimonials from "./Testimonials";

function TestimonialsSection(){
    const testdata=[
        {
          img:"https://images.loox.io/uploads/2023/4/21/1DQjqNfAx.jpg",avtext:"HG", name:"Henriette G." ,date:"4/21/2023",testimonial:"Furniro completely transformed my living room! The quality and craftsmanship are unmatched. I get compliments on my sofa and coffee table every time someone visits. Highly recommend this brand for anyone looking for timeless and elegant furniture."
        },
        {
          img:"https://img.freepik.com/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?uid=R48205179&ga=GA1.1.247687857.1691161183&semt=ais_hybrid", avtext:"MS", name:" Henry S.", date:"4/21/2023", testimonial:"I was impressed by Furniro's attention to detail and their customer service. From ordering to delivery, the process was seamless. The dining set I purchased is not only stunning but also incredibly durable. Thank you for making my house feel like a home!"
        },
        {
          img:"https://img.freepik.com/free-photo/enthusiastic-city-girl-shows-thumbs-up-approval-looking-upbeat-say-yes-approves-agrees-stands_1258-125720.jpg?uid=R48205179&ga=GA1.1.247687857.1691161183&semt=ais_hybrid", avtext:"NB", name:"Natalia B." ,date:"4/21/2023", testimonial:"I love how Furniro offers stylish and eco-friendly furniture options. Knowing that my purchase supports sustainability makes it even better. My bedroom set is perfect, and I can’t wait to shop here again!"
        }
    
      ]
    return(
        <div className='flex flex-col w-full justify-center  px-40 py-10 items-center'>
        <h1 className="text-center text-3xl font-bold">Our Customers</h1>
        <div className='grid grid-cols-3 gap-10 mt-10'>
        {
          testdata.map((items)=>{
            return <Testimonials data={items}/>
          })
         }
        </div>
      </div>
    )
}

export default TestimonialsSection;