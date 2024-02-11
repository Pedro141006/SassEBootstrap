export default function FilterBySearch() {
    const $inputSearch = document.querySelector('.form-control');
    const cardsTitles = document.querySelectorAll('.card-title');
    $inputSearch.addEventListener('input', function () {
        const searchTerm = this.value.trim().toLowerCase();
        cardsTitles.forEach(function (title) {
            const titleText = title.textContent.toLowerCase();
            if (titleText.includes(searchTerm)) {
                ;
                title.closest('.card').style.display = 'block';
            }
            else {
                ;
                title.closest('.card').style.display = 'none';
            }
        });
    });
}
