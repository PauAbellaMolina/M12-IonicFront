class Helpers {
    getMarker(category: number) {
        //Importing the different types of markers
        const coffeeMarker = "/assets/markers/coffee_marker.svg";
        const cupcakeMarker = "/assets/markers/cupcake_marker.svg";
        //Depending on the category received set one marker or another
        switch (category) {
            case 1:
                return coffeeMarker;
                break;
            case 2:
                return cupcakeMarker;
                break;
            default:
                break;
        }
    }

    getIcon(category: number) {
        //Importing the different types of markers
        const coffeeMarker = "/assets/icons/coffee_icon.svg";
        const cupcakeMarker = "/assets/icons/cupcake_icon.svg";
        //Depending on the category received set one marker or another
        switch (category) {
            case 1:
                return coffeeMarker;
                break;
            case 2:
                return cupcakeMarker;
                break;
            default:
                break;
        }
    }
}

export default new Helpers;