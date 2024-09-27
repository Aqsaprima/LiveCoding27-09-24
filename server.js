const http = require("http")
const url = require("url")
const fs = require("fs")
const fsAsync = require("fs").promises

const fileUtama = fs.readFileSync("./index.txt", "utf-8")

// express = framework third party untuk memudahkan HTTP
const server = http.createServer((req, res) => {
  console.log(req.url)
  const pathUrl = req.url

  // default selalu ada:
  // localhost:3000/ = health check, cek aplikasi berjalan
  // 404 = handle jika url tidak ada
  if(pathUrl === "/yogi"){
    res.end("ini tugas yang yogi")
  } else if(pathUrl === "/"){
    res.end("dafault page")
  } else {
    res.end("ini kosong status code : 404")
  }
})

server.listen(3000, '127.0.0.1', () => {
  console.log("Aplikasi berjalan di port 3000")
})

async function rewriteFromImam(filePath, content) {
  try {
      const bacaSuratCinta = await fsAsync.readFile('./index.txt', "utf-8") 
      console.log(`ini surat cinta ${bacaSuratCinta}`)
  } catch (error) {
      console.log(error)
  }
}