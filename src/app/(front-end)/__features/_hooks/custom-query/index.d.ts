export interface IResponse<T> {
  ok: boolean
  status: number
  hasNext?: boolean
  item?: T
  items?: T[]
  message?: string
}
