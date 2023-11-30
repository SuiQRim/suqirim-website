import ApiRequests from "./ApiRequests";
import itJson from '../storage/it/it.json'

export default class ITRequests extends ApiRequests {

    static async getProjects () {;
        return itJson.projects;
    }

    static async getAboutMe () {;
        return ApiRequests.getAbout('IT');
    }

    static async getHardSkills () {;

        return itJson.hardSkills;
    }
}