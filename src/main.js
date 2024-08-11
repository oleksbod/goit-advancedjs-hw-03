import { fetchImages } from './js/pixabay-api';
import { showGallery, showToast } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedValue = event.target.elements.user_query.value.trim();

    if (searchedValue === '') {
        showToast("Fill out the search field!");
        searchForm.reset();
        return;
    }

    loader.classList.remove('is-hidden');

    fetchImages(searchedValue)
        .finally(() => {
            loader.classList.add('is-hidden');
            searchForm.reset();
        })
        .then((result) => {
            if (result && result?.hits?.length === 0) {
                showToast("Sorry, there are no images matching your search query. Please try again!");
                showGallery([]);
                searchForm.reset();
                return;
            }

            showGallery(result.hits);

        })
        .catch(err => {
            console.log(err);
        });
};

searchForm.addEventListener('submit', onSearchFormSubmit);