const { admin } = require('../models');
const { StatusCodes } = require('http-status-codes');
const { viewAdmins, login, addAdmin } = require('../controllers/adminControllers');

jest.mock('../models', () => ({
  admin: {
    findAll: jest.fn(),
    count: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn()
  }
}));

describe('adminController', () => {
  describe('viewAdmins', () => {
    test('should return list of users and total count', async () => {
      const users = [{ id: 1, name: 'doremon' }, { id: 2, name: 'Moghees' }];
      const count = users.length;
      admin.findAll.mockReturnValue(users);
      admin.count.mockReturnValue(count);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await viewAdmins(req, res);

      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith({ count, users });
    });
  });

  describe('login', () => {
    test('should return user and token', async () => {
      const user = { id: 1, name: 'Moghees', token: jest.fn(() => 'token123') };
      admin.findOne.mockReturnValue(user);

      const req = { body: { username: 'moghees244', password: 'secret' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith({ user, token: 'token123' });
    });
  });

  describe('addAdmin', () => {
    test('should create a new admin user and return it', async () => {
      const newUser = { id: 1, name: 'Moghees', username: 'moghees244' };
      admin.create.mockReturnValue(newUser);

      const req = { body: { name: 'Moghees', username: 'moghees244', password: 'secret' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await addAdmin(req, res);

      expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
      expect(res.json).toHaveBeenCalledWith(newUser);
    });
  });
});
