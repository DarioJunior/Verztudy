type module = {
  id: number,
  name: string
  createAt: Date | null
  updatedAt: Date | null
  // mudar a tipagem das aulas
  classes: any
}

export interface IModulesState {
  modules: module[]
}
