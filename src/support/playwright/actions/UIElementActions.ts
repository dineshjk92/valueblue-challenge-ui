import { Locator, Page } from "@playwright/test";
import CommonConstants from "../../constants/CommonConstants";
import Log from "../../logger/Log";

export default class UIElementActions {
  protected locator: Locator;
  protected selector: string;

  constructor(private page: Page) { }

  /**
   * Returns the first locator
   * @returns
   */
  public getLocator(): Locator {
    return this.locator.first();
  }

  /**
   * Sets the locator using the selector * 
   * @param selector 
   * @returns
   */
  public setElement(selector: string): UIElementActions {
    this.selector = selector;
    this.locator = this.page.locator(this.selector);
    return this;
  }

  /**
   * Click on element
   * @returns
   */
  public async click() {
    Log.info(`Clicking element`);
    await this.getLocator().click();
    return this;
  }

  /**
   * wait for element to be visible
   * @returns
   */
  public async waitTillVisible() {
    Log.info(`Wait for element to be visible in DOM`);
    await this.getLocator().waitFor({ state: "visible", timeout: CommonConstants.WAIT });
    return this;
  }

  /**
   * Gets the text content
   * @returns
   */
  public async getTextContent(): Promise<string> {
    Log.info(`Getting text content of element`);
    await this.waitTillVisible();
    return (await this.getLocator().textContent()).trim();
  }
   
}
