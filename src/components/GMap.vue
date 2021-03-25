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
    },
    setup(props) {
        const map = ref(null);
        const mapDivRef = ref(null);

        onBeforeMount(() => {
            // const key = process.env.VUE_APP_GOOGLEMAPS_KEY;
            
            const darkMapId = 'fff522f093b3acd0'; //dark map
            const lightMapId = 'a2fc72d1ec9d4d81'; //light map

            const googleMapScript = document.createElement("SCRIPT");
            googleMapScript.setAttribute(
                "src",
                `https://maps.googleapis.com/maps/api/js?key=${key}&map_ids=${darkMapId}&callback=initMap`
            );
            googleMapScript.setAttribute("defer", "");
            googleMapScript.setAttribute("async", "");
            document.head.appendChild(googleMapScript);
        });

        window.initMap = () => {
            map.value = new window.google.maps.Map(mapDivRef.value, {
                mapId: "fff522f093b3acd0",
                zoom: props.zoom || 8,
                disableDefaultUI: true,
                center: props.center || { lat: 38.0, lng: -77.01 }
            });
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