import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountryCardDetails from "./CountryCardDetails";
import ThemeContext from "./ThemeContext";

function CountryDetails() {
  const { mode, setMode } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const countryCard = detail.map((data) => {
    const countryName = data.name.official;
    const population = data.population;
    const region = data.region;
    let currency = data.currencies;
    currency = Object.entries(currency);
    const tld = data.tld[0];
    const subRegion = data.subregion;

    const languages = data.languages;
    const allLanguages = [];
    for (let key in languages) {
      allLanguages.push(languages[key]);
    }

    let nativeName;
    for (const lang in data.name.nativeName) {
      if (data.name.nativeName.hasOwnProperty(lang)) {
        nativeName = data.name.nativeName[lang].common;
        break;
      }
    }

    const capital = data.capital;
    const borderCountries = data.borders;
    const img = data.flags;
    const countryData = {
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
    };

    return <CountryCardDetails {...countryData} key={0} />;
  });

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading....</h2>
      ) : (
        <div className={` details`}>
          <button className={`${mode ? "dark" : "light"}`}>
            <Link to="/">Back</Link>
          </button>
          {countryCard}
        </div>
      )}
    </>
  );
}

export default CountryDetails;
