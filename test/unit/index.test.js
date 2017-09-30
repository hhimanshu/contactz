import expect from "expect.js";

describe('models/index', function () {
    it('returns the User model', function () {
        let models = require('../../db/models');
        expect(models.User).to.be.ok();
    });

    it('returns the Contact model', function () {
        let models = require('../../db/models');
        expect(models.Contact).to.be.ok();
    });
});
