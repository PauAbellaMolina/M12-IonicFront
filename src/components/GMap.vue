<template>
    <div class="map" ref="mapDivRef">
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';

export default {
    name: "GMap",
    props: {
        center: { lat: Number, lng: Number },
        zoom: Number,
        markers: Array
    },
    setup(props) {
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

            const coffeeMarker = "/assets/markers/coffee_marker.svg";
            const cupcakeMarker = "/assets/markers/cupcake_marker.svg";

            props.markers.forEach(markerInfo => {
                let icon = null;
                
                switch (markerInfo.type) {
                    case 1:
                        icon = coffeeMarker;
                        break;
                    case 2:
                        icon = cupcakeMarker;
                        break;
                    default:
                        break;
                }

                new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(markerInfo.lat, markerInfo.lng),
                    map: map.value,
                    title: markerInfo.title,
                    icon: icon
                }).addListener("click", () => {
                    //Create/Invoke a comerce popup component pbbly passing the comerce id
                    console.log("here");
                });
            });
        }

        window.initMap = () => {
            map.value = new window.google.maps.Map(mapDivRef.value, {
                mapId: "fff522f093b3acd0",
                zoom: props.zoom || 8,
                disableDefaultUI: true,
                center: props.center || { lat: 38.0, lng: -77.01 }
            });

            loadMapMarkers();
        };

        return {
            mapDivRef
        }
    }
}
</script>

<style scoped>
.map {
    width: 100%;
    height: 100%;
    background-color: azure;
}
</style>