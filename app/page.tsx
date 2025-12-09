import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center  font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 h dark:bg-black sm:items-start bg-background">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="bg-primary">Oi portfolio</h1>
      </main>
    </div>
  );
}
