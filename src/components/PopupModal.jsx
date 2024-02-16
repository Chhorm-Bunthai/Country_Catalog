import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function PopupModal({ selectedCountry, openModal, onClose }) {
  const handleCloseModal = () => {
    onClose();
  };
  const boldTextStyle = {
    fontWeight: "bold",
  };
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogContent>
        {selectedCountry && (
          <div>
            <img src={selectedCountry.img} alt="Country's Flags" />
            <h2>{selectedCountry.name}</h2>
            <p>
              {" "}
              <span style={boldTextStyle}>Population:</span>{" "}
              {selectedCountry.population}
            </p>
            <p>
              <span style={boldTextStyle}>Capital:</span>{" "}
              {selectedCountry.capital && selectedCountry.capital[0]}
            </p>
            <p>
              <span style={boldTextStyle}>Continent: </span>{" "}
              {selectedCountry.continents && selectedCountry.continents[0]}
            </p>
            <p>
              <span style={boldTextStyle}>subregion:</span>{" "}
              {selectedCountry.subregion}
            </p>
            <p>
              <span style={boldTextStyle}>Currencies:</span>{" "}
              {Object.keys(selectedCountry?.currencies || {})?.map(
                (cur, index, array) => (
                  <span key={cur}>
                    {selectedCountry?.currencies[cur]?.name} (
                    {selectedCountry?.currencies[cur]?.symbol})
                    {index < array.length - 1 ? ", " : ""}
                  </span>
                )
              )}
            </p>
            <p>
              <span style={boldTextStyle}>Gender:</span>{" "}
              {Object.keys(selectedCountry?.demonyms || {})
                .filter((key) => key !== "fra")
                .map((key, index, array) => (
                  <span key={key}>
                    {`${key} (M: ${selectedCountry?.demonyms[key]?.m}, F: ${selectedCountry?.demonyms[key]?.f})`}
                    {index !== array.length - 1 ? ", " : ""}
                  </span>
                ))}
            </p>

            <p>
              {" "}
              <span style={boldTextStyle}>Langauges:</span>{" "}
              {Object.keys(selectedCountry?.languages || {})?.map(
                (language, index, array) => (
                  <span key={language}>
                    {`${language} (${selectedCountry?.languages[language]})`}
                    {index < array.length - 1 ? ", " : ""}
                  </span>
                )
              )}
            </p>
            <p>
              <span style={boldTextStyle}>Fifa:</span>{" "}
              {selectedCountry.fifa ? selectedCountry.fifa : "Non Exist"}
            </p>
            <p>
              <span style={boldTextStyle}>Independent:</span>{" "}
              {selectedCountry?.independent ? "Yes" : "No"}
            </p>
            <p>
              <span style={boldTextStyle}>LandLocked:</span>{" "}
              {selectedCountry?.landlocked ? "Yes" : "No"}
            </p>
            <p>
              <span style={boldTextStyle}>Area:</span> {selectedCountry?.area}
            </p>
            <p>
              <span style={boldTextStyle}>PostalCode:</span>{" "}
              {selectedCountry?.postalCode
                ? selectedCountry?.postalCode?.format
                : "Non-exist"}
            </p>
            <p>
              <span style={boldTextStyle}>Start of the Week:</span>{" "}
              {selectedCountry?.startOfWeek}
            </p>
            <p>
              <span style={boldTextStyle}>status:</span>{" "}
              {selectedCountry?.status}
            </p>
            <p>
              <span style={boldTextStyle}>flag: </span> {selectedCountry?.flag}
            </p>
            <p>
              <span style={boldTextStyle}>latlng: </span>
              {`${selectedCountry?.latlng[0]}, ${selectedCountry?.latlng[1]}`}
            </p>
            <p>
              <span style={boldTextStyle}>maps: </span>
              {selectedCountry?.maps?.googleMaps}
            </p>
            <p>
              <span style={boldTextStyle}>Timezones:</span>{" "}
              {selectedCountry?.timezones}
            </p>
            <p>
              <span style={boldTextStyle}>TLD:</span> {selectedCountry?.tld}
            </p>
            <p>
              {" "}
              <span style={boldTextStyle}>Gini:</span>{" "}
              {Object.keys(selectedCountry?.gini || {}).length > 0
                ? Object.keys(selectedCountry.gini).map(
                    (year, index, array) => (
                      <span key={year}>
                        {`${year}: ${selectedCountry.gini[year]}`}
                        {index < array.length - 1 ? ", " : ""}
                      </span>
                    )
                  )
                : "Non-exist"}
            </p>
            <p>
              {""}
              <span style={boldTextStyle}>Translations:</span>{" "}
              {Object.keys(selectedCountry?.translations || {}).length > 0
                ? Object.keys(selectedCountry.translations).map(
                    (lan, index, array) => (
                      <span key={lan}>
                        {`${lan}: ${selectedCountry.translations[lan].official}`}
                        {index < array.length - 1 ? ", " : ""}
                      </span>
                    )
                  )
                : "Non-exist"}
            </p>
            <p>
              <span style={boldTextStyle}>coatOfArms: </span>{" "}
              {selectedCountry?.coatOfArms?.png}
            </p>

            <p>
              <span style={boldTextStyle}>unMember: </span>
              {selectedCountry?.unMember ? "true" : "no"}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PopupModal;
