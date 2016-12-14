import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  //handle the input change
  onInputChange(e){
    console.log(e.target.value);
    this.setState({
      term: e.target.value
    })
  }
  //handle the submit
  onFormSubmit(e){
    e.preventDefault();
    //Go get weather
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
    document.querySelector('.search').className="row searched";
  }
  handleKeypress(){

  }
  render(){
    return(
      <div className="row search">
        <div className="abs">
          <h1 className="display-4">Begin your search:</h1>
          <p className='lead'>
           Get the average temperature, humidity and pressure.
           You can also enter multiple cities and observe and compare them.
           </p>
        </div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
            placeholder="Get stats on the next five days.."
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            onKeyDown={this.handleKeypress}
            />
        <span className="input-group-btn">
          <button  type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      </div>
    )
  }
}
//usual redux boiler stuff
//bind fetchWeather to the dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
//combine the dispatch with the searchbar
export default connect(null, mapDispatchToProps)(SearchBar);
