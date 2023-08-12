export interface Availability {
    id?: number;             // Optional ID, useful for edits or deletions
    startTime: Date;         // Start time of the availability
    endTime: Date;           // End time of the availability
    userId?: number;         // Optional user ID to associate availability with a specific user
    note?: string;           // Optional note or description
    date?: Date;             // Optional specific date for which the availability is set
  }
  