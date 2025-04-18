export const students = [
  { id: 1, name: "Aditi Sharma" },
  { id: 2, name: "Ravi Verma" },
  { id: 3, name: "Neha Singh" },
  { id: 4, name: "Aman Jain" },
  { id: 5, name: "Ishita Roy" }
];

export const reports = {
  1: {
    name: "Aditi Sharma",
    age: 15,
    grade: "10th",
    skills: ["Empathy", "Creativity", "Focus", "Communication", "Observation"],
    top_career_roles: [
      {
        role: "Social Worker",
        why_it_matches_profile: "You value empathy and helping others.",
        potential_job_roles_and_growth_opportunities: [
          "Child Welfare Worker",
          "Community Development Specialist",
          "Mental Health Counselor"
        ],
        educational_pathways_and_skill_development: "Courses in psychology, social work, volunteering etc.",
        mindset_and_attitude_development: "Self-care, empathy, and resilience.",
        career_trends_and_future_outlook: "10% growth expected in coming years."
      }
    ],
    summary: "You have strong people skills and a caring mindset, making you fit for social roles."
  },
  2: {
    name: "Ravi Verma",
    age: 15,
    grade: "10th",
    skills: ["Empathy", "Creativity", "Focus", "Communication", "Observation"],
    top_career_roles: [
      {
        role: "Social Worker",
        why_it_matches_profile: "You value empathy and helping others.",
        potential_job_roles_and_growth_opportunities: [
          "Child Welfare Worker",
          "Community Development Specialist",
          "Mental Health Counselor"
        ],
        educational_pathways_and_skill_development: "Courses in psychology, social work, volunteering etc.",
        mindset_and_attitude_development: "Self-care, empathy, and resilience.",
        career_trends_and_future_outlook: "10% growth expected in coming years."
      }
    ],
    summary: "You have strong people skills and a caring mindset, making you fit for social roles."
  },
  3: {
    name: "Neha Singh",
    age: 15,
    grade: "10th",
    skills: ["Empathy", "Creativity", "Focus", "Communication", "Observation"],
    top_career_roles: [
      {
        role: "Social Worker",
        why_it_matches_profile: "You value empathy and helping others.",
        potential_job_roles_and_growth_opportunities: [
          "Child Welfare Worker",
          "Community Development Specialist",
          "Mental Health Counselor"
        ],
        educational_pathways_and_skill_development: "Courses in psychology, social work, volunteering etc.",
        mindset_and_attitude_development: "Self-care, empathy, and resilience.",
        career_trends_and_future_outlook: "10% growth expected in coming years."
      }
    ],
    summary: "You have strong people skills and a caring mindset, making you fit for social roles."
  },
  4: {
    name: "Aman Jain",
    age: 15,
    grade: "10th",
    skills: ["Empathy", "Creativity", "Focus", "Communication", "Observation"],
    top_career_roles: [
      {
        role: "Social Worker",
        why_it_matches_profile: "You value empathy and helping others.",
        potential_job_roles_and_growth_opportunities: [
          "Child Welfare Worker",
          "Community Development Specialist",
          "Mental Health Counselor"
        ],
        educational_pathways_and_skill_development: "Courses in psychology, social work, volunteering etc.",
        mindset_and_attitude_development: "Self-care, empathy, and resilience.",
        career_trends_and_future_outlook: "10% growth expected in coming years."
      }
    ],
    summary: "You have strong people skills and a caring mindset, making you fit for social roles."
  },
  5: {
    name: "Ishita Roy",
    age: 15,
    grade: "10th",
    skills: ["Empathy", "Creativity", "Focus", "Communication", "Observation"],
    top_career_roles: [
      {
        role: "Social Worker",
        why_it_matches_profile: "You value empathy and helping others.",
        potential_job_roles_and_growth_opportunities: [
          "Child Welfare Worker",
          "Community Development Specialist",
          "Mental Health Counselor"
        ],
        educational_pathways_and_skill_development: "Courses in psychology, social work, volunteering etc.",
        mindset_and_attitude_development: "Self-care, empathy, and resilience.",
        career_trends_and_future_outlook: "10% growth expected in coming years."
      }
    ],
    summary: "You have strong people skills and a caring mindset, making you fit for social roles."
  },

};

export function fetchStudents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 500); 
  });
}

export function fetchStudentReport(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (reports[id]) {
        resolve(reports[id]);
      } else {
        reject("Student report not found.");
      }
    }, 500);
  });
}
