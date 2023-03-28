export interface Specification {
  id: string; // Unique identifier for the specification
  name: string; // Name of the specification
  topics: Topic[]; // Array of topics in the specification
}

export interface Topic {
  id: string; // Unique identifier for the topic
  name: string; // Name of the topic
  points: SpecificationPoint[]; // Array of specification points in the topic
}

export interface SpecificationPoint {
  id: string; // Unique identifier for the specification point
  name: string; // Name of the specification point
  topic: string; // ID of the topic that the specification point belongs to
  essay_questions: string[]; // Array of IDs for problems/questions related to the specification point
}
