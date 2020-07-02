function showCardInfo(id){
    let cardId = id;
    let mode;
    if (localStorage.mode === "light-mode"){
        mode = "dark-mode";
    } else {
        mode = "light-mode"
    }
    $("#deck").find(".card-name").fadeIn();
    $("#deck").find(".flipped").removeClass("flipped");
    $("#deck").find(".card-info").slideUp().removeClass("shown light-mode dark-mode");
    $(`#${cardId} .card-name`).fadeOut();
    $(`#${cardId} .card-info`).addClass(`shown ${mode}`).slideDown()

     $.when(
        $.getJSON("https://tarot.howlcode.com/api/v1/cards/" + cardId)
    ).then(
        function(response) {
            renderCardData(response, displayData, cardFlip);
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#deck").html(
                    `<h2 class="sm-heading">Whoops! looks like the future cannot be found...</h2>`);
            } else {
                console.log(errorResponse);
                $("#deck").html(
                    `<h2 class="content-text">Error: ${errorResponse.responseJSON.message}</h2>`);
                    console.log(errorResponse.responseJSON)
            }
    });

    function displayData(cardInfo){
        $(`#${cardId} div.card-info`).html(cardInfo);
    }

    function cardFlip(cardData){
        let backgroundImage = {"background": `url(${cardData.image}) no-repeat center/contain`}
        $(`#${cardId} .card-back`).css(backgroundImage);


        $(`#${cardId} .card-inner`).addClass("flipped");
        console.log(cardData.image)
    }

    function renderCardData(data, callbackOne, callbackTwo){
        let cardData = `<div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="sm-heading text-center">Upright Meaning:</h3>
                                    </div>
                                    <div class="col-12">
                                        <p>${data.upright}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="sm-heading text-center">Inverted Meaning:</h3>
                                    </div>
                                    <div class="col-12">
                                        <p>${data.reversed}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="sm-heading text-center">Summary:</h3>
                                    </div>
                                    <div class="col-12">
                                        <p>${data.summary}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`
        callbackTwo(data);
        callbackOne(cardData);
    }

};