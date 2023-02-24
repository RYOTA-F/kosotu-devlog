export interface IMenu {
  label: string
  url: string
}

export interface IGlobalMenu {
  label: string
  url: string
  children: IMenu[]
}
