import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { WebHelper } from "../utils/fileHelpers";

export class DisabledInputPage extends BasePage{

    private readonly enableButton: Locator;
    private readonly inputField: Locator;
    private readonly statusLabel: Locator;
    private readonly helper: WebHelper;

    constructor(page: Page){
        super(page);
        this.enableButton = this.page.getByRole('button', {name: 'Enable Edit Field with 5 seconds delay'});
        this.inputField = this.page.getByRole('textbox', {name: 'Edit Field'});
        this.statusLabel = this.page.locator('#opstatus');
        this.helper = new WebHelper();
    }

    async clickOnButtonWaitForFieldToBeEnabledAndInputText(testText: string){
        await this.enableButton.click();

        await expect(this.statusLabel).toHaveText('Input Disabled...');
        await expect(this.inputField).not.toBeEnabled(); 
        await this.helper.waitForEnabled(this.inputField);

        await expect(this.statusLabel).toHaveText('Input Enabled...');
        await this.inputField.fill(testText);

        await expect(this.inputField).toHaveValue(testText); 
    }


}