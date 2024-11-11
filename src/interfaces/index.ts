export type TodoStatus = "ACTIVE" | "ARCHIVED"

export interface ITodoList {
  id: string
  description: string
  status: TodoStatus
}

export interface ITodoItem {
  id: string
  description: string
  status: string
}
