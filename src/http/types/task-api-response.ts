export interface TaskApiResponse {
  id: string
  title: string
  description: string
  completionDate?: Date | null
  createdAt: Date
}
