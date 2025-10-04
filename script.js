const ID = id => document.getElementById(id);

fetch('data.json').then(res=>res.json()).then(data =>{
    const ItSection = ID('ItSection')

    // Create dl & dt
    const dl = document.createElement('dl')
    data.forEach(person => {
        const dt = document.createElement('dt')
        dt.innerText = person.name
        dl.appendChild(dt)

    // Create dd , ul, li, a
    const dd = document.createElement('dd')
    const ul = document.createElement('ul')
    person.playlists.forEach(playlists => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.href = playlists.url
        a.target = '_blank'
        a.innerText = playlists.title

        li.appendChild(a)
        ul.appendChild(li)
    })
    //
    dd.appendChild(ul)
    dl.appendChild(dd)
    });
    
    ItSection.appendChild(dl)


    
})
