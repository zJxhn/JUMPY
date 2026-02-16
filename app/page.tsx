import { offers } from "@/data/offers";
import { OfferCard } from "@/components/OfferCard";
import Link from "next/link";

export default function Home() {
  return (
  
        <main className="p-6">
          <header className="max-w-3xl">
            <h1 className="text-4xl font-bold">Comparte suscripciones y ahorra</h1>
            <p className="mt-3 text-gray-600">
              Encuentra ofertas disponibles y únete en minutos.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/marketplace"
                className="rounded-lg bg-white px-4 py-2 text-black font-medium"
              >
                Ver marketplace
              </Link>
              <Link
                href="/offers/hbo-max"
                className="rounded-lg border px-4 py-2 font-medium"
              >
                Ver ejemplo
              </Link>
            </div>
          </header>

          <section className="mt-10">
            <div className="flex items-end justify-between">
              <h2 className="text-xl font-semibold">Ofertas destacadas</h2>
              <Link href="/marketplace" className="text-sm text-gray-600 hover:underline">
                Ver todas
              </Link>
            </div>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </ul>
          </section>
        </main>
  );
}
