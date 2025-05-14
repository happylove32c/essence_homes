const PulsingDot = () => {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex h-12 items-center justify-center gap-4">
          <div className="w-4 h-4 bg-black rounded-full animate-[ping_1s_linear_infinite]"></div>
          <div className="w-4 h-4 bg-black rounded-full animate-[ping_1s_linear_infinite]"></div>
          <div className="w-4 h-4 bg-black rounded-full animate-[ping_1s_linear_infinite]"></div>
        </div>
      </div>
    );
  };
  
  export default PulsingDot;
  