declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module "*.md" {
  const content: string;
  export default content;
}

declare module 'markdown-to-jsx'
