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

function moveLeft(event, targetClass) {
    event.preventDefault();

    let target = document.querySelector(targetClass);

    if (isNaN(target.scrollLeft)) {
        target.scrollLeft = 0;
    };

    target.scrollLeft += -100;
    console.log(target.scrollLeft);
}

function moveRight(event, targetClass) {
    event.preventDefault();

    let target = document.querySelector(targetClass);

    if (isNaN(target.scrollLeft)) {
        target.scrollLeft = 0;
    };

    target.scrollLeft += 100;
    console.log(target.scrollLeft);
}