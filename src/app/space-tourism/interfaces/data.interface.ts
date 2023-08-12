import { Crew } from "./crew.interface";
import { Destination } from "./destination.interface";
import { Technology } from "./technology.interface";

export interface DataResponse {
    destinations: Destination[];
    crew:         Crew[];
    technology:   Technology[];
}

