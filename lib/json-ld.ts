/**
 * Sérialise un schéma en JSON-LD sûr à injecter dans une balise <script>.
 *
 * Google n'applique plus qu'une seule passe de dé-échappement HTML dans les
 * blocs JSON-LD (annonce Search Central) et recommande les échappements Unicode
 * plutôt que les entités HTML. On encode donc `<`, `>` et `&` en <, >
 * et & : ces séquences sont du JSON standard, que tout parseur restitue en
 * caractères d'origine, quel que soit son traitement du HTML.
 *
 * Effet de bord utile : `</script>` dans un titre ou un extrait ne peut plus
 * fermer la balise prématurément et casser la page.
 */
export function serialiserJsonLd(schema: unknown): string {
  return JSON.stringify(schema)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
}
