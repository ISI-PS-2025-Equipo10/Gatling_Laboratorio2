package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class Login200Test extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

  // 2 Scenario Definition
  val scn = scenario("Login de 200 usuarios").
    exec(http("login_200")
      .get(s"/login/$username/$password")
       //Recibir información de la cuenta
      .check(status.is(200))
    )

  // 3 Load Scenario
  setUp(
    scn.inject(
      atOnceUsers(200), // carga 200 usuarios
    ) 
      
  ).protocols(httpConf)
    .assertions(
      global.responseTime.max.lte(5000),      // Tiempo máximo de respuesta ≤ 5s
    )
  ;
}