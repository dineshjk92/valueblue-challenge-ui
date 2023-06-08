import UIActions from "../../support/playwright/actions/UIActions";
import { Browser } from "@playwright/test";
import WebBrowser from "../../support/browser/Browser";

let browser: Browser;

export default class CommonPage {
    constructor(private web: UIActions) { }
    
    public async startBrowser() {
        browser = await WebBrowser.launch();
    }

}