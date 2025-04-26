

const SlideCard = ({book}) => {
const {name, image , collection} = book

  return (
    <div>
      <div className="px-5 md:px-0 bg-gray-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt=""
            className="w-20"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{collection}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
