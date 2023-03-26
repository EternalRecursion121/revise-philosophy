export interface EssayPlan {
  id: string; // Unique identifier for the essay plan
  title: string; // Title or name of the essay plan
  topic: string; // Topic or subject that the essay plan pertains to
  description: string; // Description or text of the essay plan
  tags: string[]; // Array of tags or keywords that describe the essay plan
  sections: EssayPlanSection[]; // Array of sections in the essay plan
  created_at: Date; // Date and time that the essay plan was created
  updated_at: Date; // Date and time that the essay plan was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the essay plan
}

export interface EssayPlanSection {
  id: string; // Unique identifier for the section
  title: string; // Title or name of the section
  content: string; // Content or text of the section
  arguments: string[]; // Array of IDs for arguments related to the section
  terms: string[]; // Array of IDs for terms related to the section
}