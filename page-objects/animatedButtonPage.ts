import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { WebHelper } from "../utils/fileHelpers";

export class AnimatedButtonPage extends BasePage{

    private readonly startAnimationButton: Locator;
    private readonly movingTargetButton: Locator;
    private readonly statusLabel: Locator;
    private readonly helper: WebHelper;

    constructor(page: Page){
        super(page);
        this.startAnimationButton = this.page.getByRole('button', {name: "Start Animation"});
        this.movingTargetButton = this.page.getByRole('button').filter({ hasText: /Moving Target/ });
        this.statusLabel = this.page.locator('#opstatus');
        this.helper = new WebHelper();
    }

    async startAnimationWaitForCompletionAndClickMovingTarget(){
        await this.startAnimationButton.click();

        await expect(this.statusLabel).toHaveText('Animating the button...');

        await this.helper.waitForText(this.statusLabel, 'Animation done');
        await expect(this.movingTargetButton).not.toHaveClass(/spin/);

        await this.movingTargetButton.click();
        await this.helper.waitForText(this.statusLabel, `Moving Target clicked. It's class name is 'btn btn-primary'`);

    }


}