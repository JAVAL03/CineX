let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click', ()=>{
    cards.scrollLeft += 140;
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
.then((data) =>{
    data.forEach((ele , i) => {
        let{name,imdb,date,sposter,bposter,genre,type,detail,url} = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="${name}">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                            <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                        </div>
                    </div>
            </div>
        `
        cards.appendChild(card);
    });

    document.getElementById('title').innerText = data[2].name;
    document.getElementById('details').innerText = data[2].detail;
    document.getElementById('gen').innerText = data[2].genre;
    document.getElementById('date').innerText = data[2].date;
    document.getElementById('rate').innerHTML = `
    <span>IMDB</span><i class="bi bi-star-fill"></i>${data[2].imdb}
    `;

    // search data Load

    data.forEach(element => {
        let{name,imdb,date,sposter,genre,type,detail,url} = element;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}">
        <div class="cont">
            <h3>${name}</h3>
            <p>${genre},${date} <span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
        </div>
        `
        search.appendChild(card);

    });

    // search Filter

    search_input.addEventListener('keyup', ()=>{
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');

        for(let index = 0; index < a.length; index++) {
            let b=a[index].getElementsByClassName('cont')[0];
            // console.log(a.textContent)       
            let TextValue = b.textContent || b.innerText;
            if(TextValue.toUpperCase().indexOf(filter) > -1) {
                a[index].style.display = 'flex';
                search.style.visibility = 'visible';
                search.style.opacity = '1';
            } else {
                a[index].style.display = 'none';
            }

            if(search_input.value == 0){
                search.style.visibility = 'hidden';
                search.style.opacity = '0';
            }
        }
    });

    
    let series = document.getElementById('series');
    series.addEventListener('click', () => {
        cards.innerHTML='';
        let seried_card = data.filter(elem=>{
            return elem.type === "series";
        });
        
        seried_card.forEach((ele , i) => {
            let{name,imdb,date,sposter,bposter,genre,type,detail,url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
                <img src="${sposter}" alt="${name}" class="poster">
                <div class="rest_card">
                    <img src="${bposter}" alt="${name}">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                            </div>
                        </div>
                </div>
            `
            cards.appendChild(card);
        });
    
    });

    let movies = document.getElementById('movies');
    movies.addEventListener('click', () => {
        cards.innerHTML='';
        let movie_card = data.filter(ele=>{
            return ele.type === "movie";
        });
        
        movie_card.forEach((ele , i) => {
            let{name,imdb,date,sposter,bposter,genre,type,detail,url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
                <img src="${sposter}" alt="${name}" class="poster">
                <div class="rest_card">
                    <img src="${bposter}" alt="${name}">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                            </div>
                        </div>
                </div>
            `
            cards.appendChild(card);
        });
    
    });


});

