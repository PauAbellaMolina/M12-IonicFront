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
            const key = 'AIzaSyCWkXP_eBF1sPXKybaQ2ptmhb-fC_xJGig';

            const googleMapScript = document.createElement("SCRIPT");
            googleMapScript.setAttribute(
                "src",
                `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
            );
            googleMapScript.setAttribute("defer", "");
            googleMapScript.setAttribute("async", "");
            document.head.appendChild(googleMapScript);
        });

        window.initMap = () => {
            map.value = new window.google.maps.Map(mapDivRef.value, {
                mapTypeId : "roadmap",
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