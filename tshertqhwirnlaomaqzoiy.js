/* 切韻羅馬字
 *
 * https://zhuanlan.zhihu.com/p/686816944
 *
 * @author Loiyk Durng
 */

if (!音韻地位) return [];

const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);



function 聲母規則() {
    switch (音韻地位.母) {
        case '幫': return 'p';
        case '滂': return 'ph';
        case '並': return 'b';
        case '明': return 'm';
        case '端': return 't';
        case '透': return 'th';
        case '定': return 'qd';
        case '泥': return 'n';
        case '知': return 't';
        case '徹': return 'th';
        case '澄': return 'qd';
        case '孃': return 'n';
        case '精': return 'ts';
        case '清': return 'tsh';
        case '從': return 'qz';
        case '心': return 's';
        case '邪': return 'z';
        case '莊': return 'tc';
        case '初': return 'tch';
        case '崇': return 'qzh';
        case '生': return 'c';
        case '俟': return 'zh';
        case '章': return 'tx';
        case '昌': return 'txh';
        case '船': return 'qj';
        case '書': return 'x';
        case '常': return 'j';
        case '見': return 'k';
        case '溪': return 'kh';
        case '羣': return 'g';
        case '疑': return 'ng';
        case '影': return '';
        case '曉': return 'h';
        case '匣': return 'qh';
        case '云': return 'r';
        case '以': return 'd';
        case '來': return 'l';
        case '日': return 'ny';
        default: throw new Error('無聲母規則');
    }
}

function 韻母規則() {
    // 通攝
    if (is('東韻 一等')) return 'ong';
    if (is('東韻 三等')) return 'eong';
    if (is('冬韻')) return 'oung';
    if (is('鍾韻')) return 'oing';
    // 江攝
    if (is('江韻')) return 'oong';
    // 止攝
    if (is('支韻 合口')) return is('B類 或 云母 或 莊組') ? 'wir' : 'wuu';
    if (is('支韻')) return is('B類 或 云母 或 莊組') ? 'ir' : 'uu';
    if (is('脂韻 合口')) return is('B類 或 云母 或 莊組') ? 'wiry' : 'wuuy';
    if (is('脂韻')) return is('B類 或 云母 或 莊組') ? 'iry' : 'uuy';
    if (is('之韻')) return is('B類 或 云母 或 莊組') ? 'euy' : 'oiy';
    if (is('微韻 開口')) return 'oi';
    if (is('微韻')) return 'ui';
    // 遇攝
    if (is('魚韻')) return 'oe';
    if (is('虞韻')) return 'eo';
    if (is('模韻')) return 'o';
    // 蟹攝
    if (is('齊韻 合口')) return 'wery';
    if (is('齊韻')) return 'ery';
    if (is('祭韻 合口')) return is('B類 或 云母 或 莊組') ? 'wel' : 'wil';
    if (is('祭韻')) return is('B類 或 云母 或 莊組') ? 'el' : 'il';
    if (is('泰韻 合口')) return 'waol';
    if (is('泰韻')) return 'aol';
    if (is('佳韻 合口')) return 'wae';
    if (is('佳韻')) return 'ae';
    if (is('皆韻 合口')) return 'waey';
    if (is('皆韻')) return 'aey';
    if (is('夬韻 合口')) return 'wal';
    if (is('夬韻')) return 'al';
    if (is('咍韻')) return 'oy';
    if (is('灰韻')) return 'ory';
    if (is('廢韻 開口')) return 'oel';
    if (is('廢韻')) return 'eol';
    // 臻攝
    if (is('真韻 合口')) return is('B類 或 云母 或 莊組') ? 'wirn' : 'wuun';
    if (is('真韻')) return is('B類 或 云母 或 莊組') ? 'irn' : 'uun';
    if (is('臻韻')) return 'eun';
    if (is('殷韻')) return 'oin';
    if (is('文韻')) return 'uin';
    if (is('元韻 開口')) return 'oen';
    if (is('元韻')) return 'eon';
    if (is('痕韻')) return 'on';
    if (is('魂韻')) return 'orn';
    // 山攝
    if (is('寒韻 開口')) return 'aon';
    if (is('寒韻')) return 'waon';
    if (is('刪韻 合口')) return 'wan';
    if (is('刪韻')) return 'an';
    if (is('山韻 合口')) return 'waen';
    if (is('山韻')) return 'aen';
    if (is('仙韻 合口')) return is('B類 或 云母 或 莊組') ? 'wen' : 'win';
    if (is('仙韻')) return is('B類 或 云母 或 莊組') ? 'en' : 'in';
    if (is('先韻 合口')) return 'uern';
    if (is('先韻')) return 'ern';
    // 效攝
    if (is('蕭韻')) return 'erw';
    if (is('宵韻')) return is('B類 或 云母 或 莊組') ? 'ew' : 'iw';
    if (is('肴韻')) return 'aw';
    if (is('豪韻')) return 'aow';
    // 果攝
    if (is('歌韻 一等 開口')) return 'ao';
    if (is('歌韻 一等')) return 'wao';
    if (is('歌韻 三等 開口')) return 'uur';
    if (is('歌韻 三等')) return 'wuur';
    // 假攝
    if (is('麻韻 二等 合口')) return 'wa';
    if (is('麻韻 二等')) return 'a';
    if (is('麻韻 三等')) return 'ia';
    // 宕攝
    if (is('陽韻 開口')) return 'uurng';
    if (is('陽韻')) return 'wuurng';
    if (is('唐韻 合口')) return 'waong';
    if (is('唐韻')) return 'aong';
    // 梗攝
    if (is('庚韻 二等 合口')) return 'wang';
    if (is('庚韻 二等')) return 'ang';
    if (is('庚韻 三等 合口')) return 'uiang';
    if (is('庚韻 三等')) return 'iang';
    if (is('耕韻 合口')) return 'waeng';
    if (is('耕韻')) return 'aeng';
    if (is('清韻 合口')) return is('B類 或 云母 或 莊組') ? 'wirng' : 'wuung';
    if (is('清韻')) return is('B類 或 云母 或 莊組') ? 'irng' : 'uung';
    if (is('青韻 合口')) return 'werng';
    if (is('青韻')) return 'erng';
    // 曾攝
    if (is('蒸韻 合口')) return 'uing';
    if (is('蒸韻')) return is('B類 或 云母 或 莊組') ? 'euyng' : 'oiyng';
    if (is('登韻 合口')) return 'uyng';
    if (is('登韻')) return 'ouyng'
    // 流攝
    if (is('尤韻')) return 'eow';
    if (is('侯韻')) return 'ow';
    if (is('幽韻')) return is('B類 或 云母 或 莊組') ? 'euw' : 'oiw';
    // 深攝
    if (is('侵韻')) return is('B類 或 云母 或 莊組') ? 'eum' : 'oim';
    // 咸攝
    if (is('覃韻')) return 'om';
    if (is('談韻')) return 'aom';
    if (is('鹽韻')) return is('B類 或 云母 或 莊組') ? 'em' : 'im';
    if (is('添韻')) return 'erm';
    if (is('咸韻')) return 'aem';
    if (is('銜韻')) return 'am';
    if (is('嚴韻')) return 'oem';
    if (is('凡韻')) return 'eom';
    throw new Error('無韻母規則');
}

function 聲調規則() {
    if (is('平入聲')) return '';
    if (is('上聲')) return '2';
    if (is('去聲')) return '3';
    throw new Error('無聲調規則');
}

let 聲母 = 聲母規則();
let 韻母 = 韻母規則();
let 聲調 = 聲調規則();

if (is('入聲')) {
    if (韻母.endsWith('m')) 韻母 = `${韻母.slice(0, -1)}p`;
    else if (韻母.endsWith('n')) 韻母 = `${韻母.slice(0, -1)}t`;
    else if (韻母.endsWith('ng')) 韻母 = `${韻母.slice(0, -2)}k`;
}



return 聲母 + 韻母 + 聲調;
