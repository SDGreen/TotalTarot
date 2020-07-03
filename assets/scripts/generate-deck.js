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
                    `<h2>Whoops! looks like the future cannot be found...</h2>`);
            } else {
                console.log(errorResponse);
                $("#deck").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                    console.log(errorResponse.responseJSON)
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
            let cardName = getCardName(i);        
            let card = `<div class="tarot-card col-auto" id="${cardId}">
                            <div class="row">
                                <div class="col-12 text-center">
                                
                                <div class="card-housing d-inline-block" onclick="showCardInfo(${cardId})"> 
                                    <div class="card-inner"> 
                                        <div class="card-face card-front"></div> 
                                        <div class="card-face card-back"></div> 
                                    </div> 
                                </div>

                                </div>
                                <div class="col-12 card-text">
                                    <p class="text-center sm-heading card-name" onclick="showCardInfo(${cardId})">${cardName}</p>
                                    <div class="card-info rounded">
                                    </div>
                                </div>
                            </div>
                        </div>`
            let searchName = `<option value="${cardId}">${cardName}</option>`

            $("#deck").append(card);
            $("select").append(searchName);
        };
    }


});