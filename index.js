const cardsContainer = document.getElementById('cards-container');
const timeframeButtons = document.querySelectorAll('.timeframe-btn');

let currentTimeframe = 'weekly';
let timeData = [];

async function loadData() {
    try{
        const response = await fetch('data.json');
        timeData = await response.json();

        renderCards();
    }catch(error){
        console.error("Error loading JSON:", error);
        cardsContainer.innerHTML = "<p>Could not load data.json</p>";
    }
}

function renderCards(){
    cardsContainer.innerHTML = "";

    timeData.forEach(item => {
        const title = item.title;
        const current = item.timeframes[currentTimeframe].current;
        const previous = item.timeframes[currentTimeframe].previous;

        const previousLabel =
            currentTimeframe === 'daily' ? 'Yesterday'
            : currentTimeframe === 'weekly' ? 'Last Week'
            : 'Last Month';
        
        const cardHTML = `
            <div class = "card ${title.toLowerCase()} card">
                <div class="card-top-bg"></div>
                <div class="card-content">
                    <div class="title-row">
                        <h3>${title}</h3>
                        <img src="images/icon-ellipsis.svg" alt="options">
                    </div>
                    <p class="hours">${current}hrs</p>
                    <p class="previous">${previousLabel} - ${previous}hrs</p>
                </div>
            </div>
            `;
        cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
}

timeframeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        timeframeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentTimeframe = btn.dataset.timeframe
        renderCards()
    });
});

loadData();