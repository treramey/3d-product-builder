import { Sidebar } from "@/components/sidebar";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Sidebar />
      <div className="flex h-24 w-[calc(100%-24rem)] items-center justify-between bg-primary px-4 text-primary-foreground">
        <div>
          <h1 className="text-2xl font-bold tracking-widest">IBEX FRAME BUILDER</h1>
          <p className="text-sm">
            From the build settings, choose your trame and Integrated handle par sizes.
          </p>
        </div>
      </div>
    </main>
  );
}
