import { ExerciceRepository } from "./Repositories/ExercicioRepository";

export interface ExerciceService {
  enviarRelatorio(): void;
}

export class ExerciceServiceImpl implements ExerciceService {
  repo: ExerciceRepository;

  constructor(repo: ExerciceRepository) {
    this.repo = repo;
  }
 
  enviarRelatorio(): void {
        throw new Error("Method not implemented.");
    }

 
}