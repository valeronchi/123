document.getElementById('add-image-button').addEventListener('click', function() {
    document.getElementById('image-upload').click();
  });
  
  document.getElementById('image-upload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var imageUrl = e.target.result;
      var galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      var image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'Новое изображение';
      galleryItem.appendChild(image);
      document.querySelector('.gallery').appendChild(galleryItem);
    };
    reader.readAsDataURL(file);
  });
  