import SectionAbout from '@/components/About';
import SectionAchievement from '@/components/Achievements';
import SectionContact from '@/components/Contact';
import SectionHero from '@/components/Hero';
import SectionProject from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <div className="container mt-24 mx-auto px-8 py-4">
        <SectionHero />
        <SectionAbout />
        <SectionProject />
        <SectionAchievement />
        <SectionContact />
      </div>
    </main>
  );
}
