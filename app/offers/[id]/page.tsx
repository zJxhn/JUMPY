import { offers } from "@/data/offers";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function OfferDetailPage({ params }: Props) {
  const { id } = await params;

  const offer = offers.find((o) => o.id === id);

  if (!offer) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Oferta no encontrada</h1>
        <p className="mt-2 text-sm text-gray-600">id recibido: {id}</p>
        <p className="mt-2 text-sm text-gray-600">
          ids disponibles: {offers.map((o) => o.id).join(", ")}
        </p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">{offer.service}</h1>
      <p className="mt-6 text-3xl font-bold">€{offer.pricePerMonth}/mes</p>
      <p className="mt-2 text-sm text-gray-600">
        Plazas disponibles: {offer.slotsAvailable}
      </p>
    </main>
  );
}