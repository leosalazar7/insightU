export interface Subject {
  name: string;
  id: string;
}

export interface SubjectGroup {
  name: string;
  id: string;
  subjects: Subject[];
  imageUrl: string;
  iconUrl: string;
}

export interface PaymentOption {
  gradeLevel: string;
  price: number;
}

export interface GradeLevel {
  name: string;
  id: string;
  subjectGroups: SubjectGroup[];
}

export const HighSchoolSubjectsMathematics: Subject[] = [
  { name: "AP Calculus AB", id: "ap-calculus-ab" },
  { name: "AP Calculus BC", id: "ap-calculus-bc" },
  { name: "Pre-Calculus", id: "pre-calculus" },
  { name: "Algebra 1", id: "algebra-1" },
  { name: "Algebra 2", id: "algebra-2" },
  { name: "Geometry", id: "geometry" },
  { name: "AP Statistics", id: "ap-statistics" },
];

export const HighSchoolSubjectsScience: Subject[] = [
  { name: "Regular Science", id: "regular-science" },
  { name: "Honors Science", id: "honors-science" },
  { name: "AP Biology", id: "ap-biology" },
  { name: "AP Chemistry", id: "ap-chemistry" },
  { name: "AP Physics", id: "ap-physics" },
  { name: "AP Computer Science", id: "ap-computer-science" },
  { name: "AP Environmental Science", id: "ap-environmental-science" },
];

export const HighSchoolSubjectsEnglish: Subject[] = [
  { name: "Regular English", id: "regular-english" },
  { name: "Honors English", id: "honors-english" },
  { name: "AP English Language", id: "ap-english-language" },
  { name: "AP English Literature", id: "ap-english-literature" },
];

export const HighSchoolSubjectsHistory: Subject[] = [
  { name: "Regular History", id: "regular-history" },
  { name: "Honors History", id: "honors-history" },
  { name: "AP Human Geography", id: "ap-human-geography" },
  { name: "AP Psychology", id: "ap-psychology" },
  { name: "AP U.S Government", id: "ap-us-government" },
  { name: "AP U.S History", id: "ap-us-history" },
  { name: "AP World History", id: "ap-world-history" },
  { name: "AP Macroeconomics", id: "ap-macroeconomics" },
];

export const HighSchoolSubjectGroups: SubjectGroup[] = [
  {
    name: "English",
    id: "english",
    subjects: HighSchoolSubjectsEnglish,
    imageUrl: "/english.jpg",
    iconUrl: "/English.svg",
  },
  {
    name: "Math",
    id: "math",
    subjects: HighSchoolSubjectsMathematics,
    imageUrl: "/math.jpg",
    iconUrl: "/Math.svg",
  },
  {
    name: "Science",
    id: "science",
    subjects: HighSchoolSubjectsScience,
    imageUrl: "/science.jpg",
    iconUrl: "/Science.svg",
  },
  {
    name: "History/Social Science",
    id: "history-social-science",
    subjects: HighSchoolSubjectsHistory,
    imageUrl: "/history.jpg",
    iconUrl: "/History.svg",
  },
];
export const CollegeSubjectsMathematics: Subject[] = [
  { name: "College Algebra", id: "college-algebra" },
  { name: "College Trigonometry", id: "college-trigonometry" },
  { name: "Precalculus", id: "precalculus" },
  { name: "Calculus 1", id: "calculus-1" },
  { name: "Calculus 2", id: "calculus-2" },
  { name: "Calculus 3", id: "calculus-3" },
  { name: "Differential Equations", id: "differential-equations" },
];

export const CollegeSubjectsMedicalScience: Subject[] = [
  { name: "General Biology 1", id: "general-biology-1" },
  { name: "General Biology 2", id: "general-biology-2" },
  { name: "General Chemistry 1", id: "general-chemistry-1" },
  { name: "General Chemistry 2", id: "general-chemistry-2" },
  { name: "Physics 1 Algebra", id: "physics-1-algebra" },
  { name: "Physics 2 Algebra", id: "physics-2-algebra" },
  { name: "Organic Chemistry 1", id: "organic-chemistry-1" },
  { name: "Medical Biochemistry", id: "medical-biochemistry" },
  { name: "Microbiology", id: "microbiology" },
  { name: "Physiology", id: "physiology" },
  { name: "Anatomy", id: "anatomy" },
  { name: "Molecular Biology 1", id: "molecular-biology-1" },
  { name: "Molecular Biology 2", id: "molecular-biology-2" },
  {
    name: "QBM",
    id: "qbm",
  },
];

export const CollegeSubjectsComputerScience: Subject[] = [
  { name: "Python", id: "python" },
  { name: "Intro to C", id: "intro-to-c" },
  { name: "Computer Science 1", id: "computer-science-1" },
];

export const CollegeSubjectGroups: SubjectGroup[] = [
  {
    name: "Mathematics",
    id: "mathematics",
    subjects: CollegeSubjectsMathematics,
    imageUrl: "/math.jpg",
    iconUrl: "/Math.svg",
  },
  {
    name: "Medical Science",
    id: "medical-science",
    subjects: CollegeSubjectsMedicalScience,
    imageUrl: "/science.jpg",
    iconUrl: "/Medical_Science.svg",
  },
  {
    name: "Computer Science",
    id: "computer-science",
    subjects: CollegeSubjectsComputerScience,
    imageUrl: "/computer_science.jpg",
    iconUrl: "/Computer_Science.svg",
  },
];

export const K8SubjectsGeneralStudies: Subject[] = [
  {
    name: "Introductory Science",
    id: "introductory-science",
  },
  {
    name: "Social Studies",
    id: "social-studies",
  },
  {
    name: "Basic Mathematics",
    id: "basic-mathematics",
  },
  {
    name: "Reading/Writing",
    id: "reading-writing",
  },
];

export const K8SubjectGroups: SubjectGroup[] = [
  {
    name: "General Studies",
    id: "general-studies",
    subjects: K8SubjectsGeneralStudies,
    imageUrl: "/english.jpg",
    iconUrl: "/English.svg",
  },
];

export const TestPrepSubjectsMedicalSchool: Subject[] = [
  { name: "MCAT", id: "mcat" },
];
export const TestPrepSubjectsCollegeReadiness: Subject[] = [
  {
    name: "SAT",
    id: "sat",
  },
  { name: "ACT", id: "act" },
];

export const TestPrepSubjectGrups: SubjectGroup[] = [
  {
    name: "College Readiness",
    id: "college-readiness",
    subjects: TestPrepSubjectsCollegeReadiness,
    imageUrl: "/standardized_test.jpg",
    iconUrl: "/College_Readiness.svg",
  },
  {
    name: "Medical School",
    id: "medical-school",
    subjects: TestPrepSubjectsMedicalSchool,
    imageUrl: "/standardized_test.jpg",
    iconUrl: "/Medical_School.svg",
  },
];

export const GradeLevels: GradeLevel[] = [
  {
    name: "K-8",
    id: "k8",
    subjectGroups: K8SubjectGroups,
  },
  {
    name: "High School",
    id: "high-school",
    subjectGroups: HighSchoolSubjectGroups,
  },
  {
    name: "College",
    id: "college",
    subjectGroups: CollegeSubjectGroups,
  },
  {
    name: "Test Prep",
    id: "test-prep",
    subjectGroups: TestPrepSubjectGrups,
  },
];

export function getSubject(
  gradeLevelId: string,
  subjectGroupId: string,
  subjectId: string,
): Subject | null {
  let gradeLevel = getGradeLevel(gradeLevelId);
  let subjectGroup = gradeLevel?.subjectGroups.find(
    (subjectGroup) => subjectGroup.id === subjectGroupId,
  );
  let subject = subjectGroup?.subjects.find(
    (subject) => subject.id === subjectId,
  );

  return subject ?? null;
}

export function getSubjectGroup(
  gradeLevelId: string,
  subjectGroupId: string,
): SubjectGroup | null {
  let gradeLevel = getGradeLevel(gradeLevelId);
  let subjectGroup = gradeLevel?.subjectGroups.find(
    (subjectGroup) => subjectGroup.id === subjectGroupId,
  );

  return subjectGroup ?? null;
}

export function getGradeLevel(gradeLevelId: string): GradeLevel | null {
  let gradeLevel = GradeLevels.find(
    (gradeLevel) => gradeLevel.id === gradeLevelId,
  );
  return gradeLevel ?? null;
}
