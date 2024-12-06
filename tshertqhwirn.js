/* 切韻擬音
 *
 * https://zhuanlan.zhihu.com/p/683231671
 *
 * @author Løik Dɨɤŋ
 */

if (!音韻地位) return [];

const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);



function 聲母規則() {
    if (is('庚韻 二等') && 字頭 === '打') return 't̻';
    if (is('真韻 端母') && 字頭 === '蛭') return 't̻';
    if (is('庚韻 二等') && 字頭 === '冷') return 'l̻';
    if (字頭 === '地') return 'ʔd̻';
    if (字頭 === '𡮞') return 't̻';
    if (is('三等')) {
        switch (音韻地位.母) {
            case '幫': return 'p̃';
            case '滂': return 'p̃h';
            case '並': return 'ʔb̃';
            case '明': return 'm̃';

            case '孃': return 'ȵ';
            case '精': return 'ts̺̃';
            case '清': return 'ts̺̃h';
            case '從': return 'ʔz̺̃';
            case '心': return 's̺̃';
            case '邪': return 'z̺̃';

            case '見': return 'k̃';
            case '溪': return 'k̃h';
            case '羣': return 'ʔg̃';
            case '疑': return 'ŋ̃';
            case '影': return '';
            case '曉': return 'h̃';

            case '云': return 'ʔʁ';

            case '來': return 'ȴ';

            default:
        }
    }
    if (is('二等')) {
        switch (音韻地位.母) {
            case '來': return 'ȴ';
            default:
        }
    }
    switch (音韻地位.母) {
        case '幫': return 'p';
        case '滂': return 'ph';
        case '並': return 'ʔb';
        case '明': return 'm';
        case '端': return 't';
        case '透': return 'th';
        case '定': return 'ʔd';
        case '泥': return 'n';
        case '知': return 'ȶ';
        case '徹': return 'ȶh';
        case '澄': return 'ʔȡ';
        case '孃': return 'ȵ';
        case '精': return 'ts̺';
        case '清': return 'ts̺h';
        case '從': return 'ʔz̺';
        case '心': return 's̺';
        case '邪': return 'z̺';
        case '莊': return 'ts̻';
        case '初': return 'ts̻h';
        case '崇': return 'ʔz̻';
        case '生': return 's̻';
        case '俟': return 'z̻';
        case '章': return 'tʃ';
        case '昌': return 'tʃh';
        case '船': return 'ʔʒ';
        case '書': return 'ʃ';
        case '常': return 'ʒ';
        case '見': return 'k';
        case '溪': return 'kh';
        case '羣': return 'ʔg';
        case '疑': return 'ŋ';
        case '影': return '';
        case '曉': return 'h';
        case '匣': return 'ʔɦ';
        case '云': return 'ʔʁ';
        case '以': return 'd̻';
        case '來': return 'l';
        case '日': return 'ɲ';
        default: throw new Error('無聲母規則');
    }
}

function 韻母規則() {
    // 通攝
    if (is('東韻 一等')) return 'ɔŋ';
    if (is('東韻 三等')) return 'œ̃ŋ';
    if (is('冬韻')) return 'oŋ';
    if (is('鍾韻')) return 'ø̃ŋ';
    // 江攝
    if (is('江韻')) return 'ɒŋ';
    // 止攝
    if (is('支韻 合口')) return is('B類 或 云母 或 莊組') ? 'ʊɘ̃' : 'ʊᵻ̃';
    if (is('支韻')) return is('B類 或 云母 或 莊組') ? 'ɘ̃' : 'ᵻ̃';
    if (is('脂韻 合口')) return is('B類 或 云母 或 莊組') ? 'ʊɘ̃j' : 'ʊᵻ̃j';
    if (is('脂韻')) return is('B類 或 云母 或 莊組') ? 'ɘ̃j' : 'ᵻ̃j';
    if (is('之韻')) return is('B類 或 云母 或 莊組') ? 'ɵ̃j' : 'ø̃j';
    if (is('微韻 開口')) return 'ø̃';
    if (is('微韻')) return 'ʏ̃';
    // 遇攝
    if (is('魚韻')) return 'ɶ̃';
    if (is('虞韻')) return 'œ̃';
    if (is('模韻')) return 'ɔ';
    // 蟹攝
    if (is('齊韻 合口')) return 'ʊɜj';
    if (is('齊韻')) return 'ɜj';
    if (is('祭韻 合口')) return is('B類 或 云母 或 莊組') ? 'ʏẽl' : 'ʏɪ̃l';
    if (is('祭韻')) return is('B類 或 云母 或 莊組') ? 'ẽl' : 'ɪ̃l';
    if (is('泰韻 合口')) return 'ʊʌl';
    if (is('泰韻')) return 'ʌl';
    if (is('佳韻 合口')) return 'ʊæ';
    if (is('佳韻')) return 'æ';
    if (is('皆韻 合口')) return 'ʊæj';
    if (is('皆韻')) return 'æj';
    if (is('夬韻 合口')) return 'ʊɑl';
    if (is('夬韻')) return 'ɑl';
    if (is('咍韻')) return 'ɔj';
    if (is('灰韻')) return 'ɞj';
    if (is('廢韻 開口')) return 'ɶ̃l';
    if (is('廢韻')) return 'œ̃l';
    // 臻攝
    if (is('真韻 合口')) return is('B類 或 云母 或 莊組') ? 'ʊɘ̃n' : 'ʊᵻ̃n';
    if (is('真韻')) return is('B類 或 云母 或 莊組') ? 'ɘ̃n' : 'ᵻ̃n';
    if (is('臻韻')) return 'ɵ̃n';
    if (is('殷韻')) return 'ø̃n';
    if (is('文韻')) return 'ʏ̃n';
    if (is('元韻 開口')) return 'ɶ̃n';
    if (is('元韻')) return 'œ̃n';
    if (is('痕韻')) return 'ɔn';
    if (is('魂韻')) return 'ɞn';
    // 山攝
    if (is('寒韻 開口')) return 'ʌn';
    if (is('寒韻')) return 'ʊʌn';
    if (is('刪韻 合口')) return 'ʊɑn';
    if (is('刪韻')) return 'ɑn';
    if (is('山韻 合口')) return 'ʊæn';
    if (is('山韻')) return 'æn';
    if (is('仙韻 合口')) return is('B類 或 云母 或 莊組') ? 'ʏẽn' : 'ʏɪ̃n';
    if (is('仙韻')) return is('B類 或 云母 或 莊組') ? 'ẽn' : 'ɪ̃n';
    if (is('先韻 合口')) return 'uɜn';
    if (is('先韻')) return 'ɜn';
    // 效攝
    if (is('蕭韻')) return 'ɜʊ';
    if (is('宵韻')) return is('B類 或 云母 或 莊組') ? 'ẽʊ' : 'ɪ̃ʊ';
    if (is('肴韻')) return 'ɑʊ';
    if (is('豪韻')) return 'ʌʊ';
    // 果攝
    if (is('歌韻 一等 開口')) return 'ʌ';
    if (is('歌韻 一等')) return 'ʊʌ';
    if (is('歌韻 三等 開口')) return 'ᵻ̃ɤ';
    if (is('歌韻 三等')) return 'ᵿ̃ɤ';
    // 假攝
    if (is('麻韻 二等 合口')) return 'ʊɑ';
    if (is('麻韻 二等')) return 'ɑ';
    if (is('麻韻 三等')) return 'ɪ̃ɑ';
    // 宕攝
    if (is('陽韻 開口')) return 'ᵻ̃ɤŋ';
    if (is('陽韻')) return 'ᵿ̃ɤŋ';
    if (is('唐韻 合口')) return 'ʊʌŋ';
    if (is('唐韻')) return 'ʌŋ';
    // 梗攝
    if (is('庚韻 二等 合口')) return 'ʊɑŋ';
    if (is('庚韻 二等')) return 'ɑŋ';
    if (is('庚韻 三等 合口')) return 'ʏ̃ɑŋ';
    if (is('庚韻 三等')) return 'ɪ̃ɑŋ';
    if (is('耕韻 合口')) return 'ʊæŋ';
    if (is('耕韻')) return 'æŋ';
    if (is('清韻 合口')) return is('B類 或 云母 或 莊組') ? 'ʊɘ̃ŋ' : 'ʊᵻ̃ŋ';
    if (is('清韻')) return is('B類 或 云母 或 莊組') ? 'ɘ̃ŋ' : 'ᵻ̃ŋ';
    if (is('青韻 合口')) return 'ʊɜŋ';
    if (is('青韻')) return 'ɜŋ';
    // 曾攝
    if (is('蒸韻 合口')) return 'ʏ̃ɪŋ';
    if (is('蒸韻')) return is('B類 或 云母 或 莊組') ? 'ɵ̃ɪŋ' : 'ø̃ɪŋ';
    if (is('登韻 合口')) return 'ʊɪŋ';
    if (is('登韻')) return 'oɪŋ';
    // 流攝
    if (is('尤韻')) return 'œ̃ʊ';
    if (is('侯韻')) return 'ɔʊ';
    if (is('幽韻')) return is('B類 或 云母 或 莊組') ? 'ɵ̃ʊ' : 'ø̃ʊ';
    // 深攝
    if (is('侵韻')) return is('B類 或 云母 或 莊組') ? 'ɵ̃m' : 'ø̃m';
    // 咸攝
    if (is('覃韻')) return 'ɔm';
    if (is('談韻')) return 'ʌm';
    if (is('鹽韻')) return is('B類 或 云母 或 莊組') ? 'ẽm' : 'ɪ̃m';
    if (is('添韻')) return 'ɜm';
    if (is('咸韻')) return 'æm';
    if (is('銜韻')) return 'ɑm';
    if (is('嚴韻')) return 'ɶ̃m';
    if (is('凡韻')) return 'œ̃m';
    throw new Error('無韻母規則');
}

function 聲調規則() {
    if (is('平聲')) return 'ˇ';
    if (is('上聲')) return 'ˊ';
    if (is('去聲')) return 'ˆ';
    if (is('入聲')) return '';
    throw new Error('無聲調規則');
}

let 聲母 = 聲母規則();
let 韻母 = 韻母規則();
let 聲調 = 聲調規則();

if (is('入聲')) {
    if (韻母.endsWith('m')) 韻母 = `${韻母.slice(0, -1)}p`;
    else if (韻母.endsWith('n')) 韻母 = `${韻母.slice(0, -1)}t`;
    else if (韻母.endsWith('ŋ')) 韻母 = `${韻母.slice(0, -1)}k`;
}



return 聲母 + 韻母 + 聲調;
