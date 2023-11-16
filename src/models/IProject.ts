import ITechnology from "./ITechnology";

export default interface IProject {
    name : string,
    description: string,
    link: string,
    technologies : ITechnology []
}