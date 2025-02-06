document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const location = e.target[2].value;
    alert(`Registered: ${name}, ${email}, ${location}`);
    e.target.reset();
});

document.getElementById('offer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const quantity = e.target[0].value;
    const price = e.target[1].value;
    const historyList = document.getElementById('history-list');
    const newOffer = document.createElement('li');
    newOffer.textContent = `Offer submitted: ${quantity} kg at $${price}/kg`;
    historyList.appendChild(newOffer);
    e.target.reset();
});