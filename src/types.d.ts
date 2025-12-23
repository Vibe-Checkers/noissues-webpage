declare module '*.txt' {
  const content: string;
  export default content;
}

declare module '*?raw' {
  const content: string;
  export default content;
}

declare module '*.dockerfile' {
  const url: string;
  export default url;
}

declare module '*.dockerfile?url' {
  const url: string;
  export default url;
}

