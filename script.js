// Secleting current img;
const current = document.querySelector('#current');
// Selectin all images 
const imgGallery = document.querySelectorAll('.img-container img');


// change current img ;
function imgChange(e){
    // change current img to new img;
    current.src = e.target.src;
    // add fade in class to current img;
    current.classList.add('fade');
    // remove fadein class afte .5 sec;
   setTimeout(() => current.classList.remove('fade'), 500);
}




// loop througn the imges to get each img;
// adding the click event to the img;
imgGallery.forEach(img => img.addEventListener('click', imgChange));