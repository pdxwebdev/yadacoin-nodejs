var yadaWallet = require('./lib/wallet');
var Wallet = new yadaWallet();

// examples

Wallet.create_wallet('yadacoin_wallet').then(function(result){
    console.log(result);
});

Wallet.open_wallet('yadacoin_wallet').then((result) => {
    console.log(result);
});

Wallet.address().then((result) => {
    console.log(result);
});

Wallet.balance().then((result) => {
    console.log(result);
});
