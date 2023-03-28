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

export interface ExamQuestion {
  id: string; // Unique identifier for the essay question
  title: string; // Title or name of the essay question
  description: string; // Description or text of the essay question
  topic: string; // Topic or subject that the essay question pertains to
  tags: string[]; // Array of tags or keywords that describe the essay question
  question_type: '3-marker' | '5-marker' | '12-marker' | '25-marker'; // Type of the exam question
  created_at: Date; // Date and time that the essay question was created
  updated_at: Date; // Date and time that the essay question was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the essay question
}

export interface ExamAnswer {
  id: string; // Unique identifier for the essay answer
  title: string; // Title or name of the essay answer
  topic: string; // Topic or subject that the essay answer pertains to
  question: string; // The essay question or prompt
  thesis: string; // The essay thesis or main argument
  introduction: string; // The essay introduction
  body: string[]; // Array of paragraphs in the essay answer body
  conclusion: string; // The essay conclusion
  arguments: string[]; // Array of IDs for arguments related to the essay answer
  terms: string[]; // Array of IDs for terms related to the essay answer
  question_type: '3-marker' | '5-marker' | '12-marker' | '25-marker'; // Type of the exam question
  created_at: Date; // Date and time that the essay answer was created
  updated_at: Date; // Date and time that the essay answer was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the essay answer
  question_id: string; // ID of the essay question that this answer pertains to
}