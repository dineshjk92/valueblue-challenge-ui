import { Page } from "@playwright/test";
import CommonConstants from "../../constants/CommonConstants";
import Log from "../../logger/Log";
import UIElementActions from "./UIElementActions";

export default class UIActions {
  private elementAction: UIElementActions;

  constructor(private page: Page) {
    this.elementAction = new UIElementActions(page);
  }

  /**
   * @param selector
   * @returns Returns the instance of UIElements actions
   */
  public element(selector: string) {
    return this.elementAction.setElement(selector);
  }

  /**
   * Navigate to the given URL
   * @param URL
   */
  public async goto(URL: string) {
    Log.info(`Navigate to ${URL}`);
    await this.page.goto(URL, {timeout: CommonConstants.WAIT, waitUntil: "load"});
  }

  /**
   * @returns Returns when the page is completely loaded
   */
  public async waitForPageToLoad() {
    Log.info(`Waiting for load event`);
    await this.page.waitForLoadState("domcontentloaded", { timeout: CommonConstants.WAIT });
  }

  /**
   * @returns Returns the page Title
   */
  public async getPageTitle(): Promise<string> {
    let title: string;
    title = await this.page.title();
    Log.info(`Getting Page Title: ${title}`)
    return title;
  }

}
