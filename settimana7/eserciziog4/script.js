const ALBUM_URL = 'https://api.pexels.com/v1/search?query=ocean';
const ALBUM_URL2 = 'https://api.pexels.com/v1/search?query=Tigers';
const prendiBtn1 = document.getElementById('loadImages1')
const prendiBtn2 = document.getElementById('loadImages2')
let prendiCard = document.getElementById('corpoDellaColonna')

const inserisciFoto = function (img) {
    prendiBtn1.addEventListener('click', () => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('col', 'col-4', 'd-flex', 'flex-wrap')
        newDiv.innerHTML = `<div class="card mb-4 shadow-sm">
    <img src="${img.src.medium}" alt="foto">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c" />
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
        Thumbnail
      </text>
    </svg>
    <div class="card-body">
      <h5 class="card-title">Lorem Ipsum</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>`
        prendiCard.appendChild(newDiv)
    });
}

inserisciFoto()

const stampaFoto1 = function () {
    fetch(ALBUM_URL, {
        headers: {
            Authorization: "EbtsNPI4pM05uwRyVSxFbSTb5gPkA5LIdgH4K24JqiOEGU9X8vItd8ut",
        }
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.photos.forEach((img) => {
                inserisciFoto(img)
            })

        })
        .catch(err => {
            console.log(err)
        })
}
stampaFoto1()

const inserisciFoto2 = function (img2) {
    prendiBtn2.addEventListener('click', () => {
        let newDiv2 = document.createElement('div')
        newDiv2.classList.add('col', 'col-4', 'd-flex', 'flex-wrap')
        newDiv2.innerHTML = `<div class="card mb-4 shadow-sm">
    <img src="${img2.src.medium}" alt="foto">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c" />
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
        Thumbnail
      </text>
    </svg>
    <div class="card-body">
      <h5 class="card-title">Lorem Ipsum</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>`
        prendiCard.appendChild(newDiv2)
    });
}

inserisciFoto2()

const stampaFoto2 = function () {
    fetch(ALBUM_URL2, {
        headers: {
            Authorization: "EbtsNPI4pM05uwRyVSxFbSTb5gPkA5LIdgH4K24JqiOEGU9X8vItd8ut",
        }
    })
        .then(response2 => {
            return response2.json()
        })
        .then(data2 => {
            data2.photos.forEach((img2) => {
                inserisciFoto(img2)
            })

        })
        .catch(err2 => {
            console.log(err2)
        })
}
stampaFoto2()