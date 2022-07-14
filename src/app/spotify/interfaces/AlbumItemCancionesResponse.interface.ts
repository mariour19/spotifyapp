export interface ItemCancionesAlbum {
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    preview_url:       string;
    track_number:      number;
    type:              ItemType;
    uri:               string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    name:          Name;
    type:          ArtistType;
    uri:           URI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ID {
    The1KNQXvepPjaPGUfeDAF2H6 = "1kNQXvepPjaPgUfeDAF2h6",
    The1TUHJZ0MNTVimkplNEki48 = "1TUHJZ0mNtVimkplNEki48",
    The4IWBUUAFIplrNtaOHcJPRM = "4IWBUUAFIplrNtaOHcJPRM",
}

export enum Name {
    JamesArthur = "James Arthur",
    JoshFranceschi = "Josh Franceschi",
    YouMeAtSix = "You Me At Six",
}

export enum ArtistType {
    Artist = "artist",
}

export enum URI {
    SpotifyArtist1KNQXvepPjaPGUfeDAF2H6 = "spotify:artist:1kNQXvepPjaPgUfeDAF2h6",
    SpotifyArtist1TUHJZ0MNTVimkplNEki48 = "spotify:artist:1TUHJZ0mNtVimkplNEki48",
    SpotifyArtist4IWBUUAFIplrNtaOHcJPRM = "spotify:artist:4IWBUUAFIplrNtaOHcJPRM",
}

export enum ItemType {
    Track = "track",
}
