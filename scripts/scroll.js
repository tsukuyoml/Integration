function handleScroll(event, targetClass='') {
    event.preventDefault();
    
    let target;
    if (targetClass.length === 0) {
        target = event.currentTarget;
    } else {
        target = document.querySelector(targetClass);
    }
    
    if (isNaN(target.scrollLeft)) {
        target.scrollLeft = 0;
    }

    target.scrollLeft += event.deltaY;
    console.log(target.scrollLeft, event.deltaY);
};