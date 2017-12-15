
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
    type: 'POST',
    url: `http://localhost:3000/api/analyze`,
    data: {link: $('#foodURL').val()},
    success: (responseFood) => {
      $.ajax({
        type: 'GET',
        url: `http://localhost:3000/zomato?lat=${lat}&lng=${lng}&food=${responseFood.data}`,
        success: function (response) {
          console.log('Masuk sini')
          $("#long").empty()
          if (response.length == 0) {
            $("#long").append('Not found')
          } else {
            console.log(response)
            response.forEach(showData =>{
              $("#long").append(
                `<div class="item">
                <img class="ui avatar image" src="">
                <div class="content">
                    <a class="header" href="${showData.url}">${showData.name}</a>
                    <div class="description">${showData.cuisines}
                </div>
              </div>`
              )
            })
          }
        }
      })
    }})
    
  }
  function errorFunction() {
    alert("Geocoder failed");
  }

  $(this).on("click","#logout",function(event){
        event.preventDefault();
        localStorage.removeItem("ui item");
        window.location.reload();
    });
}
