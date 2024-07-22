async function selection() {
  const array = document.querySelectorAll(".bar");
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minInd = i;
    array[i].style.background = '#39A2DB';
    for (let j = i + 1; j < n; j++) {
      array[j].style.background = '#0B6623';
      await waitforme(delay);
      if (parseInt(array[j].style.height) < parseInt(array[minInd].style.height)) {
        if(minInd!=i)
        array[minInd].style.background = '#A239EA';
        minInd = j;
      }
      array[j].style.background = '#A239EA';
      if(minInd!=i)
      array[minInd].style.background = '#FFC107';
    }
    await waitforme(delay);
    swap(array[minInd], array[i]);
    array[i].style.background = '#DA0037';
    if(minInd!=i)
    array[minInd].style.background = '#A239EA';
  }
  array[n-1].style.background = '#DA0037';
}



const selectionbtn = document.querySelector(".selectionSort");
selectionbtn.addEventListener('click', async function() {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await selection();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
