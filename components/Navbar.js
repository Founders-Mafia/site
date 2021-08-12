import {
AiOutlineTwitter,
AiOutlineInstagram,
AiOutlineLinkedin } from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa' 


const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center p-2 lg:p-4">
      <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3.80143L1 28.222L4.87212 30.6641M1 3.80143L4.87212 1.35937L20.3606 11.1276M1 3.80143L16.4885 13.5697M4.87212 30.6641L4.87212 11.1276L12.6164 16.0117L8.74424 18.4538M4.87212 30.6641L24.2327 18.4538L39.7212 28.222M4.87212 30.6641L31.9769 13.5697V18.4538V8.68555L8.74424 23.3379M8.74424 18.4538L24.2327 8.68555M8.74424 18.4538L35.8491 1.35937M8.74424 13.5697L8.74424 23.3379M8.74424 23.3379L24.2327 13.5697M35.8491 1.35937L39.7212 3.80143L39.7212 28.222M35.8491 1.35937L35.8491 20.8958L28.1048 16.0117M39.7212 28.222L35.8491 30.6641L20.3606 20.8958" stroke="#0088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div className="flex items-center">
      <div className="hidden lg:flex space-x-[1.5rem] text-3xl mr-[3rem]">
        <AiOutlineTwitter className="cursor-pointer"/>
        <AiOutlineInstagram className="cursor-pointer"/>
        <FaDiscord className="cursor-pointer"/>
        <AiOutlineLinkedin className="cursor-pointer"/> 
      </div>
      <button className="bg-[#0075FF] hover:bg-gradient-to-r from-[#0075FF] to-[#0047FF] rounded-full py-3 px-6 text-white text-sm ">stream now </button>
      </div>
    </div>
    </>
  )
}

export default Navbar; 
