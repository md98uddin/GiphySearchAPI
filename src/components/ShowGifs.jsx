import React from "react";
import Loader from "react-loader-spinner";

const ShowGifs = ({ gifs, currentTerm, isLoading, onScrollEnd, gifSize }) => {
  return (
    gifs && (
      <div className="gifs" id="gifs-grid" style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>
          {currentTerm} {gifSize} gifs. scroll to bottom to show more.
        </p>
        <div
          className="gifs-view"
          id="gifs-view"
          style={{
            backgroundColor: "whitesmoke",
            overflowY: "scroll",
            height: "450px",
            textAlign: "center",
          }}
          onMouseUp={(e) => onScrollEnd(e)}
        >
          {isLoading ? (
            <div className="loader" style={{ marginTop: 150 }}>
              <Loader />
            </div>
          ) : (
            <div className="gifs-inner">
              {gifs.map(
                (gif) =>
                  gif.embed_url && (
                    <iframe
                      src={gif.embed_url}
                      alt="..."
                      className="img-thumbnail"
                      key={gif.id}
                      style={{
                        width: 350,
                        height: 150,
                        border: "none",
                        backgroundColor: "whitesmoke",
                      }}
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
