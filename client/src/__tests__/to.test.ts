import { to } from '../utils/to';

describe('to utility function', () => {
    test('should return result and null error on successful promise', async () => {
        const successfulPromise = Promise.resolve('Success');
        const [error, result] = await to(successfulPromise);

        expect(error).toBeNull();
        expect(result).toBe('Success');
    });

    test('should return null result and error on failed promise', async () => {
        const failedPromise = Promise.reject(new Error('Something went wrong'));
        const [error, result] = await to(failedPromise);

        expect(error).toBeInstanceOf(Error);
        expect(error?.message).toBe('Something went wrong');
        expect(result).toBeNull();
    });

    test('should handle non-promise values', async () => {
        const nonPromiseValue = 'Some value';
        const [error, result] = await to(Promise.resolve(nonPromiseValue));

        expect(error).toBeNull();
        expect(result).toBe('Some value');
    });
});
