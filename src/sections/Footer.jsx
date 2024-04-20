function Footer() {
  return (
      <footer className="bg-gradient flex justify-between h-[57px] px-[70px] mt-36 rounded-tr-[22px] rounded-tl-[22px] box_shadow items-center relative ">
         <img src="footer-glow.svg" alt="Glow Effect" className="absolute left-0 bottom-0 hidden lg:block w-full -z-10" /> 
      <p className="hidden md:block">All rights reserved by asadsynt</p>
      <img
        src="logo.svg"
        alt="Logo "
        className="absolute left-1/2 -translate-x-1/2"
      />
      <a href="https://www.instagram.com/samaddnisar/" className="hidden md:block hover:underline">
        Slaying the dragon
      </a>
    </footer>
  );
}

export default Footer;  
