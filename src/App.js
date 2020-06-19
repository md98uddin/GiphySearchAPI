import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ShowGifs from "./components/ShowGifs";

//to make api call to GIPHY API
const API_KEY = "CrttO3jUNbjZm6l442VFCXjvB7ZmmNq6";

class App extends Component {
  state = {
    gifs: null,
    searchTerm: null,
    currentTerm: null,
    newestGifs: false,
    oldestGifs: false,
  };

  //on component mounting, call API for trending
  componentDidMount = async () => {
    const { gifs } = this.state;
    var storage = localStorage.getItem("gifs-arr");

    if (gifs === null) {
      //check localstorage for data and set to state
      if (storage.length > 0) {
        this.setState({
          gifs: JSON.parse(storage),
        });
      } else {
        //if no localstorage, call trend api
        axios
          .get(
            `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24`
          )
          .then(async (res) => {
            //set data to localstorage for quick fast access
            localStorage.setItem("gifs-arr", JSON.stringify(res.data.data));
            this.setState({
              gifs: res.data.data,
              currentTerm: "Trending",
            });
          });
      }
    }
  };

  //setSearch term on search type
  setSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  //make the api call with search term on submit
  onSearchTermSubmit = () => {};

  render() {
    const { gifs, currentTerm, searchTerm } = this.state;
    return (
      <div className="container">
        <SearchBar
          setSearchTerm={this.setSearchTerm}
          onSearchTermSubmit={this.onSearchTermSubmit}
          searchTerm={searchTerm}
        />
        <FilterSort />
        <ShowGifs gifs={gifs} currentTerm={currentTerm} />
      </div>
    );
  }
}

export default App;
