type classProps = {
  id: number
  name: string
  module_id: number
  release_date: Date | null
  createAt: Date | null
  updatedAt: Date | null
}

export interface IClassesState {
  classes: classProps[]
}
