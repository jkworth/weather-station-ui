import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InMemoryCache, split } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WxModule } from './wx/wx.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WxModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        const host = `${environment.API_HOST}:${environment.API_PORT}`;
        const http = httpLink.create({
          uri: `https://${host}/graphql`
        });

        const ws = new WebSocketLink({
          uri: `wss://${host}/graphql`,
          options: {
            reconnect: true
          }
        });

        const link = split(
          ({ query }) => {
            const opDef = getMainDefinition(query);
            return opDef.kind === 'OperationDefinition' && opDef.operation === 'subscription';
          },
          ws,
          http
        );

        return {
          cache: new InMemoryCache(),
          link
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
