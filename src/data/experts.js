// Image filenames as in project root / public folder. Use encodeURIComponent when building URL.
export const expertImages = [
  { name: 'Doctor', tagline: 'Medical guidance', file: 'doctor.png' },
  { name: 'Lawyer', tagline: 'Legal advice', file: 'lawyer.png' },
  { name: 'Therapist', tagline: 'Emotional support', file: 'therapist.png' },
  { name: 'Mentor', tagline: 'Life & career', file: 'mentor.png' },
  { name: 'Business Coach', tagline: 'Growth & strategy', file: 'business_coach.png' },
  { name: 'Nutritionist', tagline: 'Diet & wellness', file: 'nutritionist.png' },
  { name: 'Astrologer', tagline: 'Guidance & insight', file: 'astrologer.png' },
  { name: 'Fitness Trainer', tagline: 'Fitness & health', file: 'trainer.png' },
  { name: 'Career Counselor', tagline: 'Career growth', file: 'career_counselor.png' },
  { name: 'Financial Advisor', tagline: 'Wealth & Finance', file: 'financial_advisor.png' },
  { name: 'Yoga Instructor', tagline: 'Mind & Body Flow', file: 'yoga_instructor.png' },
  { name: 'Tech Mentor', tagline: 'Coding & Tech', file: 'tech_mentor.png' },
  { name: 'Marketing Specialist', tagline: 'Brand & Growth', file: 'marketing_expert.png' },
  { name: 'Relationship Coach', tagline: 'Family & Bonds', file: 'relationship_coach.png' },
  { name: 'Travel Consultant', tagline: 'World experiences', file: 'travel_expert.png' },
  { name: 'Interior Designer', tagline: 'Space & Harmony', file: 'interior_designer.png' },
]

export function expertImageUrl(fileName) {
  if (!fileName) return ''
  return '/images/' + encodeURIComponent(fileName)
}

export const heroWallpaper = 'heyypal_wallpaper.jpeg'
