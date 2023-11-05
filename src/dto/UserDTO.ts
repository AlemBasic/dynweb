export interface GeolocationDTO {
    lat: string;
    long: string;
}

export interface AddressDTO {
    geolocation: GeolocationDTO;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}

export interface NameDTO {
    firstname: string;
    lastname: string;
}

export interface UserDTO {
    id: number;
    email: string;
    username: string;
    password: string;
    name: NameDTO;
    phone: string;
    address: AddressDTO;
    __v: number;
}
