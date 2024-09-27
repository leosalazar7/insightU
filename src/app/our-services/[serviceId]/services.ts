import { PaymentOption } from "@/app/subjects/subjects";
export interface ServicePage {
  title: string;
  subtitle: string;
  id: string;
  description: string;
  homepageDescription: string;
  homepageImage: string;
  iconImage: string;
  paymentOptions: PaymentOption[];
}

export interface Bundle {
  id: string;
  name: string;
  discount: number;
  numSessions: number;
}

export const Bundles: Bundle[] = [
  { id: "standard", name: "Standard", discount: 0, numSessions: 1 },
  { id: "8-session", name: "8 Sessions", discount: 80, numSessions: 8 },
  { id: "4-session", name: "4 Sessions", discount: 20, numSessions: 4 },
];

export const Benefits = ["Personalized Tutoring", "Homework Help", "Exam Prep"];

export const Services: ServicePage[] = [
  {
    title: "In Person Tutoring",
    subtitle: "Discover In-Person Learning",
    id: "in-person-tutoring",
    description:
      "Welcome to a world where learning is personal, engaging, and tailored just for you. Our in-person tutoring sessions offer a warm, professional environment where complex subjects become approachable.",
    homepageDescription:
      "Boost your grades with our expert, personalized in-person tutoring. Each session is customized to your needs, offering immediate feedback and effective strategies to enhance understanding and performance. Achieve more with less effort and reach your academic goals faster.",
    homepageImage: "/in_person_tutoring.jpg",
    iconImage: "/In_Person_Tutoring.svg",
    paymentOptions: [
      {
        gradeLevel: "k8",
        price: 70,
      },
      {
        gradeLevel: "high-school",
        price: 75,
      },
      {
        gradeLevel: "college",
        price: 80,
      },
      {
        gradeLevel: "test-prep",
        price: 85,
      },
    ],
  },
  {
    title: "Online Tutoring",
    subtitle: "Your Gateway to Online Mastery",
    id: "online-tutoring",
    description:
      "Embrace the future of learning from wherever you are. Our online tutoring sessions blend professional expertise with the warmth of personal engagement.",
    homepageDescription:
      "Master new skills from the comfort of your home with our expert online tutors. Each personalized session is tailored to adapt to your learning pace, ensuring enhanced understanding and retention. With the convenience of flexible scheduling and our interactive, user-friendly platform, you can achieve your academic goals with unparalleled ease and efficiency.",
    homepageImage: "/online_tutoring.jpg",
    iconImage: "/Online_Tutoring.svg",
    paymentOptions: [
      {
        gradeLevel: "k8",
        price: 60,
      },
      {
        gradeLevel: "high-school",
        price: 65,
      },
      {
        gradeLevel: "college",
        price: 70,
      },
      {
        gradeLevel: "test-prep",
        price: 75,
      },
    ],
  },
  {
    title: "Group Tutoring",
    subtitle:
      "Fortify your digital landscape with cutting-edge security measures.",
    id: "group-tutoring",
    description:
      "Our group tutoring sessions offer a unique blend of professional guidance and collaborative learning. Be part of a group that learns and grows, together",
    homepageDescription:
      "Experience the power of collaborative learning with our group tutoring sessions. Our expert tutors create a dynamic environment where students can share ideas, engage in interactive discussions, and support each other's growth. Group tutoring not only enhances understanding through peer collaboration but also fosters a sense of community and teamwork. Join us and thrive together!",
    homepageImage: "/group_tutoring.jpg",
    iconImage: "/Group_Tutoring.svg",
    paymentOptions: [
      {
        gradeLevel: "k8",
        price: 55,
      },
      {
        gradeLevel: "high-school",
        price: 60,
      },
      {
        gradeLevel: "college",
        price: 65,
      },
      {
        gradeLevel: "test-prep",
        price: 70,
      },
    ],
  },
  {
    title: "Summer Success",
    subtitle:
      "Unlock the potential of AI to revolutionize your business strategies and operations.",
    id: "summer-success",
    description:
      "Whether you're preparing for college entrance exams or seeking to enrich your summer learning, our special programs are designed to help students aspiring to elevate their educational journey. ",
    homepageDescription:
      "Unlock the secret to academic efficiency with our Summer Success Program! Designed to teach you time-saving study strategies, this program helps you maintain stellar grades while freeing up time for what you love. Learn from experts how to streamline your studying process, understand concepts faster, and retain more information.",
    homepageImage: "/summer_success.jpg",
    iconImage: "/Summer_Success.svg",
    paymentOptions: [],
  },
];

export const getServiceById = (id: string): ServicePage | undefined => {
  return Services.find((service) => service.id === id);
};
