async function insertion(){
  const array = document.querySelectorAll(".bar");
  array[0].style.background = '#DA0037';
  for(let i=1;i<array.length;i++)
  {
    let j=i-1;
    let key=array[i].style.height;
    array[i].style.background='#0B6623';
    await waitforme(delay);
    while(j>=0 && (parseInt(array[j].style.height) > parseInt(key)))
    {

      array[j].style.background='#0B6623';
      array[j+1].style.height=array[j].style.height;
      j--;

      await waitforme(delay);

      for(let k = i; k >= 0; k--){
          array[k].style.background = '#DA0037';
      }
    }
    array[j+1].style.height=key;
    array[i].style.background='#DA0037';
  }
}



const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function() {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
