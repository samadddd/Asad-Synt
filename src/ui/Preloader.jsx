function Preloader() {
  return (
    <>
      <div className="h-[4px] w-screen z-40 fixed top-0 loading_bar"></div>
      <div className="fixed inset-0 bg-[#0b0c13] z-30 ">
        <img
          src="logo.svg"
          alt="Logo"
          className=" size-40 md:size-[30vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </>
  );
}

export default Preloader;
