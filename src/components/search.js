import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

export default function Search({ panTo }) {  
  

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */ 
    },
    debounce: 300
  });


  const handleIntroverts = () => {
    // Update the keyword of the input element
    let e;
    let intro = ['cafe', 'bowling', 'museum', 'restaurant'];
    e = intro[Math.floor(Math.random() * intro.length)]
  
    // handleSelect(e);
    setValue(e);
  };

  const handleExtroverts = () => {
    // Update the keyword of the input element
    let e;
    let intro = ['amusement park', 'public park', 'zoo', 'bar'];
    e = intro[Math.floor(Math.random() * intro.length)]
  
    // handleSelect(e);
    setValue(e);
  };


  // this works +++++++++++++++++++++++++++++
  // not sure why but if you remove second arrow function below
  // you type one letter and it keeps bringing up new pins
  const handleSelect = ({ description }, autoSelect = false) => () => {

    console.log('lookin for ')
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    if (!autoSelect) {
      setValue(description, false);
      clearSuggestions();
    }

    // description:
    // console.log(description) => PUBLIC Hotel, Chrystie Street, New York, NY, USA for 'pub' input
    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      // .then(function(results) { 
      //   // console.log(results)
      //   getLatLng(results[0])
      // })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        panTo({ lat, lng });
      })
      .catch(error => {
        console.log("😱 Error: ", error);
      });
  };

  // // testing handleSelect ++++++++++++++++++++++++
  // const handleSelect = () => () => {

  // }

  const renderSuggestions = () => {
    // console.log(data) 
    let sugg = data[0]
    // console.log(sugg)
    // handleSelect(sugg)
    return data.map(suggestion => {
      // console.log(suggestion)
      var {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;
        
    // var suggestion;
    // const intro = ['cafe', 'bowling', 'museum', 'restaurant'];
    // suggestion =  intro[Math.floor(Math.random() * intro.length)] 

      // console.log('lookin for sug', suggestion)
      return (
       <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  }

  if (data.length > 0) {
    // console.log(handleSelect(data[0]))
    handleSelect(data[0], true)()
  }

  // to fix this janky ass code
  // get suggestions, make window of max lat,lon of all locations
  // pan to that center and it'll zoom to a window that only fits those 
  // get median of rectangle made, then make window that size

  return (
    <div>
      {/* working input search bar */}
      <input
        value={value}
        // onChange={handleSelect(value)}
        disabled={!ready}
        // placeholder="Where are you going?"
      /> 
      {/* <button onClick={handleInput}>yooooooo</button> */}
      <button onClick={handleIntroverts}>Introvert</button>
      <button onClick={handleExtroverts}>Extrovert</button>
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
      {/* {status === "OK"} */}
    </div>
  );
}