import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { stat } from "fs";

type ElementType = 'button' | 'input' | 'textarea' | 'select' | 'label';
type ElementProperty  = 'visible' | 'enabled' | 'editable' | 'onTop' | 'nonZeroSize';

export class AutoWaitPage extends BasePage{

    private readonly apply3sButton: Locator;
    private readonly apply5sButton: Locator;
    private readonly apply10sButton: Locator;
    private readonly visibleCheckbox: Locator;
    private readonly enabledCheckbox: Locator;
    private readonly editableCheckbox: Locator;
    private readonly onTopCheckbox: Locator;
    private readonly nonZeroSizeCheckbox: Locator;
    readonly testButton: Locator;
    readonly statusLabel: Locator;
    private readonly inputField: Locator;
    private readonly elementTypeSelect: Locator;
    private readonly itemMenu: Locator;
    readonly labelText: Locator;


    constructor(page: Page){
        super(page);
        this.apply3sButton = this.page.getByRole('button', {name: 'Apply 3s'});
        this.apply5sButton = this.page.getByRole('button', {name: 'Apply 5s'});
        this.apply10sButton = this.page.getByRole('button', {name: 'Apply 10s'});
        this.visibleCheckbox = this.page.getByRole('checkbox', {name: 'visible'});
        this.enabledCheckbox = this.page.getByRole('checkbox', {name: 'enabled'});
        this.editableCheckbox = this.page.getByRole('checkbox', {name: 'editable'});
        this.onTopCheckbox = this.page.getByRole('checkbox', {name: 'On Top'});
        this.nonZeroSizeCheckbox = this.page.getByRole('checkbox', {name: 'Non Zero Size'});
        this.testButton = this.page.getByRole('button', {name: 'Button'}); 
        this.statusLabel = this.page.locator('#opstatus');
        this.inputField = this.page.locator('.form-control');
        this.labelText = this.page.getByText('This is a Label');
        this.elementTypeSelect = this.page.getByLabel('Choose an element type:');
        this.itemMenu = this.page.locator('#element-container .form-select')
       
    }


/**
 * Dynamic method to configure delay time, property to test and assertion according to selected property
 * @param elementType button | input | textarea | select | label
 * @param property visible | enabled | editable | onTop | nonZeroSize
 * @param seconds delay 3 | 5 | 10 seconds
 */
    async configurePropertyAndDelay(
        elementType: ElementType,
        property: ElementProperty,
        seconds: 3 | 5 | 10
        ) {

        await this.chooseElementType(elementType);

        const propertyCheckbox = this.getPropertyCheckbox(property);
        await propertyCheckbox.uncheck();
        await expect(propertyCheckbox).not.toBeChecked();

        await this.applyDurationSettings(seconds);

        const target = this.getTargetLocator(elementType);

        switch (property) {
            case 'visible':
                await expect(target).toBeHidden();
                break;

            case 'enabled':
                await expect(target).not.toBeEnabled();
                break;

            case 'editable':
                if (elementType === 'input' || elementType === 'textarea') {
                await expect(target).not.toBeEditable();
                }
                break;

            case 'onTop':
                await expect(target).not.toBeVisible(); 
                break;

            case 'nonZeroSize':
                await expect(target).toBeHidden();
                break;
        }
 
    }

    async clickTargetButton(){
        await this.testButton.click();
    }

    async inputTextOnField(text: string){
        await this.inputField.fill(text)
        await this.inputField.press('Enter');
        expect(this.inputField).toHaveValue(text);
    }

    async selectItemfromMenu(item: 'Item 1' | 'Item 2' | 'Item 3'){
        await this.itemMenu.click();
        await this.itemMenu.selectOption({ label: item });
        await expect(this.statusLabel).toHaveText(`Selected: ${item}`);

    }

    private getTargetLocator(elementType: ElementType): Locator {
        switch (elementType) {
            case 'button':
                return this.testButton;
            case 'input':
                return this.inputField;
            case 'textarea':
                return this.inputField;
            case 'select':
                return this.itemMenu;
            case 'label':
                return this.labelText;
        }
    }

    async chooseElementType(type: 'button' | 'input' | 'textarea' | 'select' | 'label'){
        await this.elementTypeSelect.selectOption(type);
    }

    private getPropertyCheckbox(property: ElementProperty): Locator {
        switch (property) {
            case 'visible':
                return this.visibleCheckbox;
            case 'enabled':
                return this.enabledCheckbox;
            case 'editable':
                return this.editableCheckbox;
            case 'onTop':
                return this.onTopCheckbox;
            case 'nonZeroSize':
                return this.nonZeroSizeCheckbox;
        }
    }
   
    async applyDurationSettings(seconds: 3 | 5 |10) {
        if (seconds === 3) await this.apply3sButton.click();
        if (seconds === 5) await this.apply5sButton.click();
        if (seconds === 10) await this.apply10sButton.click();
    }

}