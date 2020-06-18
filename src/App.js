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
    newestGifs: false,
    oldestGifs: false,
  };

  //on component mounting, call API for tending
  componentDidMount = async () => {
    if (this.state.gifs === null) {
      axios
        .get("http://api.giphy.com/v1/gifs/trending", { api_key: API_KEY })
        .then(async (res) => {
          console.log("res", res.data.data);
        });
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
    return (
      <div className="container">
        <SearchBar
          setSearchTerm={this.setSearchTerm}
          onSearchTermSubmit={this.onSearchTermSubmit}
        />
        <FilterSort />
        <ShowGifs />
      </div>
    );
  }
}

export default App;
