import { Component, OnInit, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { DataAnalyticsService, PageLoadLabel } from './services/data-analytics.service';
import { Router, NavigationEnd } from '@angular/router';
import { ChatService } from './services/chat.service';
import { ModalController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public navigate;
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    const baseURILength = event.srcElement.baseURI.length;
    const URLLength = event.srcElement.URL.length;
    if (baseURILength === URLLength) {
      this.analytic.emitEventPageNavigateToGoogleCloud(
        '/',
        PageLoadLabel.PAGE_UNLOAD,
      );
    } else {
      this.analytic.emitEventPageNavigateToGoogleCloud(
        (event.srcElement.URL as string).substr(
          baseURILength,
          (URLLength - baseURILength),
        ),
        PageLoadLabel.PAGE_UNLOAD,
      );
    }
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private analytic: DataAnalyticsService,
    public chat: ChatService,
    public modalController: ModalController,
    private loader: LoaderService,
  ) {
    this.loader.showAutoHideLoader('');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.analytic.emitEventPageNavigateToGoogleCloud(event.urlAfterRedirects, PageLoadLabel.PAGE_LOAD);
      }
    });
    this.initializeApp();
    this.chat.connectToApi();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
  async openUserModal() {
    const modal = await this.modalController.create({
      component: ChatComponent,
    });
    return await modal.present();
  }
}
