import Nav from "../Components/Nav";

function SouthPolar() {
  return (
    <div
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1018131148/photo/antarctica-beautiful-landscape-blue-icebergs.jpg?b=1&s=612x612&w=0&k=20&c=xG6tFDmcZh02EYS5KMQVNf5V4GJ-XaWCvwNnV0-PUk8=')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
      }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl text-black">South Polar Region</h2>
      <p className="lg:text-2xl text-black mt-4 text-center">
        The South Polar region is characterized by its vast ice sheets, unique wildlife, and extreme weather conditions.
      </p>
      <Nav />
    </div>
  );
}

export default SouthPolar;
