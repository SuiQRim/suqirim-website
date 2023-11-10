import { IGame } from "./IGame"

export default interface IGameStatistic {
    aboutMe : string
    active : IGame [],
    playWithFriends : IGame []
    passed : IGame [],
}