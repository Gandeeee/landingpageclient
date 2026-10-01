export interface ProfileData {
  name: string;
  role: string;
  location: string;
  experienceYears: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  heroHeadline: {
    line1: string;
    line2: string;
    line3: string;
  };
  shortBio: string;
  fullBio: string;
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  links: Array<{
    id: string;
    title: string;
    subtitle: string;
    badge?: string;
    url: string;
    icon: 'whatsapp' | 'instagram' | 'linkedin' | 'camera' | 'map' | 'mail';
    isPrimary?: boolean;
    buttonLabel: string;
  }>;
}

export const profileData: ProfileData = {
  name: "Pande Suastika",
  role: "Private Tour Guide & Local Host",
  location: "Bali, Indonesia",
  experienceYears: "10+ Years",
  phone: "6281339083990",
  phoneDisplay: "+62 813-3908-3990",
  whatsappUrl: "https://wa.me/6281339083990?text=Hi%20Pande,%20I'd%20love%20to%20plan%20a%20tour%20in%20Bali%20with%20you!",
  linkedinUrl: "https://id.linkedin.com/in/pande-suastika-a8055652",
  instagramUrl: "https://instagram.com/pandesuastika",
  instagramHandle: "@pandesuastika",
  heroHeadline: {
    line1: "Unforgettable",
    line2: "Travel Moments",
    line3: "with Pande",
  },
  shortBio: "I take you beyond the ordinary, to places where living culture breathes, untouched landscapes take your breath away, and every travel moment turns into a lifelong memory.",
  fullBio: "For more than 10 years, I've had the joy of guiding travelers from all corners of the world through Bali and across Indonesia. Forget rushed tour buses and rigid schedules. Together, we explore quiet coastal lookouts before the crowds arrive, sacred village temples at sunrise, and authentic warungs where locals actually eat. My priority is always your safety, comfort, and a genuinely unforgettable journey.",
  stats: [
    {
      value: "10+ Years",
      label: "Guiding Experience",
      description: "Navigating Bali & Indonesian roads since 2014"
    },
    {
      value: "100%",
      label: "Custom & Private",
      description: "Every itinerary tailored to your group's personal pace"
    },
    {
      value: "Certified",
      label: "English Speaking",
      description: "Clear communication, deep cultural insights & safety"
    },
    {
      value: "5.0 ★",
      label: "Guest Satisfaction",
      description: "Loved by couples, solo travelers, and families alike"
    }
  ],
  links: [
    {
      id: "whatsapp",
      title: "Direct WhatsApp Booking",
      subtitle: "Instant trip inquiries, custom questions & fast reply directly from me",
      badge: "Fastest Response",
      url: "https://wa.me/6281339083990?text=Hi%20Pande,%20I'd%20love%20to%20plan%20a%20tour%20in%20Bali%20with%20you!",
      icon: "whatsapp",
      isPrimary: true,
      buttonLabel: "Chat on WhatsApp"
    },
    {
      id: "instagram",
      title: "Instagram Travel Stories",
      subtitle: "Recent trips, guest photos, hidden waterfalls & Balinese ceremonies",
      badge: "Daily Updates",
      url: "https://instagram.com/pandesuastika",
      icon: "instagram",
      buttonLabel: "Follow @pandesuastika"
    },
    {
      id: "linkedin",
      title: "LinkedIn Professional Profile",
      subtitle: "10+ years hospitality career, credentials, and tourism background",
      badge: "Verified Profile",
      url: "https://id.linkedin.com/in/pande-suastika-a8055652",
      icon: "linkedin",
      buttonLabel: "View Pande on LinkedIn"
    },
    {
      id: "infinity-photo",
      title: "Infinity Photo",
      subtitle: "Professional vacation photography & holiday photoshoots across Bali",
      badge: "Other Business",
      url: "https://infinityphoto.netlify.app/",
      icon: "camera",
      buttonLabel: "Visit Infinity Photo"
    }
  ]
};

