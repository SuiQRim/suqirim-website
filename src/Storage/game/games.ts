import va11hala from './va11hala.png'
import IGameStatistic from '../../models/IGameStatistic'

export const GameStatistic : IGameStatistic = {
    aboutMe : 'Люблю поиграть в комп. Временами катаю с друзьями в мультиплеер, а иногда погружаюсь во вселенную игры, где ты наедине с главным героем, его окружением и суровым миром. Таким образом, после ожесточенной битвы, я могу завести отношения с полумедведем из Baldurs Gate, а потом открыть визуальную новеллу и счастливо проводить время вместе с тянками из далекой японской деревушки Хинамиздава. Очень жду выхода Hollow Knight Silksong и надеюсь что авторы знают, что они должны выпустить игру.',
    active : [
        {
            image : va11hala,
            name : "Baldur's Gate 3",
            steamLink: 'гениальная ссылка'
        },
        {
            image : va11hala,
            name : 'Hades',
            steamLink: 'гениальная ссылка'
        },
    ],
    playWithFriends : [
        {
            image : va11hala,
            name : 'Dota 2',
            steamLink: 'гениальная ссылка'
        },
        
    ],
    passed : [
        {
            image : va11hala,
            name : 'VA-11 Hall-A Cyberpunk BA',
            tier: 3,
            steamLink: 'гениальная ссылка'
        },
        {
            image : va11hala,
            name : 'Higurashi When They Cry Hou (Ch.2)',
            tier : 2,
            steamLink : 'Гениальная ссылка'
        },
        {
            image : va11hala,
            name : 'Getting Over It with Bennett Foddy',
            tier: 1,
            steamLink: 'гениальная ссылка'
        },
        {
            image : va11hala,
            name : 'Broforce',
            tier: 0,
            steamLink: 'гениальная ссылка'
        },
    ]
}

