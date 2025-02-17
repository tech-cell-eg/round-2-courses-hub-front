import { ReactNode } from "react";

export interface ILink {
    to: string;
    children: ReactNode;
    className?: string;
    showArrow?: boolean;
    fullRounded?: boolean;
}

interface Rating {
    value: number;
    count: number;
}

interface Price {
    current: number;
    discount: boolean;
    original: number;
}

interface Content {
    lesson: string;
    duration: string;
}

interface Instructor {
    name: string;
    image: string;
    id: number;
}

interface Review {
    name: string;
    rating: number;
    review: string;
}

export interface ICourse {
    id: number;
    name: string;
    image: string;
    description: string;
    benefits: string[];
    rating: Rating;
    category: string;
    price: Price;
    schedule: string;
    enrolled: number;
    skill_level: string;
    course_days: string[];
    language: string;
    contents: Content[];
    total_duration: string;
    instructor: Instructor;
    reviews: Review[];
}

export interface ICoursesData {
    courses: ICourse[];
}
