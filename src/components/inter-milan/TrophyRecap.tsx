import ClubWorldCupBadge from "./badges/ClubWorldCupBadge";
import CoppaItaliaBadge from "./badges/CoppaItaliaBadge";
import EuropaLeagueBadge from "./badges/EuropaLeagueBadge";
import IntercontinentalBadge from "./badges/IntercontinentalBadge";
import ItalianBadge from "./badges/ItalianBadge";
import SupercoppaBadge from "./badges/SuperCoppaBadge";
import UCLBadge from "./badges/UCLBadge";

const trophies = [
  { title: "Serie A", count: 20, Badge: ItalianBadge },
  { title: "Supercoppa Italiana", count: 8, Badge: SupercoppaBadge },
  { title: "UEFA Champions League", count: 3, Badge: UCLBadge },
  { title: "Coppa Italia", count: 9, Badge: CoppaItaliaBadge },
  { title: "Club World Cup", count: 1, Badge: ClubWorldCupBadge },
  { title: "Intercontinental Cup", count: 2, Badge: IntercontinentalBadge },
  { title: "UEFA Europa League", count: 3, Badge: EuropaLeagueBadge },
];

export default function TrophyRecap() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Internazionale Total Trophies Recap 🏆</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {trophies.map(({ title, count, Badge }) => (
          <div
            key={title}
            className="bg-[var(--surface)] p-4 rounded-lg shadow-sm border border-[var(--inter-border)]"
          >
            <div className="flex items-center gap-3 mb-2">
              <Badge className="w-6 h-6 text-[var(--inter-accent)]" />
              <h3 className="text-lg font-semibold text-[var(--inter-text)]">{title} - {count}</h3>
            </div>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: count }).map((_, i) => (
                <Badge
                  key={i}
                  className="w-5 h-5 text-[var(--inter-accent)] opacity-80"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}