import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {concatMap, map} from 'rxjs/operators';
import {ArchiveEntity} from '../entities';
import {ArchiveBaseEntity} from '../entities/archiveBase.entity';

interface WeeWxApiResponse<T> {
    items: T[];
    itemCount: number;
    totalItems: number;
    pageCount: number;
    next: string | null;
    previous: string | null;
}

@Injectable({
    providedIn: 'root'
})
export class WeeWXService {

    private static HOST = 'https://innerharbor.duckdns.org:3000';
    private static API_BASE = '/api/v1';

    constructor(private httpClient: HttpClient) {
    }

    getArchivesForLast24Hours(): Observable<ArchiveEntity[]> {
        return this.getUrl<ArchiveEntity>(`${WeeWXService.API_BASE}/archive/last24Hours`);
    }

    getArchivesFrom(dateTime: number): Observable<ArchiveEntity[]> {
        return this.getUrl<ArchiveEntity>(`${WeeWXService.API_BASE}/archive/from/${dateTime}`);
    }

    private getUrl<T extends ArchiveBaseEntity>(url: string): Observable<T[]> {
        return this.httpClient.get<WeeWxApiResponse<T>>(`${WeeWXService.HOST}${url}`).pipe(concatMap((response) => {
            if (response.next) {
                return this.getUrl<T>(response.next).pipe(map((innerResponse): T[] => {
                    return [...response.items, ...innerResponse];
                }));
            } else {
                return of(response.items);
            }
        }));
    }
}
