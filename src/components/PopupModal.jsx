import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function PopupModal({ selectedCountry, openModal, onClose }) {
  const handleCloseModal = () => {
    onClose();
  };
  console.log(selectedCountry, "sel");

  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogContent>
        {selectedCountry && (
          <div>
            <img src={selectedCountry.img} alt="" />
            <h2>{selectedCountry.name}</h2>
            <p>
              Continent:{" "}
              {selectedCountry.continents && selectedCountry.continents[0]}
            </p>
            <p>
              Language:{" "}
              {selectedCountry.languages && selectedCountry.languages.language}
            </p>

            <p>Country Code: {selectedCountry.cca2}</p>
            <p>Native Name: {selectedCountry.nativeName}</p>
            <p>Alternative name: {selectedCountry.altSpellings}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PopupModal;
