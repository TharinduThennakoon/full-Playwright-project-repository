
const { test, expect } = require('@playwright/test');
const { TranslatorPage } = require('../pages/TranslatorPage');

test.describe('SwiftTranslator Automation Tests', () => {
    let translator;

    const positiveTests = [
        { id: 'Pos_Fun_0001', input: 'mata godak sathutuyi', expected: 'මට ගොඩක් සතුටුයි' },
        { id: 'Pos_Fun_0002', input: 'suba dhavasak', expected: 'සුබ දවසක්' },
        { id: 'Pos_Fun_0003', input: 'oyaa monavadha karanne', expected: 'ඔයා මොනවද කරන්නේ' },
        { id: 'Pos_Fun_0004', input: 'mama vaeda karanavaa', expected: 'මම වැඩ කරනවා' },
        { id: 'Pos_Fun_0005', input: 'karunaakara mata udhav karanna', expected: 'කරුනාකර මට උදව් කරන්න' },
        { id: 'Pos_Fun_0006', input: 'sthutuyi', expected: 'ස්තුටුයි' }, 
        { id: 'Pos_Fun_0007', input: 'gihilla ennam', expected: 'ගිහිල්ල එන්නම්' }, 
        { id: 'Pos_Fun_0008', input: 'api yamu', expected: 'අපි යමු' },
        { id: 'Pos_Fun_0009', input: 'lassana dhavasak', expected: 'ලස්සන දවසක්' },
        { id: 'Pos_Fun_0010', input: 'kohomadha oyaata', expected: 'කොහොමද ඔයාට' }
        
    ];

    const negativeTests = [
        { id: 'Neg_Fun_0001', input: 'Apple', expected: 'Apple' },
        { id: 'Neg_UI_0001', input: '1234567890', expected: '1234567890' },
        { id: 'Neg_UI_0002', input: '@#$%^&*', expected: '@#$%^&*' }
    ];

    test.beforeEach(async ({ page }) => {
        translator = new TranslatorPage(page);
        await translator.navigate();
    });

    for (const data of positiveTests) {
        test(`${data.id}: ${data.input}`, async () => {
            await translator.enterText(data.input);
            await expect(translator.sinhalaOutput).toContainText(data.expected, { timeout: 15000 });
        });
    }

    for (const data of negativeTests) {
        test(`${data.id}: Handling ${data.input}`, async () => {
            await translator.enterText(data.input);
            const output = await translator.getTranslatedText();
            expect(output).toBe(data.expected);
        });
    }

    test('Pos_UI_0001: Real-time output update', async () => {
        await translator.enterText('mama yanavaa'); 
        await expect(translator.sinhalaOutput).toContainText('මම යනවා', { timeout: 15000 });
    });
});