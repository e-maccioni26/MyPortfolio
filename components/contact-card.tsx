import Link from "next/link"

export default function ContactCard() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,#5B3FC9,#2C1568)" }} />

          {/* Content */}
          <div className="relative p-8 md:p-14 rounded-2xl text-center flex flex-col items-center gap-5">
            <span className="font-semibold text-xs text-white bg-white/10 border border-white/25 px-5 py-2 rounded-full">
              Disponible pour de nouveaux projets
            </span>
            <h2 className="font-heading text-2xl md:text-[34px] font-bold leading-tight max-w-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D9C9FF]">
              Un projet en tête ? Discutons-en.
            </h2>
            <p className="text-white/75 max-w-xl">
              Que vous ayez besoin d'un site web, d'une application ou d'une refonte, je suis là pour vous accompagner dans la réalisation de vos idées.
            </p>
            <Link
              href="/contact"
              className="mt-1 font-semibold text-sm text-[#2C1568] bg-white px-8 py-3.5 rounded-full whitespace-nowrap hover:bg-white/90 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
