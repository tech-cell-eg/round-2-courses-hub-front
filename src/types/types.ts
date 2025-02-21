import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface ILink {
  to?: string;
  href?: string | undefined;
  clickHandler?: () => void;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  fullRounded?: boolean;
  type?: 'button' | 'a' | typeof Link;
  disabled?: boolean;
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

// events
export interface EventProps {
  id: number;
  title: string;
  location: string;
  time: string;
  description: string;
  day: string;
  month: string;
}

// instructor
export interface InstructorProps {
  id: string;
  name: string;
  job: string;
  img: string;
}
