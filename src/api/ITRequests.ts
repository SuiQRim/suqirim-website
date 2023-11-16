import axios from "axios";
import IProject from './../models/IProject';
import ITechnology from "../models/ITechnology";

const server = axios.create({baseURL : 'https://localhost:7234/api/'});

export default class ITRequests {

    static async getProjects () {;
        return server.get<IProject[]>('Projects').then(
            (responce) => {
                return responce.data;
            })
    }

    static async getAboutMe () {;
        return server.get<string>('AboutMes/IT').then(
            (responce) => {
                return responce.data;
            })
    }

    static async getHardSkills () {;
        return server.get<ITechnology[]>('HardSkills').then(
            (responce) => {
                return responce.data;
            })
    }
}