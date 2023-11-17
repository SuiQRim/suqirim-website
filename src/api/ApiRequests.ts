import axios from "axios";

export default abstract class ApiRequests {

    static server = axios.create({baseURL : 'https://localhost:7234/api/'});
    
    static async getAbout (theme :string) {;
        return this.server.get<string>(`AboutMes/${theme}`).then(
            (responce) => {
                return responce.data;
            })
    }
}