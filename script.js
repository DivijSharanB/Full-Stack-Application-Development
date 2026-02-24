document.addEventListener("DOMContentLoaded", function(){

    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function(e){
        e.stopPropagation();
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(){
        dropdownContent.style.display = "none";
    });

});