/// <reference types="jquery" />

declare global {
  interface Window {
    $: JQuery;
  }
}

declare module 'turn.js' {
  interface TurnOptions {
    width?: number;
    height?: number;
    autoCenter?: boolean;
    // Ajoutez d'autres options selon vos besoins
  }

  interface JQuery {
    turn(options?: TurnOptions): JQuery;
    turn(command: string): JQuery;
  }
}

export {};