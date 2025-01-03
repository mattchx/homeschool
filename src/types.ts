export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  organizer: string;
  description: string;
};

export interface ClassType {
  id: string;
  title: string;
  subject: string;
  schedule: string;
  instructor: string;
  description: string;
  location: string;
  price: number;
}
