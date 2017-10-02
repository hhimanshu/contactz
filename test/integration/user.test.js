import app from "../../src/app";
import request from "supertest";
import expect from "expect.js";
import db from "../../db/models";

let user = {
    id: 10,
    firstName: "john",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    password: "john",
    createdAt: new Date(),
    updatedAt: new Date()
};

/**
 * http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-sync
 * If force is true, each Model will run DROP TABLE IF EXISTS, before it tries to create its own table
 */
describe("Load Users", function () {
    it('loads correctly', function (done) {
        db.sequelize.sync({force: true}).then(() => {
            db.User.create(user).then(() => {
                request(app)
                    .get('/users')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .then(response => {
                        let responseJson = JSON.parse(response.text);
                        expect(responseJson).to.have.length(1);
                        expect(responseJson[0].id).to.be(user.id);
                        done();
                    });
            });
        });
    });
});