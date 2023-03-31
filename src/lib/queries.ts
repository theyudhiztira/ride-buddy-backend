interface QueryInterface{
    startingPoint: string,
    destination: string,
    tripDuration: string,
    language?: string,
    vehicleType?: string,
    generate(): string
}

class Query implements QueryInterface{
    startingPoint: string;
    destination: string;
    tripDuration: string;
    language?: string;
    vehicleType?: string;
    result: string;

    constructor(startingPoint: string, destination: string, tripDuration: string, language?: string, vehicleType?: string) {
        this.startingPoint = startingPoint;
        this.startingPoint = startingPoint;
        this.destination = destination;
        this.tripDuration = tripDuration;
        this.vehicleType = vehicleType ?? '';
        this.language = language ?? '';
        this.result = '';
    }

    generate(): string {
        this.result = `Create a ${this.vehicleType} road trip from ${this.startingPoint} to ${this.destination} with interesting places to stop by and visit.\n`
        +`Also please give the coordinates of the point of interest to stop by.\n`
        +`Only give me places to visit that reachable either by car or motorcycle.\n`
        +`The trip duration will be a ${this.tripDuration}.\n`
        +`Also please give me recommendation of the best time to start the road trip.\n\n`;

        this.result += `{\n`
        +`"startingPoint": startingPoint,\n`
        +`"destination": destination,\n`
        +`"tripDuration": tripDuration,\n`
        +`${this.vehicleType !== '' ? '"vehicleType": vehicleType,\n' : ''}`
        +`"recommendedTime": recommendedTime,\n`
        +`"checkpoints": [{\n`
        +`"placeName": placeName,\n`
        +`"coordinates": coordinates\n`
        +`}]\n`
        +`}\n\n`;

        this.result += `Only response with json only do not give me any useless paragraph!`

        return this.result;
    }
}

export default Query;


