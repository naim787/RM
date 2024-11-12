package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/syndtr/goleveldb/leveldb"
)
type component struct {
  Code string
  Type string
  Install string
}

type Core struct {
  cmp []component
  rscTl string
  allComponent string
}

func dbBacaDATA() *Core {
  // meggambil Parent Core
  cor := Core{}
  
  // open koneksi
  // open koneksi
 dataBase, err := leveldb.OpenFile("./data/data.db", nil)
 if err != nil {
   log.Fatal(err)
 }
  defer dataBase.Close()
  
  data, err := dataBase.Get([]byte("DataCore"), nil)
  if err != nil {log.Fatal(err)}
  
  fmt.Println(data)
 // rubah type data json ke type data golang
 // err = json.Unmarshal(data, &cor)
 // if err != nil {log.Fatal(err)}
  fmt.Println("berhasil membaca data :", cor)
  return &cor
}


func dbSimpanDATA(Code, Type, Install string) {
  smuaData := dbBacaDATA()
  // meginitialisasi data yang masuk
  cp := component{
    Code : Code,
    Type : Type,
    Install : Install,
  }
  smuaData.cmp = append(smuaData.cmp, cp)
  
  // parsig data golang ke type data json
  jsonData, err := json.Marshal(smuaData)
	if err != nil { log.Fatal(err) }
  
  // open koneksi
 // open koneksi
 db, err := leveldb.OpenFile("./data/data.db", nil)
 if err != nil {
   log.Fatal(err)
 }
 defer db.Close()
  
  // masukan data ke database deggan key DataCore
 err = db.Put([]byte("DataCore"), jsonData, nil)
 if err != nil { log.Fatal(err) }
}



func main() {
 app := fiber.New()

 app.Use(cors.New(cors.Config{
   AllowOrigins : "*",
   AllowHeaders : "Origin, Content-Type, Accept",
   AllowMethods : "*",
 }))
 
 dbSimpanDATA("html", "navigasi", "pnpm install")
 
 app.Get("/api/data", func(c *fiber.Ctx) error {
   return c.JSON(fiber.Map{
     "core" : "naim",
   })
 })
 
 fmt.Println("Server berjalan di port 8080")
 log.Fatal(app.Listen(":8080"))
}