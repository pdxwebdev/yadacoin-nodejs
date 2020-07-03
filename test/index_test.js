'use strict';
var yadaWallet = require('../lib/wallet');

describe('yadaWallet', () => {
    const Wallet = new yadaWallet('127.0.0.1', 28082, 'user', 'pass'); // Edit to match your own hostname, port, RPC username (if RPC login enabled,) and RPC password.

    // Disabled these checks because users may access unique daemon hostname:port combinations.
    // describe('constructor', () => {
    //     it('should have default host set to `127.0.0.1`', () => {
    //         new yadaWallet().hostname.should.equal('127.0.0.1');
    //     });
    //
    //     // it('should have default port set to 18082', () => {
    //     //     new yadaWallet().port.should.equal(18082);
    //     // });
    // });

    describe('methods', () => {
        describe('create_wallet()', () => {
            it('should create a new wallet yadacoin_wallet (if yadacoin_wallet doesn\'t exist)', (done) => {
                Wallet.create_wallet('yadacoin_wallet').then(function(result){
                    if (result.hasOwnProperty('error')) {
                        if (result.hasOwnProperty('error')) {
                            if (result.error.code == -21) {
                                result.error.code.should.be.equal(-21)
                            }
                        }
                    } else {
                        result.should.be.a.Object();
                    }
                    done();
                })
            })
        })

        describe('open_wallet()', () => {
            it('should open yadacoin_wallet', (done) => {
                Wallet.open_wallet('yadacoin_wallet').then(function(result){
                    result.should.be.a.Object();
                    done();
                })
            })
        })

        describe('balance()', () => {
            it('should retrieve the account balance', (done) => {
                Wallet.balance().then(function(result){
                    result.balance.should.be.a.Number();
                    done();
                })
            })
        })

        describe('address()', () => {
            it('should return the account address', (done) => {
                Wallet.address().then(function(result){
                    result.address.should.be.a.String();
                    done();
                })
            })
        })
    })
})
