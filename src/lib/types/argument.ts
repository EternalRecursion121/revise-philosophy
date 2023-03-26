export interface Argument {
  id: string; // Unique identifier for the argument
  name: string; // Name or title of the argument
  author: string; // Author or creator of the argument
  topic: string; // Topic or subject that the argument pertains to
  tags: string[]; // Array of tags or keywords that describe the argument
  content: string; // Main content or body of the argument
  responses: string[]; // Array of IDs for arguments that this argument responds to
  responses_to: string[]; // Array of IDs for arguments that respond to this argument
  created_at: Date; // Date and time that the argument was created
  updated_at: Date; // Date and time that the argument was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the argument
}