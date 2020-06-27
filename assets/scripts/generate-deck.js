$(document).ready(function(){

    $.when(
        $.getJSON(`https://tarot.howlcode.com/api/v1/cards`)
    ).then(
        function(response) {
            var fullDeckInfo = response;
            generateDeck();
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

    function generateDeck(){

        function getCardName(id){
            return fullDeckInfo + "." + id + ".name";
        }

        for (i = 0; i < 78; i++) {
            let cardId = i+1;
            let cardName = getCardName(cardId)
            let card = `<div class="card col" id="${cardId}">
                            <div class="row">
                                <div class="col-12 card-image">
                                    <img src="assets/images/card-back.jpg" alt="Back of card">
                                </div>
                                <div class="col-12 card-name">
                                    <p class="text-center">${cardName}</p>
                                </div>
                            </div>
                        </div>`
            $("#deck").append(card);
        };
    }
});