// Nav Bar language interface
export interface ILanguage {
  id: number;
  label: string;
}
export interface Subscription {
  id: string;
  type: string;
  startedOn: string;
  price: string;
  access: string;
  billingDate: string;
  active:boolean;
}
export interface AcademicCourseDetailsProps {
  // Define the props you need for the details page
  // These should match the properties of your course data
  // Example:
  courseName: string;
  instructor: string;
  instructorAvtr: string;
  rating: number;
  views: number;
  price: string;
  courseThumbnailSrc: string;
  instructorJob: string;
  numLessons: number;
  duration: string;
  subject: string;
}

