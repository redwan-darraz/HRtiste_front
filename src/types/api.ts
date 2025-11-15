export interface Candidate {
  id?: number;
  nom: string;
  prenom?: string;
  email: string;
  telephone?: string;
  poste?: string;
  statut?: string;
  competences?: string[];
  date_candidature?: string;
}

export interface Process {
  id: number;
  titre: string;
  description?: string;
  statut?: string;
}

export interface Interview {
  id: number;
  candidate_id: number;
  date: string;
  type?: string;
  commentaires?: string;
}
