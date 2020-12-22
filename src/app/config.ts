import { environment } from '../environments/environment';

export const APIS: { [ prop: string ]: string } = {
    AUTH: `${environment.BaseURL}/auth`,
    USERS: `${environment.BaseURL}/users`,
    CHAMPS: `${environment.BaseURL}/champ`,
    TANKS: `${environment.BaseURL}/tanks`,
    POMPES: `${environment.BaseURL}/pompes`,
    PISTOLETS: `${environment.BaseURL}/pistolets`,
    HISTORIQUE: `${environment.BaseURL}/historiqueTank`,
    HISTORIQUEINDEXE: `${environment.BaseURL}/historiqueIndexe`,
    VENTES: `${environment.BaseURL}/ventes`,
    CRON: `${environment.BaseURL}/cron`,
    SUBSCRIBE: `${environment.BaseURL}/subscribe`,
    RAVITAILLEMENT: `${environment.BaseURL}/ravitaillment`,

    
};

