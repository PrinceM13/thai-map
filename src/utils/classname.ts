import clsx, { ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  const css = clsx(...inputs)
  const merge = extendTailwindMerge({
    extend: {
      classGroups: {
        m: [{ 'mt-': ['auto', (value: string) => Number(value) >= 1000] }],
      },
    },
  })
  return merge(css)
}
