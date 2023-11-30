import aboutMes from '../storage/aboutMe/aboutMe.json'
export default abstract class ApiRequests {

    
    static async getAbout (theme :string) {;
        return aboutMes.find(a => a.Theme === theme)?.Content;
    }
}