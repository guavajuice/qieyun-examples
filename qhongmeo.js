/* 推導《洪武正韻》擬音
 *
 * 推導依據：申叔舟《洪武正韻譯訓》
 *
 * @author escapism
 */

// 代碼中的音韻表達式使用了全角半角空格用於對齊，需要進行移除
const is = (x) => 音韻地位.屬於(x.replace(/ +/g, ' ').replace(/　/g, '').trim());

// I. 選項

if (!音韻地位) return [
  ['注音方式：', [1, '轉寫', '譯訓']], // 譯訓包含古諺文字型，可能無法正常顯示
  ['聲調記法：', [2, '五度標記', '附加標記']]
];

for (var key in 選項) {
  if (key.includes('：')) 選項[key.slice(0, -1)] = 選項[key]; // 去除冒號，方便下面代碼中引用
}

// II. 推導規則

function 初聲規則(俗) {
  if (is('幫滂母 東鍾微虞廢文元陽尤凡韻 三等')) return 'f';
  if (is('並　母 東鍾微虞廢文元陽尤凡韻 三等')) return 'fʱ';
  if (is('明　母 　　微虞　文元陽　凡韻 三等')) return 'ʋ';
 
  if (is('幫　母')) return 'p';
  if (is('滂　母')) return 'pʰ';
  if (is('並　母')) return is('平聲') ? 'pʱ' : 'b';
  if (is('明　母')) return 'm';
 
  if (is('知　母') && '爹打'.includes(字頭)) return 't'; // 爹、打小韻
  if (is('端　母')) return 't';
  if (is('透　母')) return 'tʰ';
  if (is('定　母')) return is('平聲') ? 'tʱ' : 'd';
  if (is('泥孃母')) return 'n';
  if (is('來　母')) return 'l';
 
  if (is('精　母')) return 'ts';
  if (is('清　母')) return 'tsʰ';
  if (is('從　母')) return is('平聲') ? 'tsʱ' : 'dz';
  if (is('心　母')) return 's';
  if (is('邪　母')) return 'sʱ';
 
  if (is('莊　母')) return 'tʂ';
  if (is('初　母')) return 'tʂʰ';
  if (is('崇　母')) return is('平聲') ? 'tʂʱ' : 'dʐ';
  if (is('生　母')) return 'ʂ';
  if (is('俟　母')) return 'ʂʱ';
  
  if (is('知章母')) return 'tʃ';
  if (is('徹昌母')) return 'tʃʰ';
  if (is('澄　母')) return is('平聲') ? 'tʃʱ' : 'dʒ';
  if (is('書　母')) return 'ʃ';
  if (is('常船母')) return is('平聲') ? 'tʃʱ' : 'ʃʱ';
  if (is('日　母')) return 'ɹ';
 
  if (is('見　母')) return 'k';
  if (is('溪　母')) return 'kʰ';
  if (is('羣　母')) return is('平聲') ? 'kʱ' : 'g';
  if (is('疑　母')) return 俗 ? '0' : 'ŋ';
  if (is('影　母')) return 'ʔ';
  if (is('曉　母')) return 'x';
  if (is('匣　母')) return 'xʱ';
  if (is('云　母')) return is('東韻 三等 舒聲') ? 'xʱ' : '0';
  if (is('以　母')) return is('祭韻 合口') && 俗 ? 'ɹ' : '0';
 
  throw new Error('無初聲規則');
}

function 中聲規則(俗1, 俗2) {
  // 通攝
  if (is('通攝')) return is('一等 或 幫莊組 或 來母') ? 'u' : 'y';
 
  // 江攝
  if (is('江韻')) return is('牙喉音') ? 'ja' : is('幫組') ? 'a' : 'wa';
 
  // 止攝
  if (is('止攝 合口')) return 'uj';
  if (is('止攝') && 俗1) return is('精組') ? 'ɹ̩' : is('莊章組 或 日母') ? 'ɻ̍' : 'i';
  if (is('止攝')) return is('精莊組') ? 'ɨ' : 'i';
 
  // 遇攝
  if (is('遇攝')) return is('一等 或 幫組') ? 'u' : 'y';
 
  // 蟹攝
  if (is('泰咍灰韻')) return is('開口') ? 'aj' : 'uj';
  if (is('佳韻 牙喉音')) return is('合口') ? 'wa' : 'jaj';
  if (is('佳韻')) return is('合口') ? 'waj' : 'aj';
  if (is('皆夬韻')) return is('合口') ? 'waj' : is('牙喉音') ? 'jaj' : 'aj';
  if (is('祭廢韻')) return is('合口') ? 'uj' : is('知精組') && !俗1 ? 'jɛj' : 'i';
  if (is('齊韻')) return is('合口') ? 'uj' : is('幫組') || 俗1 ? 'i' : 'jɛj';
 
  // 臻攝
  if (is('真臻韻')) return is('合口') ? is('莊組') && 俗1 ? 'waj' : 'y' : 'i';
  if (is('痕韻')) return is('牙喉音 或 入聲') ? 'ə' : 'u';
  if (is('魂韻')) return 'u';
  if (is('文韻')) return is('牙喉音') ? 'y' : 'u';
  if (is('殷韻')) return 'i';
  if (is('元韻')) return is('合口') ? 'ɥɛ' : is('幫組') ? 'a' : 'jɛ';
 
  // 山攝
  if (is('寒韻 開口')) return is('牙喉音') && (is('入聲') || !俗1) ? 'ɔ' : 'a';
  if (is('寒韻')) return is('幫組 舒聲') && 俗1 ? 'ɔ' : 'wɔ';
  if (is('刪山韻')) return is('合口') ? 'wa' : is('牙喉音') ? 'ja' : 'a';
  if (is('仙先韻')) return is('合口') ? 'ɥɛ' : 'jɛ';
 
  // 效攝
  if (is('豪韻')) return 'ɑ';
  if (is('肴韻')) return is('牙喉音') ? 'ja' : 'a';
  if (is('蕭宵韻')) return 俗1 ? 'ja' : 'jɛ';
 
  // 果攝
  if (is('歌韻 一等')) return is('合口') ? 'wɔ' : 'ɔ';
  if (is('歌韻 三等')) return is('合口') ? 'ɥɛ' : 'jɛ';
 
  // 假攝
  if (is('麻韻')) return is('三等') ? 'jɛ' : is('合口') ? 'wa' : is('牙喉音') ? 'ja' : 'a';
 
  // 宕攝
  if (is('唐韻')) return is('合口') ? 'wa' : 'a';
  if (is('陽韻')) return is('幫組') ? 'a' : is('合口') || (is('莊組') && 俗1) ? 'wa' : 'ja';
 
  // 梗攝
  if (is('梗攝 二等')) return is('合口') ? 'uj' : is('牙喉音 舒聲') && 俗2 ? 'i' : 'əj';
  if (is('梗攝')) return is('合口') ? 'yj' : 'i';
 
  // 曾攝
  if (is('登韻')) return is('合口') ? 'uj' : 'əj';
  if (is('蒸韻')) return is('合口') ? 'yj' : 'i';
 
  // 流攝
  if (is('侯韻')) return 'ə';
  if (is('尤韻')) return is('幫組') ? 'ə' : 'i';
  if (is('幽韻')) return 'i';
 
  // 深攝
  if (is('侵韻')) return 'i';
 
  // 咸攝
  if (is('覃談韻')) return is('牙喉音 入聲') && 俗1 ? 'ɔ' : 'a';
  if (is('咸銜韻')) return is('牙喉音') ? 'ja' : 'a';
  if (is('嚴凡韻')) return is('牙喉音') ? 'jɛ' : is ('幫組')? 'a' : 'ɥɛ';
  if (is('鹽添韻')) return 'jɛ';
 
  throw new Error('無中聲規則');
}

function 終聲規則() {
  if (is('止遇蟹果假攝')) return '';
  if (is('效流攝')) return 'w';
  if (is('深咸攝')) return is('入聲') ? 'p' : 'm';
  if (is('臻山攝')) return is('入聲') ? 't' : 'n';
  if (is('通江宕梗曾攝')) return is('入聲') ? 'k' : 'ŋ';
  throw new Error('無終聲規則');
}

function 聲調規則() {
  if (is('平聲')) return is('全清 或 次清') ? '清平' : '濁平';
  if (is('上聲')) return is('全濁') ? '去聲' : '上聲';
  if (is('去聲')) return '去聲';
  if (is('入聲')) return '入聲';
  throw new Error('無聲調規則');
}

function 後處理(n, 初聲, 中聲) {
  if (is('知組 二等') || ['ɻ̍', 'ɨ', 'uj'].includes(中聲)) 初聲 = {tʃ: 'tʂ', tʃʰ: 'tʂʰ', tʃʱ: 'tʂʱ', dʒ: 'dʐ', ʃ: 'ʂ', ʃʱ: 'ʂʱ', ɹ: 'ɻ'} [初聲] || 初聲;
  if (is('莊組')) {
    if (中聲 === 'i') 中聲 = 'ə';
    if (中聲 === 'y') 中聲 = 'u';
    if (中聲[0] === 'j') 中聲 = 中聲.slice(1);
    if (中聲[0] === 'ɥ') 中聲 = 'w' + 中聲.slice(1);
    if (is('入聲') && 中聲 === 'ə') 中聲 = 'ɨ';
  }
  return n ? 初聲 : 中聲;
}

let 正初聲 = 後處理(1, 初聲規則(0), 中聲規則(0, 0));
let 俗初聲 = 後處理(1, 初聲規則(1), 中聲規則(1, 0));

let 正中聲 = 後處理(0, 初聲規則(0), 中聲規則(0, 0));
let 俗中聲1 = 後處理(0, 初聲規則(1), 中聲規則(1, 0));
let 俗中聲2 = 後處理(0, 初聲規則(1), 中聲規則(0, 1));

let 正終聲 = 終聲規則();
let 俗終聲 = is('入聲') ? is('江宕攝') ? 'wʔ' : 'ʔ' : is('深咸攝') ? 'n' : 終聲規則();

if (is('幫組') && 正中聲 === 'uj') 俗中聲1 = 'əj';
if (is('幫組') && 正中聲 === 'u' && 正終聲 === 'n') 俗中聲1 = 'ə';
if (正中聲 === 'jaj') 俗中聲1 = 'jɛj';
if (正中聲[1] === 'j' && 正終聲 === 'ŋ') 俗中聲1 = 正中聲[0];
if (俗中聲2 === 正中聲) 俗中聲2 = 俗中聲1;

// III. 輔助函數

//   0. 俗音

function vulgar(正音, 俗音1, 俗音2) {
  if (正音 === 俗音1) return 正音;
  else if (俗音1 === 俗音2) return '(' + 俗音1 + ')\n' + 正音;
  else return '(' + 俗音1 + '/' + 俗音2 + ')\n' + 正音;
}

//   1. 轉寫

const 五度標調 = {
  '清平': '˦',
  '濁平': '˨˩',
  '上聲': '˦˨',
  '去聲': '˨˦',
  '入聲': '˨˧',
};
const 附標標調 = {
  '清平': '́',
  '濁平': '̀',
  '上聲': '̂',
  '去聲': '̌',
  '入聲': '̆',
};

function ipa(初聲, 中聲, 終聲) {
  let 介音 = {j: 'j', w: 'w', ɥ: 'ɥ'} [中聲[0]] || '';
  if (初聲 === 'ɻ' && 中聲 === 'ɻ̍') 初聲 = '';
  if (初聲 === '0') 初聲 = '';
  if (['j', 'w', 'ɥ'].includes(中聲[0])) 中聲 = 中聲.slice(1);
  if (中聲 === 'a' && ['w', 'ŋ'].includes(終聲[0])) 中聲 = 'ɑ';
  if (中聲 === 'a' && 終聲 === 'k') 中聲 = 'ɒ';
  if (選項.聲調記法 === '五度標記') return 初聲 + 介音 + 中聲 + 終聲 + 五度標調[聲調規則()];
  else return 初聲 + 介音 + 中聲[0] + 附標標調[聲調規則()] + 中聲.slice(1) + 終聲;
}

//   2. 譯訓

function hangul(初聲, 中聲, 終聲) {
  初聲 = {
    p:  'ᄇ', pʰ:  'ᄑ', pʱ:  'ᄈ', b:  'ᄈ', m: 'ᄆ',
    f:  'ᄫ',       　   fʱ:  'ᄬ',      　       　   ʋ: 'ᄝ',
    t:  'ᄃ', tʰ:  'ᄐ', tʱ:  'ᄄ', d:  'ᄄ', n: 'ᄂ', l: 'ᄅ',
    ts: 'ᅎ', tsʰ: 'ᅔ', tsʱ: 'ᅏ', dz: 'ᅏ',
    s:  'ᄼ',       　   sʱ:  'ᄽ',
    tʂ: 'ᅐ', tʂʰ: 'ᅕ', tʂʱ: 'ᅑ', dʐ: 'ᅑ',
    ʂ:  'ᄾ',       　   ʂʱ:  'ᄿ',      　       　   ɻ: 'ᅀ',
    tʃ: 'ᅐ', tʃʰ: 'ᅕ', tʃʱ: 'ᅑ', dʒ: 'ᅑ',
    ʃ:  'ᄾ',       　   ʃʱ:  'ᄿ',      　       　   ɹ: 'ᅀ', 
    k:  'ᄀ', kʰ:  'ᄏ', kʱ:  'ᄁ', g:  'ᄁ', ŋ: 'ᅌ',
    x:  'ᄒ',       　   xʱ:  'ᅘ',
    ʔ:  'ᅙ',       　         　        　       　   0: 'ᄋ',
  } [初聲];
  中聲 = {
    a:  'ᅡ', aj:  'ᅢ', ɔ:   'ᅥ',       　         　   ɨ: 'ᅳ', ə: 'ᅳ', əj: 'ᅴ', ɹ̩:  'ᅳᇫ', ɻ̍:  'ᅳᇫ',
    wa: 'ᅪ', waj: 'ᅫ', wɔ:  'ᅯ',       　         　        　  i: 'ᅵ',
    ja: 'ᅣ', jaj: 'ᅤ',       　   jɛ:  'ᅧ', jɛj: 'ᅨ',      　  u: 'ᅮ', uj: 'ᅱ',
         　         　         　   ɥɛ:  'ᆑ',       　        　  y: 'ᅲ', yj: 'ᆔ',
  } [中聲];
  終聲 = {
    w:  'ᇢ', m: 'ᆷ', n: 'ᆫ', ŋ: 'ᇰ',
    wʔ: 'ᇢ', p: 'ᆸ', t: 'ᆮ', k: 'ᆨ', ʔ: 'ᇹ',
  } [終聲] || '';
  let 音節 = 初聲 + 中聲 + 終聲;
  return is('去入聲') ? 音節 + '〮' : is('上聲') ? 音節 + '〯' : 音節;
}

// IV. 輸出

if (選項.注音方式 === '轉寫') return vulgar(ipa(正初聲, 正中聲, 正終聲), ipa(俗初聲, 俗中聲1, 俗終聲), ipa(俗初聲, 俗中聲2, 俗終聲));
else return vulgar(hangul(正初聲, 正中聲, 正終聲), hangul(俗初聲, 俗中聲1, 俗終聲), hangul(俗初聲, 俗中聲2, 俗終聲));