import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)

const config = {
    alias: {
        '/@/': resolve('example'),
        '/@src/': resolve('src'),
        'makeit-captcha': '/@src/index.ts'
    },
    cssPreprocessOptions: {
        less: {
            javascriptEnabled: true
        }
    },
    proxy: {
        '/v1': {
            target: 'http://local-account.makeit.vip',
            changeOrigin: true
        }
    }
}
module.exports = config