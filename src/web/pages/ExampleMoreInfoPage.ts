import UIActions from "../../support/playwright/actions/UIActions";
import StringUtil from "../../support/utils/StringUtil";
import Assert from "../../support/playwright/asserts/Assert";

export default class ExampleMoreInfoPage {
    constructor(private web: UIActions) { }
    
    public async verifyLinksPresent(linkText: string) {
        await this.web.element(StringUtil.formatString("a:has-text('{0}')", linkText)).waitTillVisible();
    }

    public async verifyLinkPresentInDomainNames(domainBoxName: string, listName: string, listIndex: string) {
        const actualMsg = await this.web.element(
            StringUtil.formatString("(//h2[text()='{0}']//parent::div/ul/li/a)[{1}]", domainBoxName, listIndex))
            .getTextContent();
        await Assert.assertEquals(actualMsg, listName); 
    }
}


