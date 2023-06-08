import { Page } from "@playwright/test";
import UIActions from "../../support/playwright/actions/UIActions";
import Assert from "../../support/playwright/asserts/Assert";
import StringUtil from "../../support/utils/StringUtil";
import Constants from "../constants/Constants";

export default class ExampleHomePage {
    constructor(private web: UIActions) { }

    public async goToExamplePage(url: string) {
        await this.web.goto(url);
        await Assert.assertEqualsIgnoreCase(await this.web.getPageTitle(), Constants.EXAMPLE_PAGE_TITLE);
    }

    public async clickMoreInfoLink(linkText: string) {
        await this.web.element(StringUtil.formatString("a:has-text('{0}')", linkText)).click();
        await this.web.waitForPageToLoad();
        await Assert.assertEqualsIgnoreCase(await this.web.getPageTitle(), Constants.IANA_PAGE_TITLE);;
    }

}


