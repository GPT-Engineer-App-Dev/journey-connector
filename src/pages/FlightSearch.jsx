import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { useQuery } from "@tanstack/react-query";
import { fetchFlights } from "@/lib/api";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState(1);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["flights", { departureCity, destinationCity, departureDate, returnDate, passengers }],
    queryFn: fetchFlights,
    enabled: false, // Disable automatic query execution
  });

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Search Flights</h1>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Departure City"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            className="w-64"
          />
          <Input
            type="text"
            placeholder="Destination City"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
            className="w-64"
          />
        </div>
        <div className="flex space-x-2">
          <DatePickerDemo selected={departureDate} onSelect={setDepartureDate} />
          <DatePickerDemo selected={returnDate} onSelect={setReturnDate} />
        </div>
        <div className="flex space-x-2">
          <Input
            type="number"
            placeholder="Passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-32"
            min={1}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div className="space-y-4">
            {data.map((flight) => (
              <div key={flight.id} className="border p-4 rounded">
                <p>Flight: {flight.flightNumber}</p>
                <p>Departure: {flight.departureCity} at {flight.departureTime}</p>
                <p>Arrival: {flight.destinationCity} at {flight.arrivalTime}</p>
                <p>Price: ${flight.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSearch;