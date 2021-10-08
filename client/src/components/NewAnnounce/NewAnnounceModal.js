import React from "react";
import "./NewAnnounceModal.css";

const NewAnnounceModal = () => {
  return (
    <div className="container">
      <div className="Announce_container">
        <h5>Ajouter une annonce</h5>
        <form className="addAnnounce">
          <div>
            <label>Title</label>
            <input type="text" name="title" />
            <label>Description</label>
            <input type="text" name="description" />
            <label>Price</label>
            <input type="number" name="price" />
            <label>Upload Images</label>
            <input type="file" name="avatar" />
            <label>Category</label>
            <select name="category">
              <option value="">--</option>
              <option value="automobile">Automobile</option>
              <option value="immobilier">Immobilier</option>
              <option value="loisir">Loisir</option>
            </select>
            <label>Location</label>
            <select name="location">
              <option value="">--</option>
              <option value="tunis">Tunis</option>
              <option value="sousse">Sousse</option>
              <option value="sfax">Sfax</option>
              <option value="benzart">Benzart</option>
              <option value="gabes">Gabes</option>
            </select>
          </div>
          <button type="submit">Ajouter votre annonce</button>
        </form>
      </div>
    </div>
  );
};

export default NewAnnounceModal;
