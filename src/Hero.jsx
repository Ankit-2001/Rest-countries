import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import Card from "./Card";
import ThemeContext from "./ThemeContext";

function Hero(props) {
  const { mode, setMode } = useContext(ThemeContext);

  const [countryData, setCountryData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [subregionFilter, setSubregionFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegionFilter(event.target.value);
    setSubregionFilter("");
  };

  const handleSubregionChange = (event) => {
    setSubregionFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredCountries = countryData.filter((country) => {
    // Filter by search Country
    if (
      searchCountry &&
      !country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    ) {
      return false;
    }

    // Filter by region
    if (regionFilter && country.region !== regionFilter) {
      return false;
    }

    // Filter by subregion
    if (subregionFilter && country.subregion !== subregionFilter) {
      return false;
    }

    return true;
  });

  const sortedCountries = filteredCountries.sort((a, b) => {
    // Sort by population
    if (sortBy === "pop-desc") {
      return b.population - a.population;
    } else if (sortBy === "pop-asc") {
      return a.population - b.population;
    }

    // Sort by area
    if (sortBy === "area-desc") {
      return b.area - a.area;
    } else if (sortBy === "area-asc") {
      return a.area - b.area;
    }

    // Default
    return 0;
  });

  const countryCard = sortedCountries.map((country, id) => {
    return <Card {...country} key={id} />;
  });

  //Get Regions
  const regions = [...new Set(countryData.map((country) => country.region))];

  // Get subregions for selected region
  const subregions = [
    ...new Set(
      countryData
        .filter((country) => country.region === regionFilter)
        .map((country) => country.subregion)
    ),
  ];

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading....</h2>
      ) : (
        <div>
          <form className="filter-country">
            {/* <label htmlFor="searchCountry"></label> */}
            <input
              placeholder="Search for country"
              type="text"
              id="searchCountry"
              value={searchCountry}
              onChange={handleSearchChange}
            />

            {/* <label htmlFor="region"></label> */}
            <select
              id="region"
              value={regionFilter}
              onChange={handleRegionChange}
            >
              <option value="">Search for region</option>
              {regions.map((region, id) => (
                <option value={region} key={id}>
                  {region}
                </option>
              ))}
            </select>

            {/* <label htmlFor="subregion"></label> */}
            <select
              id="subregion"
              value={subregionFilter}
              onChange={handleSubregionChange}
            >
              <option value="">Search for subregion</option>
              {subregions.map((subregion, id) => (
                <option value={subregion} key={id}>
                  {subregion}
                </option>
              ))}
            </select>

            {/* <label htmlFor="sort"></label> */}
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="">Sort by</option>
              <option value="pop-asc">Population(Ascending)</option>
              <option value="pop-desc">Population(Descending)</option>
              <option value="area-asc">Area(Ascending)</option>
              <option value="area-desc">Area(Descending)</option>
            </select>
          </form>
          <div className="country-card">{countryCard}</div>
        </div>
      )}
    </>
  );
}

export default Hero;
