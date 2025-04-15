declare module 'react-google-recaptcha' {
    import * as React from 'react';
  
    export interface ReCAPTCHAProps {
      sitekey: string;
      onChange?: (token: string | null) => void;
      onExpired?: () => void;
      onErrored?: () => void;
      theme?: 'light' | 'dark';
      size?: 'compact' | 'normal' | 'invisible';
      tabindex?: number;
      badge?: 'bottomright' | 'bottomleft' | 'inline';
      className?: string;
    }
  
    const ReCAPTCHA: React.FC<ReCAPTCHAProps>;
    export default ReCAPTCHA;
  }