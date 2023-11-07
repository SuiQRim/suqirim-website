import { ITab } from "../../models/ITab";
import it from './catalogIcons/it_icon.png'
import game from './catalogIcons/game_icon.png'
import sport from './catalogIcons/sport_icon.png'
import music from './catalogIcons/music_icon.png'


export const Tabs: ITab[] = [
    {
        path : 'it',
        icon : it,
        description : 'Я и IT'
    },    {
        path : 'game',
        icon : game,
        description : 'Я и Игры'
    },    {
        path : 'sport',
        icon : sport,
        description : 'Я в спорт'
    },    {
        path : 'music',
        icon : music,
        description : 'Я в музыка'
    }
]
