async function bubble() {
  const array = document.querySelectorAll(".bar");
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      array[j].style.background = '#0B6623';
      array[j + 1].style.background = '#0B6623';
      if (parseInt(array[j].style.height) > parseInt(array[j + 1].style.height)) {
        await waitforme(delay);
        swap(array[j], array[j + 1]);
      }
      array[j].style.background = '#A239EA';
      array[j + 1].style.background = '#A239EA';
    }
    array[n - 1 - i].style.background = '#DA0037';
  }
  array[0].style.background = '#DA0037';
}



const bubblebtn = document.querySelector(".bubbleSort");
bubblebtn.addEventListener('click', async function() {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
