const ID = id => document.getElementById(id);

fetch('data.json').then(res=>res.json()).then(data =>{
    const ItSection = ID('ItSection')

    let dl = `<dl>`
    data.forEach(person => {
        dl += `
        <dt class="text-2xl mt-4 ml-4 font-semibold">${person.name}</dt>
            <dd class="ml-18"> 
                <ul class="mb-4"> ${person.playlists.map( playlist => 
                    ` <li> <i class="fa-solid fa-arrow-right"></i> <a href="${playlist.url}" target="_blank"> ${playlist.title}</a> </li>`).join('')}  
                <ul>
            </dd>`
    });
    dl += `</dl>`
    ItSection.innerHTML = dl
})
