import Link from "next/link";
import type { Offer } from "@/data/offers";

type Props = {
  offer: Offer;
};

export function OfferCard({ offer }: Props) {
  return (
    <li className="rounded-xl border p-4 hover:border-gray-400 transition">
      <Link href={`/offers/${offer.id}`} className="block">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{offer.service}</h2>
          <span className="text-sm text-gray-600">{offer.category}</span>
        </div>

        <p className="mt-3 text-2xl font-bold">€{offer.pricePerMonth}/mes</p>

        <p className="mt-1 text-sm text-gray-600">
          Plazas disponibles: {offer.slotsAvailable}
        </p>
      </Link>
    </li>
  );
}