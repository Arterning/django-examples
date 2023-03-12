module.exports = {
    type:'postgres',
    host:process.env.HOST,
    port:5432,
    username:process.env.USER,
    password: process.env.PASS,
    database:'coffee',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations'],
    cli: {
        migrationsDir: 'src/migrations'
    }
}