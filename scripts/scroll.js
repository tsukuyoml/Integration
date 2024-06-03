const partnersList = document.querySelector('.partners-list');

partnersList.addEventListener('wheel', function(evt) {
    evt.preventDefault();
    
    if (isNaN(this.scrollLeft)) {
        this.scrollLeft = 0;
    }

    this.scrollLeft += evt.deltaY;
    console.log(this.scrollLeft, evt.deltaY)
});