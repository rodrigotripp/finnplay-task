export type Game = {
  cover: string
  coverLarge: string
  date: Date
  id: number
  name: string
  provider: number
}

export type Group = {
  id: number
  name: string
  games?: number[]
}

export type Provider = {
  id: number
  name: string
  logo?: string
  games?: number[]
}

export type DataType = {
  games: Game[],
  providers: Provider[],
  groups: Group[]
}