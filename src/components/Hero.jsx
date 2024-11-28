const Hero = () => {
  return (
    <div className="relative h-screen bg-center bg-cover bg-no-repeat" 
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1499734979570-67f42bb67699?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
      role="img"
      aria-label="Beautiful natural scenery background"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          NATURAL PRODUCT WEDDING PRE-WEDDING
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl">
          The best choice for all your photography needs
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-medium rounded-lg shadow-lg transition">
          Explore Gallery
        </button>
      </div>
    </div>
  );
};

export default Hero;
