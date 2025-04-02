import ReservationsGrid from "../components/ReservationsGrid";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Reservations</h1>
      <ReservationsGrid />
    </main>
  );
}
