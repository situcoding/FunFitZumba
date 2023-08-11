export interface Client {
    id?: number;
    first_name: string;
    last_name: string;
    street_address: string;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    email: string;
    phone?: string;
    created_at?: Date;
  }
  