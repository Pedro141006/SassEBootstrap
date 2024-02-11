export default function RenderCard(info) {
    let cardNewsArea = document.querySelector('.cardsNewsSection');
    let card = document.createElement('div');
    card.classList.add('card');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.classList.add('img');
    img.src = info.image_url;
    let cardContent = document.createElement('div');
    cardContent.classList.add('card-body');
    let title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = info.title;
    let description = document.createElement('p');
    description.classList.add('card-text');
    description.innerHTML = info.summary;
    let btnNews = document.createElement('a');
    btnNews.classList.add('btn');
    btnNews.classList.add('btn-primary');
    btnNews.href = info.url;
    btnNews.innerHTML = 'Go to the news';
    cardContent.append(title, description, btnNews);
    card.append(img, cardContent);
    cardNewsArea.append(card);
}
