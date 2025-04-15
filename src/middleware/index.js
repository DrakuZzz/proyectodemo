fetch('/sidebar')
    .then(res => res.text())
    .then(data => {
        document.getElementById('sidebar').innerHTML = data;

        document.getElementById('Nosotros').addEventListener('click', (e) => {
            e.preventDefault();
            fetch('/us')
                .then(res => res.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                });
        });
    });

fetch('/header')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

    