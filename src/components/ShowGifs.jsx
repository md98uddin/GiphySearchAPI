import React from "react";
import Loader from "react-loader-spinner";

const ShowGifs = ({ gifs, currentTerm, isLoading }) => {
  return (
    gifs && (
      <div className="gifs" id="gifs-grid" style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>{currentTerm} </p>
        <div
          className="gifs-view"
          id="gifs-view"
          style={{
            backgroundColor: "whitesmoke",
            overflowY: "scroll",
            height: "450px",
            textAlign: "center",
          }}
        >
          {isLoading ? (
            <div className="loader" style={{ marginTop: 150 }}>
              <Loader />
            </div>
          ) : (
            <div>
              {gifs.map(
                (gif) =>
                  gif.embed_url && (
                    <iframe
                      src={gif.embed_url}
                      alt="..."
                      className="img-thumbnail"
                      key={gif.id}
                      style={{ width: 350, height: 150, border: "none" }}
                      title={gif.id}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ShowGifs;
