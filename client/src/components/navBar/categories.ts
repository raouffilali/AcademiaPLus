
export interface Category {
  title: string;
  subcategories: { title: string; link: string }[];
}

export const CATEGORIES: Category[] = [
 
  {
    title: "General Courses",
    subcategories: [
      { title: "Design", link: "/design" },
      { title: "Development", link: "/development" },
      { title: "Marketing", link: "/marketing" },
      { title: "IT and Software", link: "/it-software" },
      { title: "Business", link: "/business" },
      { title: "Photography", link: "/photography" },
      { title: "Fitness", link: "/fitness" },
      { title: "Art", link: "/art" },
    ],
  },
  {
    title: "Academic Fields",
    subcategories: [
      { title: "Primary School", link: "/primary-school" },
      { title: "Middle School", link: "/middle-school" },
      { title: "High School", link: "/high-school" },
      { title: "University", link: "/university" },
    ],
  },
];
