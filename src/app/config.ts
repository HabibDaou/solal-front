import { environment } from '../environments/environment';

export const APIS: { [ prop: string ]: string } = {
    AUTH: `${environment.BaseURL}/auth`,
    USERS: `${environment.BaseURL}/users`,
    CHAMPS: `${environment.BaseURL}/champ`,
    ENTREPRISE:`${environment.BaseURL}/entreprise`,
    CRON: `${environment.BaseURL}/cron`,
    SUBSCRIBE: `${environment.BaseURL}/subscribe`,

    
};

