import ISocialNetwork from "./ISocialNetwork";

export default interface IContact {
    email: string,
    phone: string,
    socialNetworks : ISocialNetwork[]
}