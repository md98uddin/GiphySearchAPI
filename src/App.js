import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ShowGifs from "./components/ShowGifs";

//
//  Deleted FilterSort and SelectOptions
//

//to make api call to GIPHY API
const API_KEY = "CrttO3jUNbjZm6l442VFCXjvB7ZmmNq6";

class App extends Component {
  state = {
    gifs: null,
    searchTerm: null, //What user types on search bar
    currentTerm: null, //The filter selection
    filterSelection: 'null', // The filter currently selected
    isLoading: false,
  };

  //on component mounting, call API for trending
  // Default page
  componentDidMount = async () => {
    const { gifs } = this.state;
    var storage = localStorage.getItem("gifs-arr");

    this.setState({
      isLoading: true,
    });

    if (gifs === null) {
      //check localstorage for data and set to state
      if (storage) {
        this.setState({
          gifs: JSON.parse(storage),
          currentTerm: "trending",
          isLoading: false,
        });
      } else {
        //if no localstorage, call trend api
        this.refreshTrending();
      }
    }
  };

  // Called if there is no local data stored
  refreshTrending = async () => {
    this.setState({
      isLoading: true,
    });
    axios
      .get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24`)
      .then(async (res) => {
        //set data to localstorage for quick fast access
        localStorage.setItem("gifs-arr", JSON.stringify(res.data.data));
        this.setState({
          gifs: res.data.data,
          currentTerm: "trending",
          isLoading: false,
        });
      });
  };

  //setSearch term on search type
  setSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

    //handleChange changes the filter selected
    handleChange = (event) => {
      this.setState({
        filterSelection: event.target.value,
      });
    };

  //make the api call with search term on submit
  onSearchTermSubmit = async () => {
    this.setState({
      isLoading: true,
    });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${this.state.searchTerm}&limit=24`
      )
      .then((res) => {
        this.setState({
          gifs: res.data.data,
          currentTerm: this.state.searchTerm,
          isLoading: false,
        });
      });
  };

  render() {
    const { gifs, currentTerm, searchTerm, isLoading } = this.state;
    //var test = this.state.filterSelection;
    return (
      <div className="container">
        <SearchBar
          setSearchTerm={this.setSearchTerm}
          onSearchTermSubmit={this.onSearchTermSubmit}
          refreshTrending={this.refreshTrending}
          searchTerm={searchTerm}
        />
        <div>
          <select
            value={this.state.filterSelection}
            onChange={this.handleChange}
            >
            <option value="relevance">Relevance</option>
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <ShowGifs gifs={gifs} currentTerm={currentTerm} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
