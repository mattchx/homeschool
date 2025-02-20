export interface Class {
  id: string;
  name: string;
  description: string;
  schedule: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'article' | 'document';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
