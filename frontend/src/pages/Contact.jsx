const Contact = () => {
  return (
    <div className="container mx-auto mt-10 bg-[#EDE6D2] p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-serif font-bold mb-6 text-[#704214]">Contact Us</h1>
      <p className="text-lg text-[#3D3D3D]">
        For any queries or assistance, feel free to reach out to us at:
      </p>
      <ul className="list-disc list-inside mt-4 text-[#3D3D3D]">
        <li>Email: <a href="mailto:support@ticketingsystem.com" className="text-[#8B5E3C] underline">support@ticketingsystem.com</a></li>
        <li>Phone: <span className="text-[#8B5E3C]">+91 98765 43210</span></li>
      </ul>
    </div>
  );
};

export default Contact;
