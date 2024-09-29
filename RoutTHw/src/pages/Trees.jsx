import Nav from "../Components/Nav";

function Trees() {
    return (
      <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex flex-col justify-center items-center"
      >
      <h2 className="text-5xl text-white">Trees</h2>
      <p className="lg:text-2xl text-white mt-4 text-center">
      Trees are vital for our ecosystem, producing oxygen and providing habitats for various wildlife species.
      </p>
      <Nav />
      </div>
    );
  }

export default Trees;


