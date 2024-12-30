const Navbar = () => {
  return (
    <nav className="flex items-center h-16 bg-[#1a237e] text-white px-4">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          {/* <img src="../../assets/logo.png" /> */}
          <span className="text-white">UNI</span>
          <span className="text-yellow-400">SCORE</span>
        </div>

        {/* Sport selector */}
        <div className="flex items-center bg-[#283593] rounded-md px-3 py-1.5 space-x-2">
          <img
            className="w-6 h-6 rounded-full bg-white"
            src="https://static.vecteezy.com/system/resources/previews/015/309/567/non_2x/transparent-ball-icon-on-transparent-background-free-png.png"
          />
          <span className="text-sm font-medium">FOOTBALL</span>
        </div>
      </div>

      {/* Right side user icon */}
      <div className="ml-auto">
        <button className="w-8 h-8 rounded-full bg-[#283593] flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
