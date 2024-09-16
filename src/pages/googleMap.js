import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
    const mapRef = useRef(null);
    const inputRef = useRef(null);


    useEffect(() => {
        const loadGoogleMapsScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDiZtVS-EEABlXHm9Flf_0SMNsA_hYNCvw&libraries=places`;
            script.async = true;
            script.defer = true;
            script.addEventListener('load', initMap);
            document.body.appendChild(script);
        };

        loadGoogleMapsScript();

        return () => {
            // Clean up the script when the component unmounts
            const script = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const initMap = () => {
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: -33.8688, lng: 151.2195 },
            zoom: 13,
        });

        const input = inputRef.current;

        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        autocomplete.setFields(['place_id', 'geometry', 'name']);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        const infowindow = new google.maps.InfoWindow();
        const infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);

        const marker = new google.maps.Marker({ map: map });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });

        autocomplete.addListener('place_changed', () => {
            infowindow.close();

            const place = autocomplete.getPlace();

            if (!place.geometry) {
                return;
            }

            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }

            marker.setPlace({
                placeId: place.place_id,
                location: place.geometry.location,
            });

            marker.setVisible(true);

            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-id'].textContent = place.place_id;
            infowindowContent.children['place-address'].textContent = place.formatted_address;
            infowindow.open(map, marker);
        });
    };

    return (
        <div className="h-screen w-full">
            <div className="hidden">
                <input
                    ref={inputRef}
                    className="controls w-full p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="Enter a location"
                />
            </div>
            <div ref={mapRef} className="h-full w-full" />
            <div id="infowindow-content">
                <span id="place-name" className="font-bold"></span><br />
                <strong>Place ID:</strong> <span id="place-id"></span><br />
                <span id="place-address"></span>
            </div>
        </div>
    );
};

export default GoogleMap;