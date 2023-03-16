let listaLibri = document.getElementById('row1')
const franco = function (data) {
    data.forEach((book) => {
        const card = `
        <div class="col-12 col-md-4 mb-4 h-25">
                <img src="${book.img}" class="card-img-top" alt="." />
                <div class="card-body">
                    <h5>${book.title}</h5>
                    <p class="card-text">${book.price}€</p>
                    <button class="btn btn-primary">Scarta</button>
                </div>
            </div>`;
        listaLibri.innerHTML += card
    });
}
fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
        franco(data)
    })
    .catch((err) => {
        console.log(err)
    })

