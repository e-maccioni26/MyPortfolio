import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
      <p className="text-muted-foreground mb-8">Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
      <Link href="/projets" className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
        Retour aux projets
      </Link>
    </div>
  )
}

