/**
 * 环境配置封装
 * @type {string|string}
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseUrl: 'localhost:8000',
        mockUrl: 'localhost:8000'
    },
    test: {
        baseUrl: 'localhost:8000',
        mockUrl: 'localhost:8000'
    },
    prod: {
        baseUrl: 'localhost:8000',
        mockUrl: 'localhost:8000'
    }
}
export default {
    env,
    mock: true,
    ...EnvConfig[env]
}
