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
    searchTerm: null,
    currentTerm: null,
    gifSort: null,
    gifFilter: null,
    filterSelection: null,
    isLoading: false,
    gifSize: 24,
  };

  //on component mounting, call API for trending
  // Default page
  componentDidMount = async () => {
    const { gifs, gifSize } = this.state;
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
        this.refreshTrending(gifSize);
      }
    }
  };

  refreshTrending = async (size) => {
    this.setState({
      isLoading: true,
    });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${size}`
      )
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
  onSearchTermSubmit = async (searchTerm, size) => {
    this.setState({
      isLoading: true,
    });
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=${size}`
      )
      .then((res) => {
        this.setState({
          gifs: res.data.data,
          currentTerm: searchTerm,
          isLoading: false,
          gifSize: size,
        });
      });
  };

  //onScroll end, load more gifs
  onScrollEnd = (event) => {
    var { scrollHeight, scrollTop, clientHeight } = event.target;
    var bottom = scrollHeight - scrollTop === clientHeight;
    if (bottom === true) {
      var newSize = this.state.gifSize + 9;
      this.setState({
        gifSize: newSize,
      });

      if (this.state.searchTerm)
        return this.onSearchTermSubmit(this.state.searchTerm, newSize);

      return this.refreshTrending(newSize);
    }
  };

  render() {
    const { gifs, currentTerm, searchTerm, isLoading, gifSize } = this.state;
    return (
      <div className="container">
        <SearchBar
          setSearchTerm={this.setSearchTerm}
          onSearchTermSubmit={this.onSearchTermSubmit}
          refreshTrending={this.refreshTrending}
          searchTerm={searchTerm}
          gifSize={gifSize}
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
        <ShowGifs
          gifs={gifs}
          currentTerm={currentTerm}
          isLoading={isLoading}
          onScrollEnd={this.onScrollEnd}
          gifSize={gifSize}
        />
      </div>
    );
  }
}

export default App;
