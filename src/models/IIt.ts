import ITechnology from "./ITechnology";
import IProject from "./IProject";

export default interface IIt {
    aboutMe :string,
    hardSkills : ITechnology [],
    projects : IProject []
}