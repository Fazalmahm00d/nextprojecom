import { useState } from "react";
import ContactSub from "./ContactSub";

function ContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    };
    return(
        <div className="py-20 ">
            <div className="hidden sm:flex flex-col items-center ">
                <h1 className="text-2xl lg:text-4xl font-bold">Get In Touch With Us</h1>
                <div className=" text-center text-sm lg:text-xl w-1/2 text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>
            </div>
            <div className="container lg:mx-auto max-w-7xl flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row sm:px-16 sm:py-6 sm:mt-6 lg:px-0 lg:py-10 lg:mt-10">
                <div className="hidden sm:w-1/2 sm:flex sm:flex-col sm:gap-3 lg:gap-6">
                    <ContactSub svg={<svg className="h-fit w-fit" width="30" height="30" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0.120117C8.08369 0.123507 5.28779 1.26662 3.22564 3.2987C1.16348 5.33078 0.00345217 8.08591 1.17029e-05 10.9597C-0.00348119 13.3082 0.774992 15.5929 2.21601 17.4635C2.21601 17.4635 2.51601 17.8527 2.56501 17.9089L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4635 19.784 17.4635L19.785 17.4605C21.2253 15.5908 22.0034 13.3071 22 10.9597C21.9966 8.08591 20.8365 5.33078 18.7744 3.2987C16.7122 1.26662 13.9163 0.123507 11 0.120117ZM11 14.9014C10.2089 14.9014 9.43553 14.6702 8.77773 14.2371C8.11993 13.804 7.60724 13.1884 7.30449 12.4681C7.00174 11.7479 6.92253 10.9553 7.07687 10.1907C7.23121 9.42611 7.61217 8.72377 8.17158 8.17252C8.73099 7.62127 9.44373 7.24586 10.2197 7.09377C10.9956 6.94168 11.7998 7.01974 12.5307 7.31808C13.2616 7.61641 13.8864 8.12162 14.3259 8.76983C14.7654 9.41803 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4844 12.0605 14.9001 11 14.9014Z" fill="black"/>
                        </svg>} name="Address" p1="236 5th SE Avenue, New York NY10000, United States" p2=""/>
                    <ContactSub svg={<svg className="h-fit w-fit" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6086 21.4251L20.5274 16.8051C20.2872 16.5867 19.9715 16.4703 19.6471 16.4803C19.3227 16.4904 19.0149 16.6261 18.7886 16.8588L15.7974 19.9351C15.0774 19.7976 13.6299 19.3463 12.1399 17.8601C10.6499 16.3688 10.1986 14.9176 10.0649 14.2026L13.1386 11.2101C13.3716 10.984 13.5075 10.6761 13.5176 10.3516C13.5276 10.027 13.411 9.71136 13.1924 9.4713L8.57361 4.3913C8.35492 4.1505 8.05096 4.00443 7.72631 3.98413C7.40165 3.96382 7.08186 4.07088 6.83486 4.28255L4.12236 6.6088C3.90625 6.8257 3.77726 7.11437 3.75986 7.42005C3.74111 7.73255 3.38361 15.1351 9.12361 20.8776C14.1311 25.8838 20.4036 26.2501 22.1311 26.2501C22.3836 26.2501 22.5386 26.2426 22.5799 26.2401C22.8855 26.2229 23.174 26.0934 23.3899 25.8763L25.7149 23.1626C25.9274 22.9163 26.0352 22.5968 26.0154 22.2722C25.9955 21.9475 25.8495 21.6435 25.6086 21.4251Z" fill="black"/>
                        </svg>} name="Phone" p1="Mobile: +(84) 546-6789" p2="Hotline: +(84) 456-6789"/>
                    <ContactSub svg={<svg className="h-fit w-fit" width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_80)">
                        <path d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_80">
                        <rect width="23" height="23" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>} name="Working Time" p1="Monday-Friday: 9:00 - 22:00" p2="Saturday-Sunday: 9:00 - 21:00"/>
                </div>
                <div className="w-full px-5 sm:px-10 sm:w-1/2">
                <form onSubmit={handleSubmit} className="flex flex-col text-sm lg:text-lg gap-4 lg:gap-8 placeholder:text-[#9F9F9F]">
            <div className="flex flex-col gap-2 lg:gap-4">
                <label className="font-bold text-black">Your name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full p-2  lg:p-4 focus:outline-none rounded border-[#9F9F9F] border-[1px] ${
                        errors.name ? 'border-red-500 my-4' : ''
                    }`}
                />
                {errors.name && <p className="text-red-500 text-sm -mt-6">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-2 lg:gap-4">
                <label className="font-bold text-black">Email address</label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full p-2 lg:p-4 focus:outline-none rounded border-[#9F9F9F] border-[1px] ${
                        errors.email ? 'border-red-500 my-4' : ''
                    }`}
                />
                {errors.email && <p className="text-red-500 text-sm -mt-6">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-2 lg:gap-4">
                <label className="font-bold text-black">Subject</label>
                <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="This is an optional"
                    className="focus:outline-none w-full p-2 lg:p-4 rounded border-[#9F9F9F] border-[1px]"
                />
            </div>

            <div className="flex flex-col gap-2 lg:gap-4">
                <label className="font-bold text-black">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi! i'd like to ask about"
                    className={`w-full h-[8rem] p-2 lg:p-4 rounded border-[#9F9F9F] border-[1px] ${
                        errors.message ? 'border-red-500 my-4' : ''
                    }`}
                />
                {errors.message && <p className="text-red-500 text-sm -mt-6">{errors.message}</p>}
            </div>

            <div className="w-full">
                <button 
                    className="text-sm w-full sm:w-1/2 py-2 lg:text-xl bg-[#B88E2F] text-white lg:py-4 border-[1px] border-[#B88E2F] rounded" 
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;