import { Page } from "@playwright/test";
import { DynamicIdPage } from "./dynamicIdPage";
import { HomePage } from "./homePage";
import { ClassAttributePage } from "./classAttributePage";
import { HiddenLayersPage } from "./hiddenLayersPage";
import { LoadDelayPage } from "./loadDelayPage";
import { AjaxDataPage } from "./ajaxDataPage";  
import { ClientSideDelayPage } from "./clientSideDelayPage";
import { ClickPage } from "./clickPage";
import { TextInputPage } from "./textInputPage";    
import { ScrollbarsPage } from "./scrollbarsPage";
import { DynamicTablePage } from "./dynamicTablePage";
import { VerifyTextPage } from "./verifyTextPage";
import { ProgressBarPage } from "./progressBarPage";
import { VisibilityPage } from "./visibilityPage";
import { SampleAppPage } from "./sampleAppPage";
import { MouseOverPage } from "./mouseOverPage";
import { NonBreakingSpacePage } from "./nonBreakingSpacePage";
import { OverlappedElementPage } from "./overlappedElementPage";
import { ShadowDomPage } from "./shadowDomPage";
import { AlertsPage } from "./alertsPage";
import { FileUploadPage } from "./fileUploadPage";
import { AnimatedButtonPage } from "./animatedButtonPage";
import { DisabledInputPage } from "./disabledInputPage";
import { AutoWaitPage } from "./autoWaitPage";


export class PageManager{
    private readonly page: Page;
    private readonly dynamicPage: DynamicIdPage;
    private readonly homePage: HomePage;
    private readonly classAttributePage: ClassAttributePage;
    private readonly hiddenLayersPage: HiddenLayersPage; 
    private readonly loadDelayPage: LoadDelayPage; 
    private readonly ajaxDataPage: AjaxDataPage;
    private readonly clientSideDelayPage: ClientSideDelayPage;    
    private readonly clickPage: ClickPage;  
    private readonly textInputPage: TextInputPage;
    private readonly scrollbarsPage: ScrollbarsPage;
    private readonly dynamicTablePage: DynamicTablePage;
    private readonly verifyTextPage: VerifyTextPage;
    private readonly progressBarPage: ProgressBarPage;
    private readonly visibilityPage: VisibilityPage; 
    private readonly sampleAppPage: SampleAppPage;
    private readonly mouseOverPage: MouseOverPage;
    private readonly nonBreakingSpacePage: NonBreakingSpacePage;
    private readonly overlappedElementPage: OverlappedElementPage;
    private readonly shadowDomPage: ShadowDomPage;
    private readonly alertsPage: AlertsPage;
    private readonly fileUploadPage: FileUploadPage;
    private readonly animatedButtonPage: AnimatedButtonPage;
    private readonly disabledInputPage: DisabledInputPage;
    private readonly autoWaitPage: AutoWaitPage; 


    constructor(page:Page){
        this.page = page;
        this.dynamicPage = new DynamicIdPage(this.page);
        this.homePage = new HomePage(this.page);
        this.classAttributePage = new ClassAttributePage(this.page); 
        this.hiddenLayersPage = new HiddenLayersPage(this.page); 
        this.loadDelayPage = new LoadDelayPage(this.page); 
        this.ajaxDataPage = new AjaxDataPage(this.page); 
        this.clientSideDelayPage = new ClientSideDelayPage(this.page); 
        this.clickPage = new ClickPage(this.page);
        this.textInputPage = new TextInputPage(this.page); 
        this.scrollbarsPage = new ScrollbarsPage(this.page);
        this.dynamicTablePage = new DynamicTablePage(this.page);
        this.verifyTextPage = new VerifyTextPage(this.page); 
        this.progressBarPage = new ProgressBarPage(this.page);
        this.visibilityPage = new VisibilityPage(this.page); 
        this.sampleAppPage = new SampleAppPage(this.page); 
        this.mouseOverPage = new MouseOverPage(this.page);
        this.nonBreakingSpacePage = new NonBreakingSpacePage(this.page);
        this.overlappedElementPage = new OverlappedElementPage(this.page); 
        this.shadowDomPage = new ShadowDomPage(this.page); 
        this.alertsPage = new AlertsPage(this.page);
        this.fileUploadPage = new FileUploadPage(this.page); 
        this.animatedButtonPage = new AnimatedButtonPage(this.page);
        this.disabledInputPage = new DisabledInputPage(this.page); 
        this.autoWaitPage = new AutoWaitPage(this.page);
    }

    onDynamicIdPage(){
        return this.dynamicPage;
    }

    onHomePage(){
        return this.homePage;
    }

    onClassAttributePage(){
        return this.classAttributePage;
    }

    onHiddenLayersPage(){
        return this.hiddenLayersPage;
    }

    onLoadDelayPage(){
        return this.loadDelayPage;
    }

    onAjaxPage(){
        return this.ajaxDataPage;
    }

    onClientSideDelayPage(){
        return this.clientSideDelayPage;
    }

    onClickPage(){
        return this.clickPage;
    }

    onTextInputPage(){
        return this.textInputPage;
    }

    onScrollbarsPage(){
        return this.scrollbarsPage;
    }

    onDynamicTablePage(){
        return this.dynamicTablePage;
    }

    onVerifyTablePage(){
        return this.verifyTextPage;
    }

    onProgressBarPage(){
        return this.progressBarPage;
    }

    onVisibilityPage(){
        return this.visibilityPage;
    }

    onSampleAppPage(){
        return this.sampleAppPage;
    }

    onMouseOverPage(){
        return this.mouseOverPage;
    }

    onNonBreakingSpacePage(){
        return this.nonBreakingSpacePage;
    }

    onOverlappedElementPage(){
        return this.overlappedElementPage;
    }

    onShadowDomPage(){
        return this.shadowDomPage;
    }

    onAlertsPage(){
        return this.alertsPage;
    }

    onFileUploadPage(){
        return this.fileUploadPage;
    }

    onAnimatedButtonPage(){
        return this.animatedButtonPage;
    }

    onDisabledInputPage(){
        return this.disabledInputPage;
    }

    onAutoWaitPage(){
        return this.autoWaitPage;
    }

}