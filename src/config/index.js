/**
 * 环境配置封装
 * @type {string|string}
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    development: {
        baseUrl: 'http://localhost:8000',
        mockUrl: 'http://localhost:8000'
    },
    test: {
        baseUrl: 'http://localhost:8000',
        mockUrl: 'http://localhost:8000'
    },
    prod: {
        baseUrl: 'http://localhost:8000',
        mockUrl: 'http://localhost:8000'
    }
}
export default {
    env,
    ...EnvConfig[env]
}
