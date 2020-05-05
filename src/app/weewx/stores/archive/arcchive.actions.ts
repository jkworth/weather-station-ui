export class GetArchivesForLast24Hours {
    static readonly type = '[Archive] Get Archive records for last 24 hours';
}

export class GetArchivesFrom {
    static readonly type = '[Archive] Get Archive from point in time until now';

    constructor(public dateTime: number) {
    }
}
