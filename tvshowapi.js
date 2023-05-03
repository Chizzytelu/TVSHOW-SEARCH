const form = document.querySelector('#searchForm')
const container = document.querySelector('#container')
const spinner = document.querySelector('#spinner')
const h1 = document.querySelector('#h1')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    container.innerHTML = ''
    makeImages(res.data)
    form.elements.query.value = ''
})


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("img")
            img.src = result.show.image.medium
            container.append(img)
            spinner.remove()
            h1.remove()

        }
    }
}



