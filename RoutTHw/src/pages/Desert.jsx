import Nav from "../Components/Nav";

function Desert() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/937187/pexels-photo-937187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl text-white">Desert</h2>
      <p className="lg:text-2xl text-white mt-4 text-center">
        Deserts cover about one-third of Earth's land surface and are known for extreme temperatures.
      </p>
      <Nav />
    </div>
  );
}

export default Desert;
