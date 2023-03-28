export interface Edit {
  id: string; // Unique identifier for the edit
  editor: string; // Name or ID of the user who made the edit
  item_id: string; // ID of the item that was edited
  field: string; // Name of the field that was edited
  old_value: any; // Old value of the edited field
  new_value: any; // New value of the edited field
  timestamp: Date; // Date and time that the edit was made
}