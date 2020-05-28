export interface Timestamps {
  created_at?: string; // 8601
  updated_at?: string; // 8601
}

export interface SoftDeletes {
  deleted_at?: string; // 8601
}
