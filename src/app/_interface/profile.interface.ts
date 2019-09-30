
export class PROFILE {
    constructor(init?: Partial<PROFILE>) {
        Object.assign(this, init);
    }
    id: string = '';
    email: string = '';
    photo: string = '';
    name: string = '';
    funds: number = 0;
    tariffid: string = '';
    tariffname: string = '';
    agreement?: [] = [];
}
