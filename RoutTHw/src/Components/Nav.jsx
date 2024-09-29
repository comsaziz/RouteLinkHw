import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="flex flex-col justify-center items-center lg:justify-center">
      <ul className="flex flex-col lg:flex-row lg:gap-4 lg:relative lg:top-52 justify-center items-center space-y-4 lg:space-y-0 lg:space-x-12">

      
        <li>
          <Link
            to="/"
            className="bg-cover bg-center text-white p-4 rounded-lg w-40 h-40 flex justify-center items-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1452701/pexels-photo-1452701.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}
          >
            Ocean
          </Link>
        </li>

    
        <li>
          <Link
            to="/desert"
            className="bg-cover bg-center text-white p-4 rounded-lg w-40 h-40 flex justify-center items-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/937187/pexels-photo-937187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            Desert
          </Link>
        </li>

        <li>
          <Link
            to="/trees"
            className="bg-cover bg-center text-white p-4 rounded-lg w-40 h-40 flex justify-center items-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/53435/tree-oak-landscape-view-53435.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}
          >
            Trees
          </Link>
        </li>

       
        <li>
          <Link
            to="/volcano"
            className="bg-cover bg-center text-white p-4 rounded-lg w-40 h-40 flex justify-center items-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3375917/pexels-photo-3375917.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}
          >
            Volcano
          </Link>
        </li>

        <li>
          <Link
            to="/sotutholar"
            className="bg-cover bg-center text-black p-4 rounded-lg w-40 h-40 flex justify-center items-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1018131148/photo/antarctica-beautiful-landscape-blue-icebergs.jpg?b=1&s=612x612&w=0&k=20&c=xG6tFDmcZh02EYS5KMQVNf5V4GJ-XaWCvwNnV0-PUk8=')",
            }}
          >
            SouthPolar
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
