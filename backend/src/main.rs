use actix_web::{get, App, HttpServer, HttpResponse};
use serde::{Deserialize, Serialize};
use serde_json::Result;

#[derive(Serialize, Deserialize)]
struct Notice {
    title: String,
    body: String,
}

fn serialize()-> Result<String>{
    let data = Notice{
        title: "Nothing".to_owned(),
        body: "There is something".to_owned(),
    };
    let result = serde_json::to_string(&data)?;
    Ok(result)
}

#[get("/api/notice")]
async fn greet() -> HttpResponse {
    let value = serialize().unwrap();
    HttpResponse::Ok().body(value)
}

#[actix_web::main] 
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().service(greet)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}