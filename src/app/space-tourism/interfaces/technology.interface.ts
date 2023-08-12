export interface Technology {
    name:        string;
    images:      TechnologyImages;
    description: string;
}

interface TechnologyImages {
    portrait:  string;
    landscape: string;
}
