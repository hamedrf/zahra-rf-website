declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    offset?: number;
    delay?: number;
    disable?:
      | boolean
      | "mobile"
      | "phone"
      | "tablet"
      | "phone-only"
      | "tablet-only";
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
    anchorPlacement?: string;
    mirror?: boolean;
    once?: boolean;
  }

  declare class AOS {
    static init(options?: AosOptions): void;
    static refresh(): void;
    static refreshHard(): void;
  }

  export default AOS;
}
