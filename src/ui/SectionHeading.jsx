function SectionHeading({ vanguard, children }) {
  return (
    <div className="relative flex items-center justify-center">
      <h1 className="vanguard text-transparent stroke font-vanguard text-[128px]">
        {vanguard}
      </h1>
      <h2 className="monument text-transparent bg-gradient bg-clip-text absolute tracking-[5px] sm:tracking-[11px] text-[27px] text_shadow_custom font-monument translate-y-[40%]">
        {children}
      </h2>
    </div>
  );
}

export default SectionHeading;
