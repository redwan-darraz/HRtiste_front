import type { Process } from "@/types/api";

// URL de base de votre API FastAPI
const API_BASE_URL = "http://localhost:8000"; // Modifiez selon votre configuration

class ProcessApiService {
    private baseUrl: string;

    constructor(baseUrl: string = API_BASE_URL) {
        this.baseUrl = baseUrl;
    }
    /**
     * Récupère tous les processus
     */
    async getAllProcesses(): Promise<Process[]> {
        const response = await fetch(`${this.baseUrl}/processes`);
        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des processus: ${response.statusText}`);
        }
        return response.json();
    }
