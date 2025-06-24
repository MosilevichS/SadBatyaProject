interface IColorPicker {
  name: string
  color: 'bg-white' | 'bg-blue-500' | 'bg-green-500' | 'bg-red-500'
}

export const colors: IColorPicker[] = [
  { name: 'White', color: 'bg-white' },
  { name: 'Blue', color: 'bg-blue-500' },
  { name: 'Green', color: 'bg-green-500' },
  { name: 'Red', color: 'bg-red-500' },
] as const
