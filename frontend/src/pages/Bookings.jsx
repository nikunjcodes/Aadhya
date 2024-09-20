const Bookings = () => {
  return (
    <div className="container mx-auto mt-10 bg-[#EDE6D2] p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-serif font-bold text-[#704214] mb-6">Your Upcoming Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md border border-[#8B5E3C]">
          <h2 className="text-xl font-bold text-[#704214]">National Museum</h2>
          <p className="text-[#3D3D3D]">Date: September 20, 2024</p>
          <p className="text-[#3D3D3D]">Visitors: 3</p>
          <p className="text-[#3D3D3D]">Status: Confirmed</p>
        </div>
        <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md border border-[#8B5E3C]">
          <h2 className="text-xl font-bold text-[#704214]">Indian Museum</h2>
          <p className="text-[#3D3D3D]">Date: September 22, 2024</p>
          <p className="text-[#3D3D3D]">Visitors: 2</p>
          <p className="text-[#3D3D3D]">Status: Confirmed</p>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
