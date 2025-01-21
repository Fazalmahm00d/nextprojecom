function ContactFormLoading() {
    return (
        <div className="py-20 px-5 sm:px-16 lg:px-40">
            {/* Title Section */}
            <div className="flex flex-col items-center gap-6">
                <div className="bg-gray-200 h-10 w-40 rounded-md"></div>
                <div className="bg-gray-200 h-6 w-3/4 sm:w-1/2 lg:w-1/3 rounded-md"></div>
                <div className="bg-gray-200 h-6 w-3/4 sm:w-1/2 lg:w-1/3 rounded-md"></div>
            </div>

            {/* Content Section */}
            <div className="mt-12 flex flex-col-reverse sm:flex-row gap-10 sm:gap-16">
                {/* Contact Details Placeholder */}
                <div className="flex flex-col gap-6 w-full sm:w-1/2">
                    <div className="bg-gray-200 h-6 w-1/2 rounded-md"></div>
                    <div className="bg-gray-200 h-6 w-2/3 rounded-md"></div>
                    <div className="bg-gray-200 h-6 w-3/4 rounded-md"></div>
                </div>

                {/* Form Placeholder */}
                <div className="w-full sm:w-1/2 flex flex-col gap-8">
                    {/* Input Fields */}
                    {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="bg-gray-200 h-6 w-1/3 rounded-md"></div>
                            <div className="bg-gray-200 h-10 w-full rounded-md"></div>
                        </div>
                    ))}
                    {/* Button */}
                    <div className="flex justify-end">
                        <div className="bg-gray-300 h-12 w-1/2 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactFormLoading;
