export interface NewDateInterface {
  city: string;
  country: string;
  flag: string;
  date: string;
  show: string;
  availability: boolean;
  link: string;
}
export interface NexDatesInterface extends NewDateInterface {
  _id: string;
}

export interface NewRecap {
  video: [];
  portada: string;
  city: string;
  country: string;
  date: string;
  polaroid: [];
}
export interface RecapInterface extends NewRecap {
  // _id: string;
}
