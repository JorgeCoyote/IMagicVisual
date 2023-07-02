$(function() {
    $('#image-input').on('change', function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#preview-image').attr('src', e.target.result);
      };
  
      reader.readAsDataURL(file);
    });
  });
  