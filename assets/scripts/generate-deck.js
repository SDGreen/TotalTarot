$(document).ready(function(){

    $.when(
        $.getJSON(`https://tarot.howlcode.com/api/v1/cards`)
    ).then(
        function(response) {
            generateDeck(response);
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#deck").html(
                    `<h2>Whoops looks like the future is shrouded!</h2>`);
            } else {
                console.log(errorResponse);
                $("#deck").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });

    function generateDeck(deck){

        var deckInfo = deck;

        function getCardName(id){
            let rawCardName = deckInfo[id].name;
            cardName = rawCardName.replace(/-/g, " ");
            return cardName;
        }


        for (i = 0; i < 79; i++) {
            let cardId = i+1;
            let cardName = getCardName(i)
            let card = `<div class="card col-auto" id="${cardId}">
                            <div class="row">
                                <div class="col-12">
                                    <img class="mx-auto d-block" src="assets/images/card-back.jpg" alt="Back of card">
                                </div>
                                <div class="col-12 card-name">
                                    <p class="text-center sm-heading">${cardName}</p>
                                </div>
                            </div>
                        </div>`
            $("#deck").append(card);
        };
    }
});