export function generateWhatsAppLink(items: { name: string; price: number }[], buyerInfo: { nom: string; telephone: string; ville: string; adresse: string }) {
  const total = items.reduce((sum, item) => sum + item.price, 0)
  const commandeText = items.map(i => `'${i.name}' '${i.price}dh'`).join(', ')

  const message = `salut je veux passer ma commande ${commandeText}
Total: ${total}dh
Nom: ${buyerInfo.nom}
Telephone: ${buyerInfo.telephone}
Ville: ${buyerInfo.ville}
Adresse: ${buyerInfo.adresse}`

  const encoded = encodeURIComponent(message)
  return `https://wa.me/212706821094?text=${encoded}`
}