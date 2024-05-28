function CountryCardDetails(props) {
  const {
    img,
    countryName,
    nativeName,
    tld,
    population,
    currency,
    region,
    allLanguages,
    subRegion,
    capital,
    borderCountries,
  } = props;

  let languages = "";
  for(let i = 0 ; i < allLanguages.length; i++){
    languages += allLanguages[i];
    if(i === allLanguages.length -1){
        break;
    }
    languages += ", ";
  }
  let borderCountryCard =[];
  if(borderCountries){
    borderCountryCard = borderCountries.map((coutry) => {
      return <button>{coutry}</button>;
    });
  }
  
  return (
    <div className="country-card-details">
      <div >
        <img src={img.svg} alt={img.alt} />
      </div>
      <div className="right-side-container">
        <h3>{countryName}</h3>
        <div className="details-container">
          <div className="left">
            <h4>
              Native Name: <span>{nativeName}</span>
            </h4>
            <h4>
              Population: <span>{population}</span>
            </h4>
            <h4>
              Region: <span>{region}</span>
            </h4>
            <h4>
              Subregion: <span>{subRegion}</span>
            </h4>
            <h4>
              Capital: <span>{capital}</span>
            </h4>
          </div>
          <div className="right">
            <h4>
              Top level domain: <span>{tld}</span>
            </h4>
            <h4>
              Currencies: <span>{currency[0][1].name}</span>
            </h4>
            <h4>
              languages: <span>{languages}</span>
            </h4>
          </div>
        </div>
        <h4 className="border-countries">Border Countries: {borderCountryCard.length > 0 ? borderCountryCard: <span>No countries</span>}</h4>
      </div>
    </div>
  );
}

export default CountryCardDetails;
