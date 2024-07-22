async function sortedMerge(array, l, mid, r) {
  const n1 = mid - l + 1;
  const n2 = r - mid;
  var left = new Array(n1);
  var right = new Array(n2);
  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    array[l + i].style.background = '#39A2DB';
    left[i] = array[l + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    array[mid + 1 + i].style.background = '#FFC107';
    right[i] = array[mid + 1 + i].style.height;
  }
  var i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    if ((n1 + n2) === array.length) {
      array[k].style.background = '#DA0037';
    } else {
      array[k].style.background = '#0B6623';
    }
    if (parseInt(left[i]) <= parseInt(right[j])) {
      array[k].style.height = left[i];
      k++;
      i++;
    } else {
      array[k].style.height = right[j];
      k++;
      j++;
    }
  }
  while (i < n1) {
    if ((n1 + n2) === array.length) {
      array[k].style.background = '#DA0037';
    } else {
      array[k].style.background = '#0B6623';
    }
    await waitforme(delay);
    array[k].style.height = left[i];
    k++;
    i++;
  }
  while (j < n2) {
    if ((n1 + n2) === array.length) {
      array[k].style.background = '#DA0037';
    } else {
      array[k].style.background = '#0B6623';
    }
    await waitforme(delay);
    array[k].style.height = right[j];
    k++;
    j++;
  }
}


async function mergeSortAlgo(array, l, r) {
  if (l >= r)
    return;
  var mid = Math.floor((l + r) / 2);
  await mergeSortAlgo(array, l, mid);
  await mergeSortAlgo(array, mid + 1, r);
  await sortedMerge(array, l, mid, r);
}


async function merge() {
  var array = document.querySelectorAll(".bar");
  await mergeSortAlgo(array, 0, array.length - 1);
}



const mergebtn = document.querySelector(".mergeSort");
mergebtn.addEventListener('click', async function() {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await merge();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
