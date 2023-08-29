interface Student {
    id: number;
    name: string;
    score: number;
    attempts: number;
    finishingTime: string;
    avatarUrl:string;
  }
export const studentsQuizResults: Student[] = [
    {
      id: 1,
      name: "John Doe",
      score: 95,
      attempts: 3,
      finishingTime: "20 July, 9:39am",
      avatarUrl:"assets/avatar/avatar-1.jpg"
    },
    {
        id: 2,
        name: "John Doe",
        score: 95,
        attempts: 3,
        finishingTime: "20 July, 9:39am",
        avatarUrl:"assets/avatar/avatar-2.jpg"
      },
      {
        id: 3,
        name: "John Doe",
        score: 95,
        attempts: 3 ,
        finishingTime: "20 July, 9:39am",
        avatarUrl:"assets/avatar/avatar-3.jpg"
      },
      {
        id: 4,
        name: "John Doe",
        score: 95,
        attempts: 3,
        finishingTime: "20 July, 9:39am",
        avatarUrl:"assets/avatar/avatar-4.jpg"
      },
    
    // Add more student data
  ];