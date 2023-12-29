import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qpijqsc', 'template_ycqa4hh', form.current, 'bpA4McU6cCBIW85LZ')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <>
 
<div className="max-w-screen-2xl mx-auto min-h-screen mt-24 lg:h-[500px] bg-amber-50 flex justify-between items-center p-20 lg:flex-row flex-col sm:mb-8">

    <div className="lg:ml-32 mb-4 lg:mb-24 ">
    <h2 className="w-full text-3xl font-bold leadi text-yellow-500 mb-2 items-center justify-center">Let&apos;s Talk</h2>
    <p className="pt-2 pb-4 text-black">Fill in the form to start a conversation</p>
    <div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-gray-700">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span className="text-black">Sylhet City, Bangladesh</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-gray-700">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span className="text-black">0123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-gray-700">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span className="text-black">edokan@gmail.com</span>
				</p>
			</div>
    </div>
    
  
    
<form ref={form} onSubmit={sendEmail} className="w-[480px] mx-auto py-6 lg:px-24 lg:px-11 px-4 lg:mt-8 ">
       <div className="flex flex-col text-black mb-2">
       <label className="mb-2 font-bold">Name</label>
        <input type="text" className="text-black p-2 border w-[300px] lg:w-[480px]" placeholder="Your name" name="from_name" />
        </div>
        <div className="flex flex-col text-black mb-2">
        <label className="mb-2 font-bold">Email</label>
        <input type="email" className="text-black p-2 border  w-[300px] lg:w-[480px]" placeholder="Your email" name="from_email" />
        </div>
        <div className="flex flex-col text-black mb-2">
        <label className="mb-2 font-bold">Message</label>
        <textarea name="message" className="text-black border  w-[300px] lg:w-[480px]" placeholder="Type Something" />
        </div>
        <input className="text-white bg-yellow-500 border py-2 px-5 mt-8 hover:text-white " type="submit" value="Send" />
       
</form>
</div>

    </>



  );
};

export default Contact;


