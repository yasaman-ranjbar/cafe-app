/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/products',
                destination: '/menu',
                permanent: true,
            },
        ]
    },
    // access env variables to client side
    // env: {
    //     dbName: "HinaWeb"
    // }
    // basePath: process.env.BASE_PATH, // this is costume start rout
}

module.exports = nextConfig
