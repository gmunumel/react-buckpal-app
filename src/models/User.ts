export interface Address {
  street_name: string;
  street_number: number;
  city: string;
  postal_code: string;
  country: string;
}

export interface User {
  user_id: number;
  name: string;
  address: Address;
  status: string;
}
