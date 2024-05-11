import { Course } from "../courses/courses.model";

export interface SC {
    id: number;
    name: string;
    level: number,
    courses: Course[];
    
}

