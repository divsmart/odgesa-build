declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': {
        challengeurl?: string;
        name?: string;
        onStateChange?: (e: any) => void;
        [key: string]: any;
      };
    }
  }
}
