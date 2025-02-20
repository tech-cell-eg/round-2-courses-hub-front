interface EventProps {
  id: number;
  title: string;
  location: string;
  time: string;
  description: string;
  day: string;
  month: string;
}

export const eventDetails: EventProps[] = [
  {
    id: 1,
    title: 'Print, and publishing industries for previewing',
    location: 'Online',
    time: '10:00 AM - 12:00 PM',
    description:
      'An industry event focusing on the latest trends in print and publishing, perfect for professionals in the field.',
    day: '05',
    month: 'Jan',
  },
  {
    id: 2,
    title: 'Tech Conference 2025',
    location: 'San Francisco, CA',
    time: '09:00 AM - 05:00 PM',
    description:
      'A gathering of top tech professionals discussing future innovations in AI, cloud computing, and cybersecurity.',
    day: '12',
    month: 'Feb',
  },
  {
    id: 3,
    title: 'Web Development Workshop',
    location: 'New York, NY',
    time: '01:00 PM - 04:00 PM',
    description:
      'A hands-on workshop for web developers covering modern frameworks, performance optimization, and best practices.',
    day: '18',
    month: 'Mar',
  },
  {
    id: 4,
    title: 'AI and Machine Learning Summit',
    location: 'London, UK',
    time: '08:30 AM - 03:30 PM',
    description:
      'Experts share insights on the latest advancements in AI, deep learning, and their real-world applications.',
    day: '22',
    month: 'Apr',
  },
  {
    id: 5,
    title: 'Cybersecurity Awareness Seminar',
    location: 'Online',
    time: '11:00 AM - 02:00 PM',
    description:
      'A security-focused seminar covering best practices to prevent cyber threats and ensure data privacy.',
    day: '07',
    month: 'May',
  },
  {
    id: 6,
    title: 'Cloud Computing Expo',
    location: 'Berlin, Germany',
    time: '10:00 AM - 06:00 PM',
    description:
      'An expo featuring top cloud service providers, demonstrating the latest in cloud infrastructure and SaaS solutions.',
    day: '14',
    month: 'Jun',
  },
  {
    id: 7,
    title: 'Startup Pitch Competition',
    location: 'Silicon Valley, CA',
    time: '03:00 PM - 07:00 PM',
    description:
      'Startups pitch their innovative ideas to investors, aiming to secure funding and business partnerships.',
    day: '20',
    month: 'Jul',
  },
  {
    id: 8,
    title: 'UI/UX Design Bootcamp',
    location: 'Remote',
    time: '09:30 AM - 04:30 PM',
    description:
      'A practical bootcamp teaching UX research, wireframing, and UI design principles for web and mobile applications.',
    day: '09',
    month: 'Aug',
  },
  {
    id: 9,
    title: 'Blockchain and Crypto Conference',
    location: 'Dubai, UAE',
    time: '10:00 AM - 05:00 PM',
    description:
      'A conference exploring blockchain innovations, DeFi, NFTs, and the future of digital currencies.',
    day: '26',
    month: 'Sep',
  },
  {
    id: 10,
    title: 'Quantum Computing Symposium',
    location: 'Tokyo, Japan',
    time: '09:00 AM - 02:00 PM',
    description:
      'Leading scientists and engineers discuss advancements in quantum computing and its potential applications.',
    day: '15',
    month: 'Oct',
  },
];
