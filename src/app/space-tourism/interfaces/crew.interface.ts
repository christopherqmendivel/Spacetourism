export interface Crew {
    name:   string;
    images: CrewImages;
    role:   string;
    bio:    string;
}

interface CrewImages {
    png:  string;
    webp: string;
}