declare module 'react' {
  const React: any;
  export default React;
  export const Fragment: any;
  export const JSX: any;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module '@tanstack/react-router' {
  export const Link: any;
  export const useNavigate: any;
  export default any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
