

const Inspire = () => {
  return (
    <div className="p-6">
      <div className="border-2 border-black rounded-xl p-4 grid gap-4 justify-between items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h1 className="font-semibold text-2xl text-center">Get Inspiration to Make Your Event Unforgettable!</h1>
        </div>
        <div className="flex justify-center">
          <input className="border-2 border-black p-2 rounded-2xl" type="email" placeholder="ENTER YOUR EMAIL" />
        </div>
        <div className="flex justify-center">
          <button className="p-4 bg-black text-white font-semibold rounded-full">INSIPRE ME</button>
        </div>
      </div>
    </div>
  );
};

export default Inspire;
