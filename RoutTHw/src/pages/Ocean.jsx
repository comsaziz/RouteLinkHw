import Nav from "../Components/Nav";

function Ocean() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1452701/pexels-photo-1452701.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl text-white">Ocean</h2>
      <p className="lg:text-2xl text-white mt-4 text-center">
        The average depth of the ocean is around 12,080 feet (3,682 meters).
      </p>
      <Nav />
    </div>
  );
}

export default Ocean;
