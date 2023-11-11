import ITechnology from "./IHardSkill";
import IProject from "./IProject";

export default interface IIt {
    aboutMe :string,
    hardSkills : ITechnology [],
    projects : IProject []
}