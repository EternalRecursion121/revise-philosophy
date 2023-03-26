
export interface Problem {
  id: string; // Unique identifier for the problem/question
  title: string; // Title or name of the problem/question
  description: string; // Description or text of the problem/question
  topic: string; // Topic or subject that the problem/question pertains to
  tags: string[]; // Array of tags or keywords that describe the problem/question
  arguments: string[]; // Array of IDs for arguments related to the problem/question
  terms: string[]; // Array of IDs for terms related to the problem/question
  created_at: Date; // Date and time that the problem/question was created
  updated_at: Date; // Date and time that the problem/question was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the problem/question
}
