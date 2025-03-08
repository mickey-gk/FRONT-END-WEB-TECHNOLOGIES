document.addEventListener('DOMContentLoaded', () => {
    myform = document.querySelector('#login-form');

    myform.addEventListener('submit', (e) => {
        e.preventDefault();

        // get form data
        form_data = new FormData(myform);
        let json_data = {};

        form_data.forEach((value, key) => {
            json_data[key] = value;
        });

        console.log(json_data)
    });

})