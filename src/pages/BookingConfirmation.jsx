import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const BookingConfirmation = () => {
  const location = useLocation();
  const { flight, passengers } = location.state || {};

  if (!flight) {
    return <p>No booking details available.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Booking Confirmation</CardTitle>
          <CardDescription>Thank you for your booking!</CardDescription>
        </CardHeader>
        <CardContent>
          <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
          <p><strong>Departure:</strong> {flight.departureCity} at {flight.departureTime}</p>
          <p><strong>Arrival:</strong> {flight.destinationCity} at {flight.arrivalTime}</p>
          <p><strong>Passengers:</strong> {passengers}</p>
          <p><strong>Booking Reference:</strong> {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingConfirmation;