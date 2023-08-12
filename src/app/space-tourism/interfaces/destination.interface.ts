export interface Destination {
    name:        string;
    images:      CrewImages;
    description: string;
    distance:    string;
    travel:      string;
}

interface CrewImages {
    png:  string;
    webp: string;
} 
