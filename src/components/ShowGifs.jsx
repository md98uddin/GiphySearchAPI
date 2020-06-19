import React from "react";

const ShowGifs = ({ gifs, currentTerm }) => {
  return gifs ? (
    <div className="gifs" id="gifs-grid">
      <p>{currentTerm}</p>
      <div
        className="gifs-view"
        id="gifs-view"
        style={{
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          height: "450px",
        }}
      >
        {gifs.map(
          (gif) =>
            gif.embed_url && (
              <iframe
                src={gif.embed_url}
                alt="..."
                className="img-thumbnail"
                key={gif.id}
                style={{ width: 350, height: 150, border: "none" }}
              />
            )
        )}
      </div>
    </div>
  ) : null;
};

export default ShowGifs;
