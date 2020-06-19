import React from "react";

const ShowGifs = ({ gifs, currentTerm }) => {
  return gifs ? (
    <div className="gifs" id="gifs-grid">
      <p>{currentTerm}</p>
      <div className="gifs-view">
        {gifs.map(
          (gif) =>
            gif.bitly_gif_url && (
              <iframe
                src={gif.embed_url}
                alt="..."
                className="img-thumbnail"
                key={gif.id}
              />
            )
        )}
      </div>
    </div>
  ) : null;
};

export default ShowGifs;
