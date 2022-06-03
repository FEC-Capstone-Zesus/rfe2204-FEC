function updateCarousel (e, direction, imagesArray, mainImage, max, slice, changeMainImage, changeSlice) {
  if ((slice[0] > 0 && direction === 'up') || (slice[1] < max && direction === 'down')) {
    var newSlice = direction === 'down' ? [slice[0] + 1, slice[1] + 1] : [slice[0] - 1, slice[1] - 1];
    var newIndex = slice[2];

    if (imagesArray[slice[0]].url === mainImage && direction === 'down') {
      newIndex = slice[2] + 1;
      changeMainImage(imagesArray[slice[0] + 1].url);
    }

    if (imagesArray[slice[1] - 1].url === mainImage && direction === 'up') {
      newIndex = slice[2] - 1;
      changeMainImage(imagesArray[slice[1] - 2].url);
    }

    changeSlice([...newSlice, newIndex]);
  }
  e.stopPropagation();
}

function horizontalClick (e, direction, imagesArray, mainImage, max, slice, changeMainImage, changeSlice) {
  if ((slice[2] > 0 && direction === 'left') || (slice[2] < max - 1 && direction === 'right')) {
    var newIndex = direction === 'right' ? slice[2] + 1 : slice[2] - 1;

    if (imagesArray[slice[0]].url === mainImage && direction === 'left') {
      changeSlice([slice[0] - 1, slice[1] - 1, newIndex]);
    } else if (imagesArray[slice[1] - 1].url === mainImage && direction === 'right') {
      changeSlice([slice[0] + 1, slice[1] + 1, newIndex]);
    } else {
      changeSlice([slice[0], slice[1], newIndex]);
    }

    changeMainImage(imagesArray[newIndex].url);
  }
  e.stopPropagation();
}

module.exports = {
  updateCarousel,
  horizontalClick
}