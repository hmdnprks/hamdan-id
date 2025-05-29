'use client';

const travelTimeline = [
  { year: '2018', places: ['Yogyakarta', 'Bali'] },
  { year: '2019', places: ['Surabaya', 'Madura'] },
  { year: '2020', places: ['Purwokerto', 'Cilacap'] },
  { year: '2022', places: ['Italy', 'France', 'Switzerland'] },
  { year: '2023', places: ['Banyuwangi', 'Manado'] },
  { year: '2024', places: ['Ubud', 'Jakarta'] },
];

export default function TravelTimeline() {
  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Where I&apos;ve Been</h2>
      <div className="relative border-l-2 border-primary pl-6 space-y-8">
        {travelTimeline.map((entry) => (
          <div key={entry.year} className="relative">
            <div className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{entry.year}</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {entry.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
