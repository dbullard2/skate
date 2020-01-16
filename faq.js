const expandableItems = document.querySelectorAll('.expandable').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle("hidden");
        $(this).css({ "height": "auto"});
    });
})