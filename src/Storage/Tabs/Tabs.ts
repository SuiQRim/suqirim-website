import { Tab } from "../../Models/Tab";
import it from './CatalogIcons/it_icon.png'
import game from './CatalogIcons/game_icon.png'
import sport from './CatalogIcons/sport_icon.png'
import music from './CatalogIcons/music_icon.png'


export const Tabs: Tab[] = [
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
