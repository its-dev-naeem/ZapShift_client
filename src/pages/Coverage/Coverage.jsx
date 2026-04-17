import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Coverage = () => {
  const position = [23.8041, 90.4152];
  const [serviceCenters, setServiceCenters] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    fetch("/locations.json")
      .then((response) => response.json())
      .then((data) => {
        setServiceCenters(data);
      })
      .catch((error) => {
        console.error("Error fetching service centers:", error);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      // console.log(location, district, coord);
      mapRef.current.flyTo(coord, 12);
    }
  };

  return (
    <div className="px-4 md:px-10 py-6">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Coverage Area
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <form onSubmit={handleSearch} className="flex w-full max-w-xl gap-2">
          <label className="flex items-center w-full border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <svg
              className="h-5 w-5 opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              name="location"
              type="search"
              className="w-full outline-none"
              placeholder="Search district..."
            />
          </label>

          <button
            type="submit"
            className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Map Container */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-lg border">
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={6.5}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong>
                <br />
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
