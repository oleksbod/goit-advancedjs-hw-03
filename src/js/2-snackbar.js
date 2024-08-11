import iziToast from "izitoast";

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    const delay = parseInt(event.target.delay.value);
    const state = event.target.state.value;

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({
                position: "topRight",
                icon: 'icon-bi_check2-circle',
                progressBarColor: 'rgb(50, 97, 1)',
                title: "OK",
                message: `Fulfilled promise in ${delay}ms`
            });
        })
        .catch((delay) => {
            iziToast.error({
                position: "topRight",
                icon: 'icon-bi_x-octagon',
                title: 'Error',
                progressBarColor: 'rgb(181, 27, 27)',
                message: `Rejected promise in ${delay}ms`
            });
        });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}