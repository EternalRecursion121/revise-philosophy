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
  created_at: Date; // Date and time that the essay answer was created
  updated_at: Date; // Date and time that the essay answer was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the essay answer
  question_id: string; // ID of the essay question that this answer pertains to
}

export interface ExamQuestion {
  id: string; // Unique identifier for the essay question
  title: string; // Title or name of the essay question
  description: string; // Description or text of the essay question
  topic: string; // Topic or subject that the essay question pertains to
  tags: string[]; // Array of tags or keywords that describe the essay question
  created_at: Date; // Date and time that the essay question was created
  updated_at: Date; // Date and time that the essay question was last updated
  edit_history: string[]; // Array of IDs or timestamps for edits made to the essay question
}