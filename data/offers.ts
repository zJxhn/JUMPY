export type Offer = {
  id: string;
  service: string;
  pricePerMonth: number;
  slotsAvailable: number;
  category: "Streaming" | "Music" | "AI";
};

export const offers: Offer[] = [
  { id: "hbo-max", service: "HBO Max", pricePerMonth: 3.99, slotsAvailable: 1, category: "Streaming" },
  { id: "spotify", service: "Spotify", pricePerMonth: 2.49, slotsAvailable: 2, category: "Music" },
  { id: "chatgpt", service: "ChatGPT Plus", pricePerMonth: 6.99, slotsAvailable: 1, category: "AI" },
];