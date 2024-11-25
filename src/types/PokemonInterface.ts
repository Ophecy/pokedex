interface IPokemon {
  id: number | string;
  name: string;
  nameEn: string;
  nameJp: string;
  primaryType: string | number;
  secondaryType: string | number | null;
}

export default IPokemon;
