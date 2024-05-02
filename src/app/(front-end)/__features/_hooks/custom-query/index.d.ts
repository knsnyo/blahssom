export interface IResponse<T> {
  ok: boolean
  status: number
  item?: T
  items?: T[]
}
