var Utils = function () {

}
Utils.prototype = {
  imgUrlToBase64: function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
  },
  previewFile: function () {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
      preview.src = reader.result;
      console.log(preview.src);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
var utils = new Utils();
