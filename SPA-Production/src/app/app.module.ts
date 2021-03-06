import { BasicAuthInterceptor } from './_core/_helper/basic-auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { NgSelectModule } from "@ng-select/ng-select";

//Import service
import { ErrorInterceptorProvider } from './_core/_services/error.interceptor';
import { AlertifyService } from './_core/_services/alertify.service';
import { AuthGuard } from './_core/_guards/auth.guard';
import { BrandListResolver } from './_core/_resolvers/brand-list.resolver';
import { CategoryListResolver } from './_core/_resolvers/category-list.resolver';
import { CategoryEditResolver } from './_core/_resolvers/category-edit.resolver';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { PaginationModule } from 'ngx-bootstrap';
import { AuditTypeListResolver } from './_core/_resolvers/audit-type-list.resolver';

export function tokenGetter() {
  return localStorage.getItem("token");
}

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthService } from './_core/_services/auth.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RegisterComponent } from './views/register/register.component';
import { ForgotPasswordComponent } from './modules/general/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './modules/general/confirm-password/confirm-password.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({

  imports: [
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDropdownModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ChartsModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'vi'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"]
      }
    })
  ],

  declarations: [
    // DateAgoPipe,
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ConfirmPasswordComponent
    // AccountComponent
  ],

  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    BrandListResolver,
    AuditTypeListResolver,
    CategoryListResolver,
    CategoryEditResolver,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
