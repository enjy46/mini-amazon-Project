import formatCurrency from "../scripts/utils/money.js";

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
    console.log('✓ 2095 cents = $20.95 → works with normal integer input');
} else {
    console.log('failed');
}

if (formatCurrency(0) === '0.00') {
    console.log('passed');
    console.log('✓ 0 cents = $0.00 → works with zero input');
} else {
    console.log('failed');
}
