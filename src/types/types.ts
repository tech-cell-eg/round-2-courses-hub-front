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
export interface ICourse1 {
  id: number;
  name: string;
  course_description: string;
  what_will_i_learn: string;
  category: string;
  language: string;
  curriculum: string[];
  skill_level: string;
  price: string;
  course_day: string[];
  start_time: string;
  end_time: string;
  enrolled_number: number;
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
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  birth_date: string;
  nationality: string;
  country: string;
  city: string;
  first_address: string;
  second_address?: string;
  zip_code: string;
  choose_file: FileList;
  password: string;
  confirm_password: string;
  intended_study_field: string;
  degree_sought: string;
  begin_studies: string;
}



//checkout form
export interface CheckoutFormProps {
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  notes: string;
  createAccount?: boolean;
}

// shopping card
export interface ShoppCardProps {
  id: number;
  img: string;
  name: string;
  currentPrice: number;
  lastPrice: number;
  discount: string;
  rating: number;
}

export interface ITestimonial {
  id: number;
  text: string;
  rating: number;
  name: string;
  title: string;
  image: string;
}

interface IComment {
  id: number;
  dateAndTime: string;
  name: string;
  comment: string;
  image: string;
}

interface IQuote {
  author: string;
  text: string;
}

export interface IBlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  blogText: string;
  comments: {
    count: number;
    data: IComment[];
  };
  publishedIn: string[];
  quote: IQuote;
  tags: string[];
}
