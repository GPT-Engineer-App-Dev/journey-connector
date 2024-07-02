import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", search);
  };

  return (
    <div className="space-y-8">
      <HeroSection search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <FeaturedDestinations />
      <SpecialOffers />
      <Testimonials />
    </div>
  );
};

const HeroSection = ({ search, setSearch, handleSearch }) => (
  <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold text-white">Find Your Next Adventure</h1>
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search destinations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  </section>
);

const FeaturedDestinations = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">Featured Destinations</h2>
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardTitle>Paris</CardTitle>
              <CardDescription>The city of lights</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/images/paris.jpg" alt="Paris" className="w-full h-48 object-cover" />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardTitle>New York</CardTitle>
              <CardDescription>The city that never sleeps</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/images/new-york.jpg" alt="New York" className="w-full h-48 object-cover" />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardTitle>Tokyo</CardTitle>
              <CardDescription>The heart of Japan</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/images/tokyo.jpg" alt="Tokyo" className="w-full h-48 object-cover" />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);

const SpecialOffers = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">Special Offers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>50% Off to Bali</CardTitle>
          <CardDescription>Limited time offer</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/images/bali.jpg" alt="Bali" className="w-full h-48 object-cover" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>30% Off to Maldives</CardTitle>
          <CardDescription>Book now and save</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/images/maldives.jpg" alt="Maldives" className="w-full h-48 object-cover" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>20% Off to Switzerland</CardTitle>
          <CardDescription>Winter special</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/images/switzerland.jpg" alt="Switzerland" className="w-full h-48 object-cover" />
        </CardContent>
      </Card>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">What Our Customers Say</h2>
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardContent>
              <p>"Amazing experience! Highly recommend."</p>
              <p className="mt-2 font-bold">- John Doe</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardContent>
              <p>"Best vacation ever. Will book again."</p>
              <p className="mt-2 font-bold">- Jane Smith</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardContent>
              <p>"Great service and fantastic destinations."</p>
              <p className="mt-2 font-bold">- Michael Brown</p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);

export default Index;