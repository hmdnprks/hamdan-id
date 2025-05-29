'use client';

import SmoothScrollProvider from '@/components/scroll/SmoothScrollProvider';
import TravelHero from '@/components/travel/TravelHero';
import TravelMapStory from '@/components/travel/TravelMapStory';
import FeaturedLocationCarousel from '@/components/travel/FeaturedLocationCarousel';
import TravelJournalPreview from '@/components/travel/TravelJournalPreview';
import TravelCategoryFilters from '@/components/travel/TravelCategoryFilters';
import TravelTimeline from '@/components/travel/TravelTimeline';
import TravelCTASection from '@/components/travel/TravelCTASection';

export default function TravelPage() {
  return (
    <SmoothScrollProvider>
      <main className="bg-background text-foreground">
        <TravelHero />
        <TravelCategoryFilters />
        <TravelMapStory />
        <FeaturedLocationCarousel />
        <TravelJournalPreview />
        <TravelTimeline />
        <TravelCTASection />
      </main>
    </SmoothScrollProvider>
  );
}
