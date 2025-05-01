package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class Login100Test extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

  // 2 Scenario Definition
  val scn = scenario("Login de 100 usuarios").
    exec(http("login_100")
      .get(s"/login/$username/$password")
       //Recibir información de la cuenta
      .check(status.is(200))
    )

  // 3 Load Scenario
  setUp(
    scn.inject(
      atOnceUsers(100), // carga 100 usuarios
    ) 
      
  ).protocols(httpConf)
    .assertions(
      global.responseTime.max.lte(2000),      // Tiempo máximo de respuesta ≤ 2s
    )
  ;
}