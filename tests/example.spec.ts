import { test, expect } from '@playwright/test';
import { clear } from 'node:console';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Pos_Fun_0001 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama kadeeta yanavaa.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මම කඩේට යනවා.')).toBeVisible({ timeout: 10000 });
  });

test('Pos_Fun_0002 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('apee amma kivva hari, paadam kaLee naeththam apee lakuNu adu veevi.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අපේ අම්ම කිව්ව හරි, පාඩම් කළේ නැත්තම් අපේ ලකුණු අඩු වේවි.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0003 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oya enavaanam mama enne naee.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('ඔය එනවානම් මම එන්නෙ නෑ.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0004 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oyaa kavadhdha rata yanna hithan inne?', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('ඔයා කවද්ද රට යන්න හිතන් ඉන්නේ?')).toBeVisible({ timeout: 10000 });
  });

   test('Pos_Fun_0005 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama yanne naehae.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මම යන්නෙ නැහැ.')).toBeVisible({ timeout: 10000 });
  });

   test('Pos_Fun_0006 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('Saadharayen piLigannavaa!', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('සාදරයෙන් පිළිගන්නවා!')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0007 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('karuNaakaralaa mata vathura tikak dhenna puLuvandha?', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('කරුණාකරලා මට වතුර ටිකක් දෙන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0008 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mata harima bayayi.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මට හරිම බයයි.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0009 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('kaalaa enna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('කාලා එන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0010 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('hemin hemin', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('හෙමින් හෙමින්')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0011 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama pereedhaa kadee giyaa.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මම පෙරේදා කඩේ ගියා.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0012 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mata kaeema epaa.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මට කෑම එපා.')).toBeVisible({ timeout: 10000 });
  });

    test('Pos_Fun_0013 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('api kamu.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අපි කමු.')).toBeVisible({ timeout: 10000 });
  });

      test('Pos_Fun_0014 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('puLuvannam oyaa enna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('පුළුවන්නම් ඔයා එන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0015 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mata whatsapp paNividayak yomu karanna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මට whatsapp පණිවිඩයක් යොමු කරන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0016 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('api jaffna yanavaa.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අපි jaffna යනවා.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0017 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mata ikmanin OTP eka evanna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මට ඉක්මනින් OTP එක එවන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0018 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('meeka haridha?', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මේක හරිද?')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0019 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('Rs. 6000 k gevanna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('Rs. 6000 ක් ගෙවන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0020 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('8.30 AM enna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('8.30 AM එන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0021 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('2026/02/01 dhina paemiNenna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('2026/02/01 දින පැමිණෙන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0022 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('meeke dhiga 30 cm yi.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මේකෙ දිග 30 cm යි.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0023 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mee dhavasvala paandharata harima siithalayi. ehema venne indhiyaave idhan siithala vaathaya apee ratata ena ekayi. ratee samahara thaenvalata malthuhinath vaetenava.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මේ දවස්වල පාන්දරට හරිම සීතලයි. එහෙම වෙන්නෙ ඉන්දියාවෙ ඉදන් සීතල වාතය අපේ රටට එන එකයි. රටේ සමහර තැන්වලට මල්තුහිනත් වැටෙනව.')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0024 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('vaedee supiri machan!!', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('වැඩේ සුපිරි මචන්!!')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0001 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('aluwa kaeellak kanna.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අලුව කෑල්ලක් කන්න.')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0002 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('apita wathura kapalaa.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අපිට වතුර කපලා.')).toBeVisible({ timeout: 10000 });
  });
  
  test('Neg_Fun_0003 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('matakaeemaepaa', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('මට කෑම එපා')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0004 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('trein eka kiiyatadha?', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('train එක කීයටද?')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0005 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oyaa har*ima lassanayi.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('ඔයා හරිම ලස්සනයි.')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0006 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oapi nuvaraeLiya yamu.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අපි නුවරඑළිය යමු.')).toBeVisible({ timeout: 10000 });
  });


  test('Neg_Fun_0007 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('api   yamu.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අපි යමු.')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0008 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('ara mokkdh?', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අර මොකක්ද?')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0009 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('ara ganga lassanayi', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අර ගඟ ලස්සනයි')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_00010 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('api gedhara yami.', { delay: 100 });

    // Wait for the translation to appear in the output area
    await expect(page.getByText('අපි ගෙදර යමු.')).toBeVisible({ timeout: 10000 });
  });


  

