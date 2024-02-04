const Gallery = () => {
  return (
    <div className="mx-auto w-3/4">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/NNDgzmG/pexels-pixabay-265720.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/TKHDmhR/pexels-jonathan-borba-3014853.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/SmWLPhF/pexels-sergio-souza-1779491.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/BqQwjPv/pexels-jonathan-borba-2965275.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Gallery;
