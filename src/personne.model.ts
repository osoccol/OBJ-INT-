// MODEL
// personne.model.ts
export interface Personne {
  nom: string;
  prenom: string;
  age: number;
  email: string;
}

export class Prestataire implements Personne {
  constructor(
    public nom: string,
    public prenom: string,
    public age: number,
    public email: string,
    public clients: Client[] // Propriété propre à Prestataire
  ) {}
}

export class Client implements Personne {
  constructor(
    public nom: string,
    public prenom: string,
    public age: number,
    public email: string,
    public entreprise: string // Propriété propre à Client
  ) {}
}
