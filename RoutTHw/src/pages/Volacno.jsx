import Nav from "../Components/Nav";

function Volcano() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1687530/pexels-photo-1687530.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      
      }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl text-white">Volcano</h2>
      <p className="lg:text-2xl text-white mt-4 text-center">
        Volcanoes are openings in Earth's crust where molten rock, ash, and gases erupt. They shape landscapes and create new landforms.
      </p>
      <Nav />
    </div>
  );
}

export default Volcano;
