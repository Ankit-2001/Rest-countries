
function Card(props){
    let capitalName;
    if(props.capital){
      capitalName = props.capital[0];
    }
    const cardImg = props.flags.png;
    const cardImgAlt = props.flags.alt;
    return (
      <div className="card">
        <img src={cardImg} alt={cardImgAlt} />
        <div className="country-detail">
          <h3>{props.name.official}</h3>
          <h4>
            Population: <span className="card-detail">{props.population}</span>
          </h4>
          <h4>
            Region: <span className="card-detail">{props.region}</span>
          </h4>
          {capitalName && (
            <h4>
              Capital: <span className="card-detail">{capitalName}</span>
            </h4>
          )}
        </div>
      </div>
    );
}

export default Card;