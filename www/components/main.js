$(document).on("click", "#gps", function () {
    var onSuccess = function (position) {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        var Longitude = document.getElementById("input2");
         var Latitude = document.getElementById("input1");
       Longitude.innerHTML = longitude ;
        Latitude.innerHTML = latitude ;
    };
    var onError = function (error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
