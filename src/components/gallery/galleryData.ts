
export interface BeforeAfterImage {
  before: string;
  after: string;
  description: string;
  style?: string;
}

export const galleryImages: BeforeAfterImage[] = [
  {
    before: "/lovable-uploads/e3cca4db-8fba-49dd-ba8b-9a1e161caa6b.png",
    after: "/lovable-uploads/e5e1d8f0-83ff-4854-a2b0-7426c9181c65.png",
    description: "סתם נהג אוטובוס",
    style: "מנהיג דרך חדשה"
  },
  {
    before: "/lovable-uploads/d880f8be-861b-42de-912d-0c9268eaa245.png",
    after: "/lovable-uploads/21f854b3-6b2e-4140-a6cc-776dde6ba2c4.png",
    description: "ממראה רגיל למנהיג עסקי מלא השראה",
    style: "יוקרה ומקצועיות שלא ניתן להתעלם מהן"
  },
  {
    before: "/lovable-uploads/7cb08be2-c284-43f9-9056-3d48b4f8e0d5.png",
    after: "/lovable-uploads/4e1b1ec2-2ba4-4607-b401-6e1087bcedfc.png",
    description: "כשאתה יודע שאין גבולות למה שאפשר להשיג",
    style: "מראה שמשדר עוצמה והצלחה"
  }
];
