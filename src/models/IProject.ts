import ITechnology from "./IHardSkill";

export default interface IProject {
    name : string,
    description: string,
    link: string,
    technologies : ITechnology []
}