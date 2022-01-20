const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'secret code',        // 세션에 대한 코드
    resave: false,                // request 요청이 왔을 때, session에 수정사항이 생기지 않더라도 다시 저장하도록 하는 설정.
    saveUninitialized: false,     // 세션에 저장한 내역이 없더라도 내역을 항상 저장하도록 하는 설정
    cookie: {
        secure: true,            // 보안
        maxAge: 1000 * 60 * 60   // cookie 유효시간 : 1시간
    }
}))

const server = app.listen(3000, () => {
    console.log('Server Started... port:3000')
})

// database connection description
const db = {
    database: 'dev',
    connectionLimit: 10,
    host: '192.168.219.106',
    port: '3307',
    user: 'root',
    password: 'mariadb'
}

const dbPool = require('mysql').createPool(db)      // query를 나중에 날리기위해 미리 설정

app.post('/api/login', async (req, res) => {
     
})

app.post('/api/logout', async (req, res) => {
     
})

const sql = require('./sql')    // sql.js 호출

// login, logout 이외의 모든 경로는 이곳으로 향한다.
app.post('/api/:alias', async (requset, res) => {
    try {
        res.send(await req.db(requset.params.alias))
    } catch (error) {
        res.status(500).send({
            error: error
        })
    }
})

const req = {
    async db(alias, param = [], where = '') {
      return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY')
            console.log(error);
          resolve({
            error
          });
        } else resolve(rows);
      }));
    }
  };