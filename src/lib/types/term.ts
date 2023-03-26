export interface Term {
  id: string; // Unique identifier for the term
  title: string; // Title or name of the term
  author: string; // Author or creator of the definition
  topic: string; // Topic or subject that the term pertains to
  tags: string[]; // Array of tags or keywords that describe the term
  content: string; // Main definition or explanation of the term
  examples: string[]; // Array of examples that illustrate the term
  created_at: Date; // Date and time that the term was created
  updated_at: Date; // Date and time that the term was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the term
}
