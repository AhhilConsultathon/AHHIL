function checkMediaQuery() {
    if (window.innerWidth > 992) {
        document.getElementById("closebtn").click()
    }
}


window.addEventListener('resize', checkMediaQuery);



