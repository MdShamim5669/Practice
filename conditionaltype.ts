type RichPeopleVehicle = {
    bike : string;
    car : string;
    ship : string;
};

type checkVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type Hasbike = checkVehicle<"bike">;