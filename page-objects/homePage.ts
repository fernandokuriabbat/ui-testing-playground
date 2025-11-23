import { Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class HomePage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async navigateToDynamicIdPage(){
        await this.selectPageTitleLink('Dynamic ID');
    }

     async navigateToClassAttributePage(){
        await this.selectPageTitleLink('Class Attribute');
    }

    async navigateToHiddenLayersPage(){
        await this.selectPageTitleLink('Hidden Layers');
    }

    async navigateToLoadDelayPage(){
        await this.selectPageTitleLink('Load Delay');
    }

    async navigateToAjaxDataPage(){
        await this.selectPageTitleLink('AJAX Data');
    }

     async navigateToClientSideDelayPage(){
        await this.selectPageTitleLink('Client Side Delay');
    }

    async navigateToClickPage(){
        await this.selectPageTitleLink('Click');
    }

    async navigateToTextInputPage(){
        await this.selectPageTitleLink('Text Input');
    }

    async navigateToScrollbarsPage(){
        await this.selectPageTitleLink('Scrollbars');
    }

    async navigateToDynamicTablePage(){
        await this.selectPageTitleLink('Dynamic Table');
    }

    async navigateToVerifyTextPage(){
        await this.selectPageTitleLink('Verify Text');
    }

    async navigateToProgressBarPage(){
        await this.selectPageTitleLink('Progress Bar');
    }

    async navigateToVisibilityPage(){
        await this.selectPageTitleLink('Visibility');
    }

    async navigateToSampleAppPage(){
        await this.selectPageTitleLink('Sample App');
    }

    async navigateToMouseOverPage(){
        await this.selectPageTitleLink('Mouse Over');
    }

    async navigateToNonBreakingSpacePage(){
        await this.selectPageTitleLink('Non-Breaking Space');
    }

    async navigateToOverlappedElementPage(){
        await this.selectPageTitleLink('Overlapped Element');
    }

    async navigateToShadowDomPage(){
        await this.selectPageTitleLink('Shadow DOM');
    }

    async navigateToAlertsPage(){
        await this.selectPageTitleLink('Alerts');
    }

    async navigateToFileUploadPage(){
        await this.selectPageTitleLink('File Upload');
    }

    async navigateToAnimatedButtonPage(){
        await this.selectPageTitleLink('Animated Button');
    }

    async navigateToDisabledInputPage(){
        await this.selectPageTitleLink('Disabled Input');
    }

    async navigateToAutoWaitPage(){
        await this.selectPageTitleLink('Auto Wait');
    }

    private async selectPageTitleLink(name: string){
        await this.page.getByRole('link', {name}).click();
    }

}