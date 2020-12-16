var assert = require('assert')
var foxrot = function (f){
    return ("The headline is " + f);
}


describe("checkHeadline", function(){
    it("should return 'The headline is Became a game developer'", function (){
        var retval = foxrot("gamedeveloper");

        assert.equal(retval, "The headline is Became a game developer");
    });
});

describe('emailValidation', () => {

    const data ['Adam5', 'Ad@m.com', 'Ad-am@gmail.com']

    itParam('will reject invalid inputs', data, (name) => {
        let vali = validateMailingEmail(name);
        expect(valid).to.be.false;
    });
});

describe('the search filter', function(){
    it('return at least one result when serch term is present',
        inject(() => {
            const vm = getQueuedAssetsController();

            vm.queuedAssetsDataStore = getDataArray();
            vm.search = 'right';
        }));
});

describe('Home Page', function(){
    it('should be the default page', function(){
        browser.get(browser.baseUrl);
        expect(browser.getCurrentUrl())
            .toEqual(browser.baseUrl + 'projectsinfo');
    });
});

describe('form validation', function(){
    it('number in Name field is invalid', () =>
        let valid = validateName('Adam5');
        expect(valid).to.be.false;
});
