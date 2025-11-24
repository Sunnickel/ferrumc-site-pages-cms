import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import GradientText from "@/components/text/gradient-text";
import Link from "next/link";

export default function Home() {
  return (
          <>
            <Header/>
            <main>
              {/* Hero */}
              <section
                      className="pt-12 pb-8 min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden bg-[radial-gradient(80%_60%_at_10%_-10%,rgba(234,88,12,0.15),transparent_60%),radial-gradient(80%_60%_at_100%_0%,rgba(234,88,12,0.12),transparent_60%)] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] before:bg-[length:24px_24px] before:[mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent_70%)]">
                <div className="mx-auto max-w-[1100px] px-5 grid items-center gap-8 lg:gap-10 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_620px] relative">
                  <div>
                    <h1 className="m-0 text-xl md:text-3xl font-extrabold leading-tight ">
                      A <GradientText>fully multi-threaded</GradientText>
                      {' '}Minecraft server<br/>you didn&#39;t know you needed.
                    </h1>
                    <p className="text-neutral-400 mt-4 mb-5 ">
                      Built in Rust, FerrumC makes servers feel fast, worlds stream in
                      quickly, ticks stay smooth, and memory stays lean while staying
                      compatible with vanilla clients.
                    </p>
                    <div className="flex gap-3 mb-4 justify-center md:justify-start">
                      <a className="inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 font-semibold hover:bg-orange-500 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                         href="/download">Download</a>
                      <a className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 font-semibold hover:bg-white/15 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                         href="https://github.com/ferrumc-rs/ferrumc">View on GitHub</a>
                    </div>
                  </div>
                  <div className="flex justify-center order-first md:order-none relative overflow-hidden lg:mr-[-40px] mt-4 md:mt-6 lg:mt-0  before:content-[''] before:absolute before:inset-x-[-10%] before:bottom-[-10%] before:h-[60%] before:bg-[radial-gradient(50%_60%_at_50%_70%,rgba(234,88,12,0.35),transparent_60%)] before:blur-[28px]">
                    <Image
                            src="/images/in_game.png"
                            alt="in-game"
                            width={640}
                            height={400}
                            className="hero-img float-slow w-full max-w-[680px] md:max-w-[760px] lg:w-auto lg:max-w-[640px] rounded-2xl shadow-2xl ring-1 ring-white/10"
                            priority
                    />
                  </div>
                </div>
              </section>

              {/* Orange band */}
              <section
                      className="bg-orange-600 text-white mt-9 py-14 ">
                <div className="mx-auto max-w-[1100px] px-5">
                  <h2 className="text-center text-2xl font-semibold mb-6">
                    Worlds that stream in fast, see it for yourself!
                  </h2>
                  <div className="flex justify-center">
                    <Image
                            src="/images/chunk_loading.gif"
                            alt="chunk loading gif"
                            width={820}
                            height={400}
                            className="rounded-xl shadow-2xl w-[820px] max-w-full"
                            unoptimized
                    />
                  </div>
                </div>
              </section>

              {/* Features two-col */}
              <section className="mx-auto max-w-[1100px] px-5 pt-16 flex flex-col gap-4">
                <div className="grid gap-9 md:grid-cols-[1fr_480px] items-center">
                  <div className="relative w-full">
                    <Image
                            src="/images/in_game.png"
                            alt="in-game"
                            width={1920}
                            height={1080}
                            className="w-full rounded-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      Engineered for throughput.
                      <br/>
                      <GradientText>Parallel by design.</GradientText>
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
                      <li>Parallel engine with a thread‑safe architecture</li>
                      <li>High performance and memory efficiency</li>
                      <li>Customizable server list</li>
                      <li>World importing from vanilla Minecraft</li>
                      <li>Powerful Entity Component System</li>
                      <li>Lightning-fast world loading</li>
                      <li>Compatible with vanilla Minecraft clients (1.21.8)</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-9 md:grid-cols-[1fr_480px] items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      Built for your vision.
                      <br/>
                      <GradientText>Endlessly customizable.</GradientText>
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
                      <li> Powerful plugin system with extensive API</li>
                      <li> Customizable server list and MOTD</li>
                      <li> Flexible configuration options</li>
                      <li> Custom game mechanics and rules</li>
                      <li> Easy to extend and modify</li>
                    </ul>
                  </div>
                  <div className="relative w-full">
                    <Image
                            src="/images/in_game.png"
                            alt="in-game"
                            width={1920}
                            height={1080}
                            className="w-full rounded-2xl"
                    />
                  </div>
                </div>

                <div className="grid gap-9 md:grid-cols-[1fr_480px] items-center">
                  <div className="relative w-full">
                    <Image
                            src="/images/in_game.png"
                            alt="in-game"
                            width={1920}
                            height={1080}
                            className="w-full rounded-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      Drop-in replacement.
                      <br/>
                      <GradientText>Zero friction setup.</GradientText>
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
                      <li> Compatible with vanilla Minecraft clients</li>
                      <li> Import existing worlds seamlessly</li>
                      <li> No client-side mods required</li>
                      <li> Familiar commands and gameplay</li>
                      <li> Quick setup in minutes</li>
                    </ul>

                  </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-2 text-center">
                  <h3 className="text-3xl font-extrabold row-start-1 col-start-2"> Interested? </h3>
                  <a className="rounded-lg bg-orange-600 px-4 py-2 font-semibold hover:bg-orange-500 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] row-start-2 col-start-2"
                     href="/download">
                    Download
                  </a>
                </div>
              </section>

              {/* Contribute */}
              <section className="mx-auto max-w-[1100px] px-5 py-16 text-center">
                <h2 className="text-3xl font-extrabold">
                  Or even want to start contributing?
                </h2>
                <p className="text-orange-600 text-3xl font-extrabold mt-1 mb-5">
                  Check us out on GitHub
                </p>
                <Link href="https://github.com/ferrumc-rs/ferrumc" target="_blank" rel="noreferrer"
                      id="github"
                      className="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  View on GitHub
                </Link>
              </section>
            </main>
            <Footer/>
          </>
  );
}