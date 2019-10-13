export class Order {
    constructor(
        public id: number,
        public orderNumber: string,
        public name: string,
        public phoneNumber: string,
        public address: string,
        public comments: string,
        public items: string,

    ){ }
}