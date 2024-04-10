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

export interface NewRecapInterface {
  video: [];
  portada: string;
  city: string;
  country: string;
  date: string;
  polaroid: [];
  show: string;
}
export interface RecapInterface extends NewRecapInterface {
  _id: string;
}
