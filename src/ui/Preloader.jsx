function Preloader() {
  return (
    <>
      <div className="h-[4px] w-screen z-40 fixed top-0 loading_bar"></div>
      <div className="fixed inset-0 bg-[#0b0c13] z-30 flex justify-center items-center ">
        <img src="logo.webp" alt="Logo" className="w-4/12" />
      </div>
    </>
  );
}

export default Preloader;
