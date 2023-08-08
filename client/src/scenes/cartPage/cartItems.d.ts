// cartItems.d.ts
import { CourseCardProps } from "../../components/courseCard/CourseCard"; // Update the path to match your CourseCard component

declare module "./cartItems" {
  export const cartItems: CourseCardProps[];
  export function addToCart(item: CourseCardProps): void;
  export function removeFromCart(item: CourseCardProps): void;
  export function calculateTotalPrice(): number;
}
