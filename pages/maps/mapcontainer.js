"use client";
import { useState} from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps"


export default function MapContainer({tasks}) {
      const [infowindowOpen, setInfowindowOpen] = useState(false);
      const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
      const [selectedMarker, setSelectedMarker] = useState(null);

      const handleMarkerClick = (index) => () => {
        setSelectedMarkerIndex(index);
        setSelectedMarker(index);
        setInfowindowOpen(true);
      };

      const handleInfoClick = () => () => {
        setInfowindowOpen(false);
      }



      return (
        <APIProvider apiKey="AIzaSyBLJh9-kU_cWz7VwwdyxUfZDTlkLcyB1EY">
                <div style={{height: "100vh", width: "60%", display: "inline-block"}}>
                     <Map 
                      defaultCenter={{ lat: 51.0447, lng: -114.0719 }}
                       defaultZoom={12}
                       mapId="70e229a60d0f5d85"
                      >
                              {tasks && tasks?.map((marker) => (
                                  <AdvancedMarker 
                                        position={{ lat: marker.lat, lng: marker.lng }} 
                                        key={marker.key}
                                        onClick={handleMarkerClick(marker)}
                                  >
                                    <Pin
                                      background={marker?.type == "school" ?'#22ccff' : ''}
                                      borderColor={'#1e89a1'}
                                      glyphColor={'#0f677a'}>
                                    </Pin>
                                  </AdvancedMarker>
                              ))}
                              {infowindowOpen && (
                                    <InfoWindow
                                      maxWidth={200}
                                      position={{lat: selectedMarker? selectedMarker.lat : '', lng: selectedMarker? selectedMarker.lng : ''}}
                                      onCloseClick={handleInfoClick()}
                                    >
                                      <p>{selectedMarker?.name}</p>
                                    </InfoWindow>
                              )}
                      </Map>
                </div>
        </APIProvider>
      )
}