package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class LoginTest extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

  // 2 Scenario Definition
  val scn = scenario("Login").
    exec(http("login")
      .get(s"/login/$username/$password")
       //Recibir información de la cuenta
      .check(status.is(200))
    )

  // 3 Load Scenario 
  setUp(
    scn.inject(
      atOnceUsers(100), // carga 100
      nothingFor(5),
      atOnceUsers(100)  // luego carga 200
  ) 
      
  ).protocols(httpConf)
    .assertions(
      // Durante la carga normal: 100 usuarios
      forAll.responseTime.max.lte(2000),  // Tiempo máximo de respuesta ≤ 2s 
      // Durante la carga completa: 200 usuarios
      global.responseTime.max.lte(5000)     // Tiempo máximo de respuesta ≤ 5s
    )
  ;
}