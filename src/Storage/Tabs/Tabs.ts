import { ITab } from "../../models/ITab";
import it from './catalogIcons/it_icon.png'
import home from './catalogIcons/home_icon.png'
import game from './catalogIcons/game_icon.png'
import sport from './catalogIcons/sport_icon.png'
import music from './catalogIcons/music_icon.png'


export const Tabs: ITab[] = [
    {
        path : 'it',
        icon : it,
        layer: 'it',
        description : 'Я и IT'
    },    
    {
        path : 'home',
        icon : home,
        layer: 'me',
        description : 'Обо мне'
    },    
    {
        path : 'game',
        icon : game,
        layer: 'me',
        description : 'Я и Игры'
    },    {
        path : 'sport',
        icon : sport,
        layer: 'me',
        description : 'Я в спорт'
    },    {
        path : 'music',
        icon : music,
        layer: 'me',
        description : 'Я в музыка'
    }
]
