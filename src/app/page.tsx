import BannerEditor from "@/components/BannerEditor";
import BannerToolbar from "@/components/BannerToolbar";

export default function Home({
  searchParams,
}: { [key: string]: string }) {
  return (
    <section className="relative">
      <BannerEditor searchParams={searchParams} />
      <BannerToolbar />
    </section>
  );
}
