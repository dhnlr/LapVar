
function initialize(selector) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }
  function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    $("#long").html(lat);
    $("#lang").html(lng);
    $.ajax({
    type: 'GET',
    url: `http://localhost:3000/zomato?lat=${lat}&lng=${lng}`,
    success: function (response) {
      console.log(response)
      $("#long").empty()
      response.forEach(showData =>{
        $("#long").append(
          `<div class="item">
          <img class="ui avatar image" src="">
          <div class="content">
              <a class="header">${showData.restaurant.name}</a>
              <div class="description">${showData.restaurant.cuisines}
          </div>
        </div>`

        )
      })
    }
  })
  }
  function errorFunction() {
    alert("Geocoder failed");
  }

  
}