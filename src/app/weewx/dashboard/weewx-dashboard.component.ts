import * as am4core from '@amcharts/amcharts4/core';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Subscription, timer} from 'rxjs';
import {GetArchivesForLast24Hours, GetArchivesFrom} from '../stores/archive/arcchive.actions';
import {ARCHIVE_STATE_TOKEN} from '../stores/archive/archive.state';

am4core.options.minPolylineStep = 5;

@Component({
    selector: 'weewx-dashboard',
    templateUrl: './weewx-dashboard.component.html',
    styleUrls: ['./weewx-dashboard.component.styl']
})
export class WeewxDashboardComponent implements OnInit, OnDestroy {

    private subscriptions = new Subscription();
    private intervalTime = 30 * 1000;

    constructor(private store: Store) {
    }

    ngOnInit(): void {
        this.store.dispatch(new GetArchivesForLast24Hours());
        this.subscriptions.add(timer(this.intervalTime, this.intervalTime).subscribe(() => {
            const snap = this.store.selectSnapshot(ARCHIVE_STATE_TOKEN);
            this.store.dispatch(new GetArchivesFrom(snap.records[snap.records.length - 1].dateTime));
        }));
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
