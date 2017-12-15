console.log(navigator.geolocation)

function initialize(selector) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }
  function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    $("#long").html(lat);
    $("#lang").html(lng);
  }

  function errorFunction() {
    alert("Geocoder failed");
  }

  // $.ajax({
  //   type: 'GET',
  //   url: `http://localhost:3000/zomato?lat=-6.2601516&lng=106.781753099`,
  //   success: function (response) {
  //     console.log(response)
  //     $(selector).empty()
  //     response.forEach(showData =>{
  //       $(selector).append(
  //         `<div class="item">
  //         <img class="ui avatar image" src="">
  //         <div class="content">
  //             <a class="header">${showData.restaurant.name}</a>
  //             <div class="description">${showData.restaurant.cuisines}
  //         </div>
  //       </div>`

  //       )
  //     })
  //   }
  // })
}