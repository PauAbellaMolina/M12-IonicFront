<template>
    <div class="wrapper">
        <div class="map" ref="mapDivRef">
        </div>
        <!-- If the reactive showCommercePopup variable is true, show the popup and pass the reactive commerceId variable to it as props -->
        <CommerceMapPopup v-if="data.showCommercePopup" :commerceId="data.commerceId"/>
    </div>
</template>

<script>
import { ref, onBeforeMount, reactive } from 'vue';
import CommerceMapPopup from "../components/CommerceMapPopup.vue";

export default {
    name: "GMap",
    components: { CommerceMapPopup },
    props: {
        center: { lat: Number, lng: Number },
        zoom: Number,
        markers: Array
    },
    setup(props) {
        //Create
        const data = reactive({
            showCommercePopup: false,
            commerceId: 0
        });
        const map = ref(null);
        const mapDivRef = ref(null);

        onBeforeMount(() => {
            // const key = process.env.VUE_APP_GOOGLEMAPS_KEY;
            const key = 'AIzaSyCWkXP_eBF1sPXKybaQ2ptmhb-fC_xJGig';
            const darkMapId = 'fff522f093b3acd0'; //dark map
            // const lightMapId = 'a2fc72d1ec9d4d81'; //light map

            const googleMapScript = document.createElement("SCRIPT");
            googleMapScript.setAttribute(
                "src",
                `https://maps.googleapis.com/maps/api/js?key=${key}&map_ids=${darkMapId}&callback=initMap`
            );
            googleMapScript.setAttribute("defer", "");
            googleMapScript.setAttribute("async", "");
            document.head.appendChild(googleMapScript);
        });

        const loadMapMarkers = () => {
            if (!props.markers.length) return;

            //Importing the different types of markers
            const coffeeMarker = "/assets/markers/coffee_marker.svg";
            const cupcakeMarker = "/assets/markers/cupcake_marker.svg";

            //Foreach marker in the markers array received by props from Tab1
            props.markers.forEach(marker => {
                let icon = null;
                
                //Depending on the marker type, set one marker or another
                switch (marker.type) {
                    case 1:
                        icon = coffeeMarker;
                        break;
                    case 2:
                        icon = cupcakeMarker;
                        break;
                    default:
                        break;
                }

                //New marker
                new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(marker.lat, marker.lng),
                    map: map.value,
                    title: marker.title,
                    icon: icon
                }).addListener("click", () => { //Marker click listener
                    data.commerceId = marker.commerceId; //Set the commerce id to a reactive data so that the component rerenders with the new commerce id passed
                    data.showCommercePopup = true; //Show the popup
                });
            });
        }

        window.initMap = () => {
            map.value = new window.google.maps.Map(mapDivRef.value, {
                mapId: "fff522f093b3acd0",
                zoom: props.zoom || 8,
                disableDefaultUI: true,
                center: props.center || { lat: 41.15612, lng: 1.10687 }
            });

            loadMapMarkers();
        };

        return {
            mapDivRef,
            data
        }
    }
}
</script>

<style scoped>
.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.map {
    width: 100%;
    height: 100%;
    background-color: #1F1F1F;
    position: relative;
}
</style>