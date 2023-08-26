// AcademicfieldPage.tsx
import React from 'react';
import PrimarySchoolPage from './PrimarySchoolPage';
import MiddleSchoolPage from './MiddleSchoolPage';
import HighSchoolPage from './HighSchoolPage';
import UniversityPage from './UniversityPage';

type AcademicFieldPageProps = {
  selectedCard: string;
};

const AcademicFieldPage: React.FC<AcademicFieldPageProps> = ({ selectedCard }) => {
  let content = null;

  switch (selectedCard) {
    case 'Primary School':
      content = <PrimarySchoolPage />;
      break;
    case 'Middle School':
      content = <MiddleSchoolPage />;
      break;
    case 'High School':
      content = <HighSchoolPage />;
      break;
    case 'University':
      content = <UniversityPage />;
      break;
    default:
      content = null;
  }

  return <div>{content}</div>;
};

export default AcademicFieldPage;
