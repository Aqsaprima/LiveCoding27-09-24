const fs = require("fs")

// read file index.txt
let loveLetter = fs.readFileSync("./index.txt", "utf-8")
console.log(`ini baris 5: ${loveLetter}`)

// make new file 
const loveFeedback = "aku juga sayang fsw 2"
fs.writeFileSync("./balasan.txt", loveFeedback)
// fs.mkdir("COBA_BIKIN_FOLDER_2", () => {})

// menimpa isi konten dari index.txt
fs.writeFileSync("./index.txt", "test1")

// asyncronous read file
loveLetter = fs.readFile("./index.txt", "utf-8")
console.log(`ini baris 23: ${loveLetter}`)

async function bacaSuratCinta() {
  try {
      const bacaSuratCinta = await fs.readFile('./index.txt', "utf-8") 
      console.log(`ini surat cinta ${bacaSuratCinta}`)
  } catch (error) {
      console.log(error)
  }
}