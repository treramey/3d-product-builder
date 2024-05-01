"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import { Icons } from "@/components/icons";
import { Sidebar } from "@/components/sidebar";

const Blob = dynamic(() => import("@/components/canvas/examples").then((mod) => mod.Blob), { ssr: false });
// const Duck = dynamic(() => import("@/components/canvas/examples").then((mod) => mod.Duck), { ssr: false });

const View = dynamic(() => import("@/components/canvas/view").then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  ),
});
const Common = dynamic(() => import("@/components/canvas/view").then((mod) => mod.Common), { ssr: false });

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Sidebar />
      <div className="w-100 flex h-24 items-center justify-between bg-primary px-4 text-primary-foreground sm:w-[calc(100%-24rem)]">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-2xl font-bold tracking-widest">IBEX FRAME BUILDER</h1>
            <p className="text-sm">
              From the build settings, choose your trame and Integrated handle par sizes.
            </p>
          </div>
        </div>
        <Icons.IbexLogo />
      </div>
      <View
        orbit
        className="flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center sm:w-[calc(100%-24rem)]">
        <Suspense fallback={null}>
          <Blob />
          <Common color={""} />
        </Suspense>
      </View>
    </main>
  );
}
