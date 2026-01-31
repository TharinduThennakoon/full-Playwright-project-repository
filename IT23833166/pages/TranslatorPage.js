
class TranslatorPage {
    constructor(page) {
        this.page = page;
        // Locators
        this.singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
        this.sinhalaOutput = page.locator('div.whitespace-pre-wrap.bg-slate-50');
    }

    async navigate() {
        await this.page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'domcontentloaded',
            timeout: 60000 
        });
    }

    async enterText(text) {
        await this.singlishInput.waitFor({ state: 'visible' });
        await this.singlishInput.clear();
        
        await this.singlishInput.pressSequentially(text, { delay: 60 });
    }

    async getTranslatedText() {
       
        await this.page.waitForFunction(() => {
            const div = document.querySelector('div.whitespace-pre-wrap.bg-slate-50');
            return div && div.innerText.trim().length > 0;
        }, { timeout: 10000 }).catch(() => {}); 

        const text = await this.sinhalaOutput.innerText();
        return text.trim();
    }
}

module.exports = { TranslatorPage };