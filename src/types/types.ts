import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

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
  reverseIcon?: boolean;
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

export interface ICategory {
  id: number;
  name: string;
  definition: string;
  icon: IconType;
  image: string;
  videoLink: string;
  longDescription: string;
  shortDescription: string;
  requirements: string;
  whatYouWillLearn: string;
  careerOpportunities: string;
  tags: string[];
  color: string;
  backgroundColor: string;
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

// instructor registration
export interface InstructorRegistrationProps {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  birthDate: string;
  nationality: string;
  address1: string;
  country: string;
  city: string;
  postcode?: string;
  phone: string;
  beginStudies: string;
  degree: string;
  studyField: string;
  degreeSought: string;
}

// shopping card
export interface ShoppCardProps {
  id: number;
  img: string;
  name: string;
  currentPrice: number;
  lastPrice: string;
  discount: string;
  rating: number;
}
