document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsContainer = document.getElementById("reviews");

    reviewForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = < p > < strong > $ { name }: < /strong> ${comment}</p > ;

        // Додаємо новий відгук зверху
        reviewsContainer.insertBefore(reviewElement, reviewsContainer.firstChild);

        // Очищаємо поля форми
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    });
});