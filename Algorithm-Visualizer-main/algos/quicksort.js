async function partition(array, l, h) {
  let pivot = parseInt(array[h].style.height);
  array[h].style.background = '#39A2DB';
  let i = l - 1;
  for (let j = l; j < h; j++) {
    array[j].style.background = '#FFC107';
    await waitforme(delay);
    if (parseInt(array[j].style.height) < pivot) {
      i++;
      array[i].style.background = '#C84B31';
      swap(array[i], array[j]);
      await waitforme(delay);
      array[i].style.background = '#A239EA';
    }
    array[j].style.background = '#A239EA';
  }
  await waitforme(delay);
  swap(array[i + 1], array[h]);
  array[h].style.background = '#A239EA';
  array[i + 1].style.background = '#0B6623';
  return (i + 1);
}

async function qsort(array, l, h) {
  if (l < h) {
    let p = await partition(array, l, h);
    await qsort(array, l, p - 1);
    for (let i = l; i < p; i++) {
      array[i].style.background = '#DA0037';
    }
    await qsort(array, p + 1, h);
    for (let i = p; i <= h; i++) {
      array[i].style.background = '#DA0037';
    }
  }
}

async function quick() {
  const array = document.querySelectorAll(".bar");
  const n = array.length;
  let l = 0,
    h = n - 1;
  await qsort(array, l, h);
}



const quickbtn = document.querySelector(".quickSort");
quickbtn.addEventListener('click', async function() {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await quick();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
