const entrees = [
  { nom: "Aucun", prix: 0 },
  { nom: "Salade César", prix: 8.5 },
  { nom: "Brik à l'œuf", prix: 4.0 },
];
const plats = [
  { nom: "Aucun", prix: 0 },
  { nom: "Couscous Agneau", prix: 18.0 },
  { nom: "Escalope Grillée", prix: 14.5 },
];
const desserts = [
  { nom: "Aucun", prix: 0 },
  { nom: "Tiramisu", prix: 6.5 },
  { nom: "Salade de fruits", prix: 5.0 },
];
function gererSelection(idSelect, idInputNb) {
  const selectElem = document.getElementById(idSelect);
  const inputNb = document.getElementById(idInputNb);
  const nbActuel = parseInt(inputNb.value);

  if (selectElem.selectedIndex === 0) {
    // L'item "Aucun" (index 0) est sélectionné
    inputNb.value = 0;
  } else if (nbActuel === 0) {
    // Un article est choisi et le nombre était à 0 -> passe à 1
    inputNb.value = 1;
  }
  // Mise à jour immédiate du tarif total
  calculerPrix();
}
