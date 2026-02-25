import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileReserveBar } from "@/components/layout/mobile-reserve-bar";
import { HeroSection } from "@/components/sections/hero";
import { NewsSection } from "@/components/sections/news";
import { ConceptSection } from "@/components/sections/concept";
import { MenuSection } from "@/components/sections/menu";
import { StylistSection } from "@/components/sections/stylists";
import { GallerySection } from "@/components/sections/gallery";
import { ReviewsSection } from "@/components/sections/reviews";
import { AccessSection } from "@/components/sections/access";

export default function Home() {
  return (
    <div className="bg-base text-main">
      <SiteHeader />
      <main>
        <HeroSection />
        <ConceptSection />
        <MenuSection />
        <StylistSection />
        <GallerySection />
        <NewsSection />
        <ReviewsSection />
        <AccessSection />
      </main>
      <SiteFooter />
      <MobileReserveBar />
    </div>
  );
}
