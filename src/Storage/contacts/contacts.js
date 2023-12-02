import telegram from './telegram_icon.png';
import github from './github_icon.png'
import steam from './steam_icon.png';
import strava from './strava_icon.png'
import spotofy from './spotify_icon.png';
import insagram from './instagram_icon.png';

export const contacts = {
    "phone" : "+79319675706",
    "email" : "samadioroman@gmail.com",
    "socialNetworks" : [
        {
            "link" : "https://t.me/SuiQRim",
            "image" : telegram,
            "name" : "telegram"
        },
        {
            "link" : "https://github.com/SuiQRim",
            "image" : github,
            "name" : "github"
        },
        {
            "link" : "https://steamcommunity.com/id/SuiQRim/",
            "image" : steam,
            "name" : "steam"
        },
        {
            "link" : "https://discordapp.com/users/367296427971444748",
            "image": insagram,
            "name" : "instagram"
        },
        {
            "link" : "https://open.spotify.com/user/q118lh6z9izauixb56jfwu3jv?si=9438e83b2ac94b94",
            "image": spotofy,
            "name" : "spotify"
        },
        {
            "link" : "https://www.strava.com/athletes/87581371",
            "image": strava,
            "name" : "strava"
        }
    ]
}


export const layerContacts = [
    {
        "layer" : "it",
        "links" : [
            "telegram",
            "github"
        ],
    },
    {
        "layer" : "me",
        "links" : [
            "telegram",
            "github",
            "steam",
            "instagram",
            "spotify",
            "strava"
        ]
    }
]