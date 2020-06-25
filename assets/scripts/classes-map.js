function initMap(){
    let map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 54.227285, lng: -4.566803 },
        zoom: 5.5,
    });

    var classes = [
        {
            latlng: {lat: 54.992768, lng: -1.579879},
            info:{
                name: "Elaine Sommerville Medium",    
                website: "http://www.elainesomervillemedium.com/",
                phone: "+447704750269",
                address: "Stephenson Rd, Newcastle upon Tyne NE7 7SA",
            }
        },
        {
            latlng: { lat: 53.242827, lng: -0.528015},
            info:{
                name: "Clinic of Well-being",
                website: "http://www.clinicofwell-being.co.uk/",
                phone: "+447955267143",
                address: "1 Broadway, Lincoln LN2 1SQ",
            }
        },
        {
            latlng: { lat: 51.526538, lng: -0.132656},
            info:{  
                name: "London School of Astrology",
                website: "http://www.londonschoolofastrology.co.uk/",
                phone: "+442084027772",
                address: "173 Euston Rd, London NW1 2BJ",
            }
        },
        {
            latlng: { lat: 55.801829, lng: -4.326472},
            info:{
                name: "Athena Therapies & Holistics Academy",    
                website: "http://www.athenatherapies.co.uk/",
                phone: "+441412709740",
                address: "Caledonia House, Evanton Dr, Thornliebank, Glasgow G46 8JT",
            }
        },
        {
            latlng: { lat: 52.591315, lng: -2.097911},
            info:{
                name: "Psychic Light and Soul",
                website: "http://www.psychiclightandsoul.co.uk/",
                phone: "+441902830825",
                address: "286 Deans Rd, Wolverhampton WV1 2AA",
            }
        },
        {
            latlng: { lat: 54.656228, lng: -2.161573},
            info:{
                name: "Feathers Academy",
                website: "http://www.feathersmediums.co.uk/",
                phone: "+441606334256",
                address: "161 Witton St, Northwich CW9 5EA",
            }
        },
        {
            latlng: { lat: 52.680441, lng: 1.433694},
            info:{
                name: "Earth Angels",
                website: "http://www.glastonburytarotcardsreader.co.uk/",
                phone: "+441603720223",
                address: "3 Brick Kilns Rd, Little Plumstead, Norwich NR13 5JR",
            }
        },
        {
            latlng: { lat: 51.901405, lng: -8.466842},
            info:{
                name: "The Cork Spiritualist Centre",    
                website: "http://www.corkspiritualistcentre.weebly.com/",
                phone: "+353872247035",
                address: "The Dervish, Cornmarket St., Mayfield and Kinsale, Co. Cork, Ireland",
            }
        },
        {
            latlng: { lat: 54.601767, lng: -5.933432},
            info:{
                name: "House of Healing",
                website: "https://www.angeladunlop.co.uk/",
                phone: "+442890234666",
                address: "13 Winetavern St, Belfast BT1 1JQ",
            }
        },
        { 
            latlng: { lat: 53.326124, lng: -6.246706},
            info:{
                name: "Tarot Reading Ireland",
                website: "http://www.tarotreadingireland.com/",
                phone: "+353868223044",
                address: "Richmond Ave S, Rathmines, Dublin 6, D06 P2E1, Ireland",
            }
        },
        {
            latlng: { lat: 56.116453, lng: -3.357434},
            info:{
                name: "De'TemploTarot",
                website: "http://www.detemplotarot.co.uk/",
                phone: "+447751480844",
                address: "Craigbeath Ct, Cowdenbeath KY4 9BY",
            },
        },
        {
            latlng: { lat: 55.947323, lng: -3.191936},
            info:{
                name: "Black Moon Botanica",
                website: "http://blackmoonbotanica.com/",
                phone: "+447510524158",
                address: "50 Candlemaker Row, Edinburgh EH1 2QE",
            }
        },
        {   
            latlng: { lat: 51.477348, lng: -0.016646},
            info:{
                name: "The Academy of Tarot",
                website: "http://theacademyoftarot.com/",
                phone: "+447952593201",
                address: "The Lovibond Centre, 5 Lovibond Ln, Greenwich, London W1A 6US",
            }
        },
        {
            latlng: {lat: 54.632880, lng: -3.211105},
            info:{
                name: "The Tarosophy Tarot Association",
                website: "http://www.tarotassociation.net/",
                phone: "+441768772713",
                address: "1 Woodend Cottages, Thornthwaite, Keswick CA12 4NT",
            },
        }
    ]

    for (var i = 0; i < classes.length; ++i){
            var marker = new google.maps.Marker({
                position: classes[i].latlng,
                map: map,
                content: classes[i].info,
                });
            google.maps.event.addListener(marker, 'click', function() {
                alert(this.content.phone);
                });
    }

}

renderMapData = function(){
    let dataTarget = document.getElementById("map-data-target");
    dataTarget.style.height = "400px"
}

