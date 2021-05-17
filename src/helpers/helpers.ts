class Helpers {
    getMarker(category: number) {
        //Importing the different types of markers
        const coffeeMarker = "/assets/markers/coffee_marker.svg";
        const cupcakeMarker = "/assets/markers/cupcake_marker.svg";
        const beerMarker = "/assets/markers/beer_marker.svg";
        const cdMarker = "/assets/markers/cd_marker.svg";
        const restaurantMarker = "/assets/markers/restaurant_marker.svg";
        const speakerMarker = "/assets/markers/speaker_marker.svg";
        //Depending on the category received set one marker or another
        switch (category) {
            case 1:
                return coffeeMarker;
                break;
            case 2:
                return cupcakeMarker;
                break;
            case 3:
                return beerMarker;
                break;
            case 4:
                return restaurantMarker;
                break;
            case 5:
                return speakerMarker;
                break;
            case 6:
                return cdMarker;
                break;
            default:
                break;
        }
    }

    getIcon(category: number) {
        //Importing the different types of markers
        const coffeeIcon = "/assets/icons/coffee_icon.svg";
        const cupcakeIcon = "/assets/icons/cupcake_icon.svg";
        const beerIcon = "/assets/icons/beer_icon.svg";
        const cdIcon = "/assets/icons/cd_icon.svg";
        const restaurantIcon = "/assets/icons/restaurant_icon.svg";
        const speakerIcon = "/assets/icons/speaker_icon.svg";
        //Depending on the category received set one marker or another
        switch (category) {
            case 1:
                return coffeeIcon;
                break;
            case 2:
                return cupcakeIcon;
                break;
            case 3:
                return beerIcon;
                break;
            case 4:
                return restaurantIcon;
                break;
            case 5:
                return speakerIcon;
                break;
            case 6:
                return cdIcon;
                break;
            default:
                break;
        }
    }
}

export default new Helpers;