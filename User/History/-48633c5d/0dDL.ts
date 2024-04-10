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
